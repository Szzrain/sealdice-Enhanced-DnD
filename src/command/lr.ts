import ExtInfo = seal.ExtInfo;
import {playerMap, Save} from "../io/io_helper";
import {Player} from "../types";
import {generateUUID} from "../utils";
import {COMMAND_LONGREST_HELP} from "../data/values";
import MsgContext = seal.MsgContext;

export function doLongRest(ext: ExtInfo, rctx: MsgContext, msg: any, cmdArgs: any) {
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

export function getLrCommand(ext: ExtInfo) {
  const cmdLr = seal.ext.newCmdItemInfo();
  cmdLr.name = 'lr';
  cmdLr.help = COMMAND_LONGREST_HELP
  cmdLr.allowDelegate = true;
  cmdLr.solve = (rctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
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
    } else {
      let currentname = seal.format(mctx, `{$t玩家}`);
      if (player.name !== currentname && val !== 'fmt') {
        seal.replyToSender(rctx, msg, `检测到当前角色名与绑定物品栏时不符，物品栏已绑定至角色${player.name}，当前角色名：${currentname}，强制转换物品栏角色名请使用.inv fmt`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
    switch (val) {
      case 'help': {
        seal.replyToSender(rctx, msg, cmdLr.help);
        return seal.ext.newCmdExecuteResult(true);
      }
      case 'rest': {
        doLongRest(ext, rctx, msg, cmdArgs);
        break;
      }
      case 'show': {
        let text = '扩展长休属性:\n';
        let isEmpty = true;
        if (player.longRest) {
          player.longRest.forEach((value, key) => {
            text += `${key}: ${value}\n`;
            isEmpty = false;
          });
        }
        if (isEmpty) {
          text += '空空如也';
        }
        seal.replyToSender(rctx, msg, text);
        break;
      }
      case 'st': {
        let argArr = [];
        let argIndex = 2;
        while (cmdArgs.getArgN(argIndex)) {
          let arg = cmdArgs.getArgN(argIndex);
          try {
            let argPair = arg.split('=');
            if (argPair.length !== 2) {
              throw new Error(`参数 ${argIndex}: ${arg} 格式错误，应当为 key=value 格式`);
            }
            let key = argPair[0];
            if (!seal.vars.intGet(mctx, key+"max")[1]) {
              throw new Error(`设置扩展长休错误: ${key}max 未设置或不为整数`);
            }
            let value = argPair[1];
            argArr.push({key, value});
            if (!player.longRest) {
              player.longRest = new Map<string, string>();
            }
            player.longRest.set(key, value);
          } catch (e) {
            seal.replyToSender(rctx, msg, e);
            return seal.ext.newCmdExecuteResult(true);
          }
          argIndex++;
        }
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `${seal.format(mctx,"{$t玩家}")}已设置长休属性:\n${argArr.map((arg) => `${arg.key}: ${arg.value}`).join('\n')}`);
        break;
      }
      case 'del': {
        let delSuccArr = [];
        let delFailArr = [];
        let argIndex = 2;
        while (cmdArgs.getArgN(argIndex)) {
          let arg = cmdArgs.getArgN(argIndex);
          try {
            let key = arg;
            if (!player.longRest) {
              player.longRest = new Map<string, string>();
            }
            if (player.longRest.delete(key)) {
              delSuccArr.push(key);
            } else {
              delFailArr.push(key);
            }
          } catch (e) {
            seal.replyToSender(rctx, msg, e);
            return seal.ext.newCmdExecuteResult(true);
          }
          argIndex++;
        }
        Save(playerMap, ext);
        let text = '';
        if (delSuccArr.length > 0) {
          text += `${seal.format(mctx, "{$t玩家}")}已删除长休属性:\n${delSuccArr.join('\n')}`;
        } else {
          text += `${seal.format(mctx, "{$t玩家}")}未删除任何长休属性`;
        }
        if (delFailArr.length > 0) {
          text += `\n未找到长休属性:\n${delFailArr.join('\n')}`;
        }
        seal.replyToSender(rctx, msg, text);
        break;
      }
      default: {
        if (!val) {
          seal.replyToSender(rctx, msg, cmdLr.help);
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(rctx, msg, `未知参数: ${val}`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdLr;
}
