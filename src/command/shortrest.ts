import ExtInfo = seal.ExtInfo;
import {getPlayer} from "../utils/utils";
import {playerMap, Save} from "../io/io_helper";
import {COMMAND_SHORTREST_HELP} from "../data/values";

export function getShortRestCommand(ext: ExtInfo) {
  const cmdShortRest = seal.ext.newCmdItemInfo();
  cmdShortRest.name = 'shortrest';
  cmdShortRest.help = COMMAND_SHORTREST_HELP;
  cmdShortRest.allowDelegate = true;
  cmdShortRest.solve = (rctx, msg, cmdArgs) => {
    let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
    let player = getPlayer(mctx, msg, cmdArgs, ext);
    if (!player) {
      return seal.ext.newCmdExecuteResult(true);
    }
    if (!player.shortRest) {
      player.shortRest = new Map<string, string>();
    }
    let arg1 = cmdArgs.getArgN(1);
    switch (arg1) {
      case 'help': {
        seal.replyToSender(rctx, msg, cmdShortRest.help);
        return seal.ext.newCmdExecuteResult(true);
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
              throw new Error(`设置短休错误: ${key} 不能以max结尾，请使用.st ${key} 设置最大值`);
            }
            let maxVal = seal.format(mctx, `{${key}max}`);
            let max = parseInt(maxVal);
            if (isNaN(max) || max <= 0) {
              throw new Error(`设置短休错误: ${key}max 未设置或不为正整数`);
            }
            let value = argPair[1];
            argArr.push({key, value});
            if (!player.longRest) {
              player.shortRest = new Map<string, string>();
            }
            player.shortRest.set(key, value);
          } catch (e) {
            seal.replyToSender(rctx, msg, e);
            return seal.ext.newCmdExecuteResult(true);
          }
          argIndex++;
        }
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `${seal.format(mctx,"{$t玩家}")}已设置短休属性:\n${argArr.map((arg) => `${arg.key}: ${arg.value}`).join('\n')}`);
        break;
      }
      case 'show': {
        let text = '短休属性:\n';
        let isEmpty = true;
        if (player.shortRest) {
          player.shortRest.forEach((value, key) => {
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
      case 'clr': {
        player.shortRest = new Map<string, string>();
        Save(playerMap, ext);
        seal.replyToSender(rctx, msg, `${seal.format(mctx, "{$t玩家}")}已清空短休属性`);
        break;
      }
      default: {
        if (arg1) {
          seal.replyToSender(rctx, msg, `未知参数: ${arg1} 使用 .shortrest help 查看帮助`);
          return seal.ext.newCmdExecuteResult(true);
        }
        let shortRestCount = 0;
        let oldVal = new Map<string, number>();
        let newVal = new Map<string, number>();
        try {
          player.shortRest.forEach((value, key) => {
            let val = parseInt(seal.format(mctx, `{${value}}`));
            if (isNaN(val)) {
              throw new Error(`${seal.format(mctx, "{$t玩家}")}的短休产生错误: ${key} 值不是整数`);
            }
            let maxVal = seal.format(mctx, `{${key}max}`);
            let max = parseInt(maxVal);
            if (isNaN(max) || max <= 0) {
              throw new Error(`${seal.format(mctx, "{$t玩家}")}的短休产生错误: ${key}max 未设置或不为正整数`);
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
            oldVal.set(key, current);
            newVal.set(key, setVal);
            shortRestCount++;
          });
          if (shortRestCount === 0) {
            seal.replyToSender(rctx, msg, `${seal.format(mctx, "{$t玩家}")}的短休：\n没有属性更新`);
          } else {
            let text = `${seal.format(mctx, "{$t玩家}")}的短休：共计 ${shortRestCount} 项属性已更新\n`;
            newVal.forEach((value, key) => {
              seal.vars.intSet(mctx, `${key}`, value);
              text += `${key}: ${oldVal.get(key)} -> ${value}\n`;
            });
            seal.replyToSender(rctx, msg, text);
          }
        } catch (e) {
          console.error(e);
          seal.replyToSender(rctx, msg, e);
        }
      }
    }
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdShortRest;
}
