import ExtInfo = seal.ExtInfo;
import {itemMap, playerMap, Save} from "../io/io_helper";
import {InventoryInfo, Player} from "../types";
import {generateUUID, playerReduceMoney} from "../utils/utils";
import {COMMAND_INVENTORY_HELP} from "../data/values";

export function getInventoryCommand(ext: ExtInfo) {
  // 编写指令
  const cmdInventory = seal.ext.newCmdItemInfo();
  cmdInventory.name = 'inventory';
  cmdInventory.help = COMMAND_INVENTORY_HELP;
  cmdInventory.allowDelegate = true;
  cmdInventory.solve = (rctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    let text = '';
    let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
    let userId = mctx.player.userId;
    let msgTaskArgs = [rctx.endPoint.userId, rctx.group.groupId, msg.guildId, userId, (msg.messageType === "private")];
    let userMap = playerMap.get(userId);
    if (!userMap) {
      userMap = new Map<string, Player>();
      playerMap.set(userId, userMap);
    }
    let player = userMap.get(seal.vars.strGet(mctx, `$bind_inv`)[0]);
    if (!seal.vars.strGet(mctx, `$bind_inv`)[1] || !player) {
      player = new Player(msgTaskArgs, seal.format(mctx, `{$t玩家}`));
      let uuid = generateUUID();
      while (userMap.has(uuid)) {
        uuid = generateUUID();
      }
      seal.vars.strSet(mctx, `$bind_inv`, uuid);
      userMap.set(seal.vars.strGet(mctx, `$bind_inv`)[0], player);
      Save(playerMap, ext);
      text += "已初始化物品栏并自动绑定\n";
      text += "请不要删除角色卡中的 $bind_inv 变量\n\n";
    } else {
      let currentname = seal.format(mctx, `{$t玩家}`);
      if (player.name !== currentname && val !== 'fmt') {
        seal.replyToSender(rctx, msg, `检测到当前角色名与绑定物品栏时不符，物品栏已绑定至角色${player.name}，当前角色名：${currentname}，强制转换物品栏角色名请使用.inv fmt`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
    switch (val) {
      case 'help': {
        seal.replyToSender(rctx, msg, `${text}${cmdInventory.help}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'add': {
        const itemName = cmdArgs.getArgN(2);
        const numRaw = cmdArgs.getArgN(3) || "1";
        let num = parseInt(numRaw);
        if (isNaN(num) || num < 1) {
          seal.replyToSender(rctx, msg, `添加物品失败：数量不合法，应为正整数`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let itemInfo = itemMap.get(itemName);
        if (!itemInfo) {
          seal.replyToSender(rctx, msg, `添加物品失败：未找到物品${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let playerItem = player.items.get(itemName);
        if (!playerItem) {
          playerItem = new InventoryInfo(itemName, 0);
          playerItem.use = itemInfo.use;
        }
        playerItem.count += num;
        player.items.set(itemName, playerItem);
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `已添加${num}个${itemName}到${seal.format(mctx, "{$t玩家}")}的物品栏`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'buy': {
        const itemName = cmdArgs.getArgN(2);
        const itemNum = cmdArgs.getArgN(3) || "1";
        let num = parseInt(itemNum);
        if (isNaN(num) || num < 1) {
          seal.replyToSender(rctx, msg, `购买物品失败：数量不合法，应为正整数`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let itemInfo = itemMap.get(itemName);
        if (!itemInfo) {
          seal.replyToSender(rctx, msg, `购买物品失败：未找到物品${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        if (!itemInfo.canBuy) {
          seal.replyToSender(rctx, msg, `购买物品失败：${itemName}不可购买`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let price = itemInfo.price;
        // let playerGp = seal.vars.intGet(rctx, "gp");
        // let playerSp = seal.vars.intGet(rctx, "sp");
        // let playerCp = seal.vars.intGet(rctx, "cp");
        // if (!playerGp[1] || !playerSp[1] || !playerCp[1]) {
        //   seal.replyToSender(rctx, msg, `购买物品失败：gp,sp,或cp未录入，请先使用 .st 指令录入`);
        //   return seal.ext.newCmdExecuteResult(true);
        // }
        if (!playerReduceMoney(mctx, price.gp*num, price.sp*num, price.cp*num)[0]) {
          seal.replyToSender(rctx, msg, `购买物品失败：你的货币不足`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let playerItem = player.items.get(itemName);
        if (!playerItem) {
          playerItem = new InventoryInfo(itemName, 0);
          playerItem.use = itemInfo.use;
        }
        playerItem.count += num;
        player.items.set(itemName, playerItem);
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `${seal.format(mctx, "{$t玩家}")} 已购买 ${itemName} * ${num}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'use': {
        const itemName = cmdArgs.getArgN(2);
        let playerItem = player.items.get(itemName);
        if (!playerItem) {
          seal.replyToSender(rctx, msg, `使用物品失败：${seal.format(mctx, "{$t玩家}")}没有${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let itemInfo = itemMap.get(itemName);
        if (!itemInfo) {
          seal.replyToSender(rctx, msg, `使用物品失败：未找到物品${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let result = itemInfo.useItem(mctx, msg, player, playerItem);
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, result);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'remove': {
        const itemName = cmdArgs.getArgN(2);
        let playerItem = player.items.get(itemName);
        if (!playerItem) {
          seal.replyToSender(rctx, msg, `移除物品失败：${seal.format(mctx, "{$t玩家}")}没有${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let itemInfo = itemMap.get(itemName);
        if (!itemInfo) {
          seal.replyToSender(rctx, msg, `移除物品失败：未找到物品${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let numRaw = cmdArgs.getArgN(3) || "1";
        let num = parseInt(numRaw);
        if (isNaN(num) || num < 1) {
          seal.replyToSender(rctx, msg, `移除物品失败：数量不合法，应为正整数`);
          return seal.ext.newCmdExecuteResult(true);
        }
        if (playerItem.count < num) {
          seal.replyToSender(rctx, msg, `移除物品失败：${seal.format(mctx, "{$t玩家}")}没有足够的${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        playerItem.count -= num;
        if (playerItem.count === 0) {
          player.items.delete(itemName);
        } else {
          playerItem.use = itemInfo.use;
          player.items.set(itemName, playerItem);
        }
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `已从${seal.format(mctx, "{$t玩家}")}的物品栏移除${num}个${itemName}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'fmt': {
        player.name = seal.format(mctx, `{$t玩家}`);
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `已将物品栏绑定至角色${player.name}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'des': {
        const itemName = cmdArgs.getArgN(2);
        let itemInfo = itemMap.get(itemName);
        if (!itemInfo) {
          seal.replyToSender(rctx, msg, `查看物品失败：未找到物品${itemName}`);
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(rctx, msg, itemInfo.description);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'reset': {
        playerMap.delete(userId);
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `已重置${seal.format(mctx, "{$t玩家}")}的所有绑定物品栏`);
        return seal.ext.newCmdExecuteResult(true);
      }
      default: {
        if (val) {
          seal.replyToSender(rctx, msg, `未知参数：${val}，请使用.inv help查看帮助`);
          return seal.ext.newCmdExecuteResult(true);
        }
        text += `${seal.format(mctx, "{$t玩家}")}的物品栏：\n`;
        let isEmpty = true;
        player.items.forEach((value, key) => {
          if (value.count > 0) {
            text += `${key}: ${value.count} `;
            if (value.use > 0) {
              text += `剩余使用次数: ${value.use}`;
            }
            text += '\n';
            isEmpty = false;
          }
        })
        if (isEmpty) {
          text += '空空如也';
        }
        seal.replyToSender(rctx, msg, text);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }
  return cmdInventory;
}
