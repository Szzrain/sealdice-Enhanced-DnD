import {Init, playerMap, Save} from "./io/io_helper";
import {getInventoryCommand} from "./command/inventory";
import {getShopCommand} from "./command/shop";
import {getLrCommand} from "./command/lr";
import {Player} from "./types";
import {generateUUID} from "./utils";

function main() {
  // 注册扩展
  let ext = seal.ext.find('enhanced-dnd');
  if (!ext) {
    ext = seal.ext.new('enhanced-dnd', 'Szzrain', '1.0.0');
    seal.ext.register(ext);
  } else {
    throw new Error('enhanced-dnd 加载失败：同名扩展已存在');
  }

  Init(ext);
  // 注册命令
  ext.cmdMap['shop'] = getShopCommand(ext);

  ext.cmdMap['inventory'] = getInventoryCommand(ext);
  ext.cmdMap['inv'] = getInventoryCommand(ext);

  ext.cmdMap['lr'] = getLrCommand(ext);

  ext.onCommandReceived = (rctx, msg, cmdArgs) => {
    if ((cmdArgs.command == "longrest" || cmdArgs.command == "长休") && (!cmdArgs.getArgN(1))) {
      console.log('longrest triggered');
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
        Save(playerMap, ext);
      }
      if (!player.longRest) {
        player.longRest = new Map<string, string>();
      }
      let longRestCount = 0;
      player.longRest.forEach((value, key) => {
        let val = parseInt(seal.format(mctx, `{${value}}`));
        if (isNaN(val)) {
          console.error(`longrest: ${key} value ${value} is not a number`);
          return;
        }
        let maxVal = seal.vars.intGet(mctx, `${key}max`);
        if (!maxVal[1]) {
          console.error(`longrest: ${key}max not found`);
          return;
        }
        let currentVal = seal.vars.intGet(mctx, `${key}`);
        let current = currentVal[0];
        if (!currentVal[1]) {
          current = 0;
        }
        let setVal = val + current;
        if (val + current > maxVal[0]) {
          setVal = maxVal[0];
        }
        seal.vars.intSet(mctx, `${key}`, setVal);
        console.log(`longrest: ${key} set to ${setVal}`);
        longRestCount++;
      });
      if (longRestCount === 0) {
        console.log('longrest: no attribute updated');
        return;
      } else {
        setTimeout(() => {
          // 延迟发送消息
          seal.replyToSender(rctx, msg, `${seal.format(mctx, "{$t玩家}")}的扩展长休：共计 ${longRestCount} 项属性已更新`);
        }, 2000);
        return;
      }
    }
  }

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
