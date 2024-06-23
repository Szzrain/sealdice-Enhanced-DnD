import {generateUUID, loadItemMap, playerReduceMoney} from "./utils";
import {InventoryInfo, Player} from "./types";

function main() {
  // 注册扩展
  let ext = seal.ext.find('enhanced-dnd');
  if (!ext) {
    ext = seal.ext.new('enhanced-dnd', 'Szzrain', '1.0.0');
    seal.ext.register(ext);
  } else {
    throw new Error('enhanced-dnd 加载失败：同名扩展已存在');
  }

  function playerLoad() {
    let playerMapTemp = new Map<string, Map<string,Player>>();
    Object.entries(JSON.parse(ext.storageGet("playerMap") || '{}')).forEach(([key, value]) => {
      let userMapTemp = new Map<string, Player>();
      Object.entries(value).forEach(([key, value]) => {
        let player = new Player([]);
        player.fromJSON(value);
        userMapTemp.set(key, player);
      });
      playerMapTemp.set(key, userMapTemp);
    });
    return playerMapTemp;
  }

  function save() {
    let playerMapTemp = new Map<string, object>();
    playerMap.forEach((value, key) => {
      let userMapTemp = new Map<string, object>();
      value.forEach((value, key) => {
        userMapTemp.set(key, value);
      });
      playerMapTemp.set(key, Object.fromEntries(userMapTemp));
    });
    ext.storageSet("playerMap", JSON.stringify(Object.fromEntries(playerMapTemp)));
  }

  const playerMap = playerLoad();

  const itemMap = loadItemMap();

  // 编写指令
  const cmdInventory = seal.ext.newCmdItemInfo();
  cmdInventory.name = 'inventory';
  cmdInventory.help = '物品栏：\n.inventory: 查看背包物品\n.inventory add 物品 [数量]: 添加物品\ninventory use 物品 [数量]: 使用\n.inventory buy 物品: 购买物品（根据价格扣除角色卡的gp，sp和cp属性）\n.inventory remove 物品 [数量]: 移除物品\n.inventory fmt: 强制绑定物品栏至当前角色\n.inventory des 物品: 查看物品描述\n.inventory help: 查看帮助';
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
      seal.vars.strSet(mctx, `$bind_inv`, generateUUID());
      userMap.set(seal.vars.strGet(mctx, `$bind_inv`)[0], player);
      save();
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
        save();
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
        let price = itemInfo.price;
        let playerGp = seal.vars.intGet(rctx, "gp");
        let playerSp = seal.vars.intGet(rctx, "sp");
        let playerCp = seal.vars.intGet(rctx, "cp");
        if (!playerGp[1] || !playerSp[1] || !playerCp[1]) {
          seal.replyToSender(rctx, msg, `购买物品失败：gp,sp,或cp未录入，请先使用 .st 指令录入`);
          return seal.ext.newCmdExecuteResult(true);
        }
        if (!playerReduceMoney(mctx, price.gp*num, price.sp*num, price.cp*num)) {
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
        save();
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
        save();
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
        save();
        seal.replyToSender(rctx, msg, `已从${seal.format(mctx, "{$t玩家}")}的物品栏移除${num}个${itemName}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'fmt': {
        player.name = seal.format(mctx, `{$t玩家}`);
        save();
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
        save();
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
              text += `剩余使用次数: ${value.use}`
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

  const cmdShop = seal.ext.newCmdItemInfo();
  cmdShop.name = 'shop';
  cmdShop.help = '商店：\n.shop: 查看商店物品';
  cmdShop.solve = (rctx, msg, _) => {
    let text = '商店：\n';
    let isEmpty = true;
    itemMap.forEach((value, key) => {
      if (!value.canBuy) {
        return;
      }
      text += `${key}: 价格 ${value.price.gp} gp ${value.price.sp} sp ${value.price.cp} cp\n`;
      isEmpty = false;
    })
    if (isEmpty) {
      text += '空空如也';
    }
    seal.replyToSender(rctx, msg, text);
    return seal.ext.newCmdExecuteResult(true);
  }
  ext.cmdMap['shop'] = cmdShop;

  // 注册命令
  ext.cmdMap['inventory'] = cmdInventory;
  ext.cmdMap['inv'] = cmdInventory;

  const cmdView = seal.ext.newCmdItemInfo();
  cmdView.name = 'view';
  cmdView.help = '查看属性raw';
  cmdView.solve = (ctx, msg, cmdArgs) => {
    seal.replyToSender(ctx, msg, seal.format(ctx, `{${cmdArgs.getArgN(1)}}`));
    return seal.ext.newCmdExecuteResult(true);
  }
  ext.cmdMap['view'] = cmdView;

  const cmdViewS = seal.ext.newCmdItemInfo();
  cmdViewS.name = 'views';
  cmdViewS.help = '查看属性 string';
  cmdViewS.solve = (ctx, msg, cmdArgs) => {
    let val = seal.vars.strGet(ctx, `${cmdArgs.getArgN(1)}`);
    console.log(JSON.stringify(val));
    if (!val[1]) {
      seal.replyToSender(ctx, msg, 'views: 未找到属性');
      return seal.ext.newCmdExecuteResult(true);
    }
    seal.replyToSender(ctx, msg, val[0]);
    return seal.ext.newCmdExecuteResult(true);
  }
  ext.cmdMap['views'] = cmdViewS;

  const cmdViewI = seal.ext.newCmdItemInfo();
  cmdViewI.name = 'viewi';
  cmdViewI.help = '查看属性 int';
  cmdViewI.solve = (ctx, msg, cmdArgs) => {
    let val = seal.vars.intGet(ctx, `${cmdArgs.getArgN(1)}`);
    console.log(JSON.stringify(val));
    if (!val[1]) {
      seal.replyToSender(ctx, msg, 'viewi: 未找到属性');
      return seal.ext.newCmdExecuteResult(true);
    }
    seal.replyToSender(ctx, msg, `${val[0]}`);
    return seal.ext.newCmdExecuteResult(true);
  }
  ext.cmdMap['viewi'] = cmdViewI;
}

main();
