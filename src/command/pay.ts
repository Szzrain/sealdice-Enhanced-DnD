import ExtInfo = seal.ExtInfo;
import {Price} from "../types";
import {playerReduceMoney} from "../utils/utils";

export function getPayCommand(_: ExtInfo) {
  const cmdPay = seal.ext.newCmdItemInfo();
  cmdPay.name = 'pay';
  cmdPay.help = '支付：\n.pay [钱币数]: 支付钱币\n 例：.pay 100gp; .pay 100sp; .pay 100cp\n如果@其他人: 支付给其他人';
  cmdPay.allowDelegate = true;
  cmdPay.solve = (rctx, msg, cmdArgs) => {
    let mctx = seal.getCtxProxyFirst(rctx, cmdArgs);
    let isDelegate = false;
    if (rctx.player.userId !== mctx.player.userId && rctx.delegateText !== '') {
      isDelegate = true;
      rctx.delegateText = `${seal.format(rctx, "{$t玩家}")}对${seal.format(mctx, "{$t玩家}")}的支付：\n`;
    }
    let val = cmdArgs.getArgN(1);
    if (!val) {
      seal.replyToSender(rctx, msg, '支付失败，请输入支付金额，使用例：.pay 100gp; .pay 100sp; .pay 100cp');
      return seal.ext.newCmdExecuteResult(true);
    }
    let rawArgs = cmdArgs.getRestArgsFrom(1);
    let args = rawArgs.split(' ');
    let amountTotal = new Price(0, 0, 0);
    try {
      args.forEach(coin => {
        const match = coin.match(/^(\d+)(gp|sp|cp)$/i);
        if (match) {
          const amount = parseInt(match[1], 10);
          const type = match[2].toLowerCase();
          amountTotal[type] += amount;
        } else {
          throw new Error(`支付失败：'${coin}' 格式错误，应为数字+单位，如100gp、100sp、100cp`);
        }
      });
    } catch (e) {
      seal.replyToSender(rctx, msg, e);
      return seal.ext.newCmdExecuteResult(true);
    }
    let playerGp = seal.vars.intGet(rctx, "gp");
    let playerSp = seal.vars.intGet(rctx, "sp");
    let playerCp = seal.vars.intGet(rctx, "cp");
    if (!playerGp[1] || !playerSp[1] || !playerCp[1]) {
      seal.replyToSender(rctx, msg, `支付失败：你的gp,sp,或cp未录入，请先使用 .st 指令录入`);
      return seal.ext.newCmdExecuteResult(true);
    }
    if (amountTotal.gp === 0 && amountTotal.sp === 0 && amountTotal.cp === 0) {
      seal.replyToSender(rctx, msg, `支付失败：支付金额不能为0`);
      return seal.ext.newCmdExecuteResult(true);
    }
    let reduceMoneyResult = playerReduceMoney(rctx, amountTotal.gp, amountTotal.sp, amountTotal.cp, false);
    if (!reduceMoneyResult[0]) {
      seal.replyToSender(rctx, msg, `支付失败：持有的钱币不足`);
      return seal.ext.newCmdExecuteResult(true);
    }
    let text = `支付成功，${seal.format(rctx, "{$t玩家}")}的钱包：\n`;
    text += (reduceMoneyResult[1] as Price).gp !== 0 ? `GP: ${playerGp[0]} -> ${playerGp[0]-(reduceMoneyResult[1] as Price).gp}\n` : '';
    text += (reduceMoneyResult[1] as Price).sp !== 0 ? `SP: ${playerSp[0]} -> ${playerSp[0]-(reduceMoneyResult[1] as Price).sp}\n` : '';
    text += (reduceMoneyResult[1] as Price).cp !== 0 ? `CP: ${playerCp[0]} -> ${playerCp[0]-(reduceMoneyResult[1] as Price).cp}` : '';
    if (isDelegate) {
      let receivePlayerGp = seal.vars.intGet(mctx, `gp`)[0];
      let receivePlayerSp = seal.vars.intGet(mctx, `sp`)[0];
      let receivePlayerCp = seal.vars.intGet(mctx, `cp`)[0];
      text += `\n${seal.format(mctx, "{$t玩家}")}的钱包：\n`;
      text += ((reduceMoneyResult[1] as Price).gp !== 0) ? `GP: ${receivePlayerGp} -> ${(reduceMoneyResult[1] as Price).gp+receivePlayerGp}\n` : '';
      text += ((reduceMoneyResult[1] as Price).sp !== 0) ? `SP: ${receivePlayerSp} -> ${(reduceMoneyResult[1] as Price).sp+receivePlayerSp}\n` : '';
      text += ((reduceMoneyResult[1] as Price).cp !== 0) ? `CP: ${receivePlayerCp} -> ${(reduceMoneyResult[1] as Price).cp+receivePlayerCp}` : '';
      receivePlayerGp += (reduceMoneyResult[1] as Price).gp;
      receivePlayerSp += (reduceMoneyResult[1] as Price).sp;
      receivePlayerCp += (reduceMoneyResult[1] as Price).cp;
      if (receivePlayerGp < 0 || receivePlayerSp < 0 || receivePlayerCp < 0) {
        seal.replyToSender(rctx, msg, `支付失败：对方持有的用于找零的钱币不足`);
        return seal.ext.newCmdExecuteResult(true);
      }
      seal.vars.intSet(mctx, `gp`, receivePlayerGp);
      seal.vars.intSet(mctx, `sp`, receivePlayerSp);
      seal.vars.intSet(mctx, `cp`, receivePlayerCp);
    }
    playerReduceMoney(rctx, amountTotal.gp, amountTotal.sp, amountTotal.cp, true);
    seal.replyToSender(rctx, msg, text);
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdPay;
}
