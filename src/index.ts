import { sample } from "lodash-es";
import {generateUUID, nameList} from "./utils";
import {Player} from "./types";

function main() {
  // 注册扩展
  let ext = seal.ext.find('inventory');
  if (!ext) {
    ext = seal.ext.new('inventory', 'Szzrain', '1.0.0');
    seal.ext.register(ext);
  } else {
    throw new Error('inventory 扩展已存在');
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
    ext.storageSet("playerMap", JSON.stringify(Object.fromEntries(playerMap)));
  }

  const playerMap = playerLoad();

  // 编写指令
  const cmdInventory = seal.ext.newCmdItemInfo();
  cmdInventory.name = 'inventory';
  cmdInventory.help = '物品栏：\n.inventory: 查看背包物品\n.inventory add 物品 [数量]: 添加物品\ninventory remove 物品 [数量]: 移除物品\ninventory view 物品: 查看物品属性';
  cmdInventory.allowDelegate = true;
  cmdInventory.solve = (rctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    let text = '';
    let mctx = seal.getCtxProxyFirst(rctx, msg);
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
        const item = cmdArgs.getArgN(2);
        const numRaw = cmdArgs.getArgN(3) || "1";
        let num = parseInt(numRaw);
        if (isNaN(num) || num < 1) {
          seal.replyToSender(rctx, msg, `添加物品失败：数量不合法，应为正整数`);
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(rctx, msg, `已添加${num}个${item}`);
        return seal.ext.newCmdExecuteResult(true);
      }
      default: {
        // 命令为 .seal XXXX，取第一个参数为名字
        if (!val) val = sample(nameList); // 无参数，随机名字
        seal.replyToSender(rctx, msg, `你抓到一只海豹！取名为${val}\n它的逃跑意愿为${Math.ceil(Math.random() * 100)}`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }

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
  cmdViewI.name = 'views';
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
