import ExtInfo = seal.ExtInfo;
import {getPlayer} from "../utils/utils";

export function getShortRestCommand(ext: ExtInfo) {
  const cmdShortRest = seal.ext.newCmdItemInfo();
  cmdShortRest.name = 'shortrest';
  cmdShortRest.help = '短休：\n.shortrest: 进行短休';
  cmdShortRest.solve = (rctx, msg, cmdArgs) => {
    let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
    let player = getPlayer(mctx, msg, cmdArgs, ext);
    if (!player) {
      return seal.ext.newCmdExecuteResult(true);
    }
    if (!player.shortRest) {
      player.shortRest = new Map<string, string>();
    }
    seal.replyToSender(rctx, msg, '你进行了短休（WIP，暂无效果）');
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdShortRest;
}
