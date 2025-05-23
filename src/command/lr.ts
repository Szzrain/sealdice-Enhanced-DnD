import ExtInfo = seal.ExtInfo;
import {playerMap, Save} from "../io/io_helper";
import {getPlayer} from "../utils/utils";
import {COMMAND_LONGREST_HELP} from "../data/values";
import MsgContext = seal.MsgContext;

export function doLongRest(ext: ExtInfo, rctx: MsgContext, msg: any, cmdArgs: any) {
  let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
  let player = getPlayer(mctx, msg, cmdArgs, ext);
  if (!player) {
    return;
  }
  if (!player.longRest) {
    player.longRest = new Map<string, string>();
  }
  let longRestCount = 0;
  let oldVal = new Map<string, number>();
  let newVal = new Map<string, number>();
  try {
    player.longRest.forEach((value, key) => {
      let val = parseInt(seal.format(mctx, `{${value}}`));
      if (isNaN(val)) {
        throw new Error(`${seal.format(mctx, "{$t玩家}")}的扩展长休产生错误: ${key} 值不是整数`);
      }
      let maxVal = seal.format(mctx, `{${key}max}`);
      let max = parseInt(maxVal);
      if (isNaN(max) || max <= 0) {
        throw new Error(`${seal.format(mctx, "{$t玩家}")}的扩展长休产生错误: ${key}max 未设置或不为正整数`);
      }
      let currentVal = seal.vars.intGet(mctx, `${key}`);
      let current = currentVal[0];
      if (!currentVal[1]) {
        current = 0;
      }
      let setVal = val + current;
      if (val + current > max) {
        setVal = max;
      }
      // seal.vars.intSet(mctx, `${key}`, setVal);
      oldVal.set(key, current);
      newVal.set(key, setVal);
      longRestCount++;
    });
    if (longRestCount === 0) {
      return;
    } else {
      let text = `${seal.format(mctx, "{$t玩家}")}的扩展长休：共计 ${longRestCount} 项属性已更新\n`;
      newVal.forEach((value, key) => {
        seal.vars.intSet(mctx, `${key}`, value);
        text += `${key}: ${oldVal.get(key)} -> ${value}\n`;
      });
      seal.replyToSender(rctx, msg, text);
      return;
    }
  } catch (e) {
    console.error(e);
    seal.replyToSender(rctx, msg, e);
  }
}

export function getLrCommand(ext: ExtInfo) {
  const cmdLr = seal.ext.newCmdItemInfo();
  cmdLr.name = 'lr';
  cmdLr.help = COMMAND_LONGREST_HELP;
  cmdLr.allowDelegate = true;
  cmdLr.solve = (rctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
    let player = getPlayer(mctx, msg, cmdArgs, ext, val == 'fmt');
    if (!player) {
      return seal.ext.newCmdExecuteResult(true);
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
      case 'clr': {
        player.longRest = new Map<string, string>();
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `${seal.format(mctx, "{$t玩家}")}已清空长休属性`);
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
            if (key.endsWith('max')) {
              throw new Error(`设置扩展长休错误: ${key} 不能以max结尾，请使用.st ${key} 设置最大值`);
            }
            let maxVal = seal.format(mctx, `{${key}max}`);
            let max = parseInt(maxVal);
            if (isNaN(max) || max <= 0) {
              throw new Error(`设置扩展长休错误: ${key}max 未设置或不为正整数`);
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
        seal.replyToSender(rctx, msg, `未知参数: ${val} 使用 .lr help 查看帮助`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdLr;
}
