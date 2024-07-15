import {itemMap} from "../io/io_helper";
import ExtInfo = seal.ExtInfo;

export function getShopCommand(_: ExtInfo) {
  const cmdShop = seal.ext.newCmdItemInfo();
  cmdShop.name = 'shop';
  cmdShop.help = '商店：\n.shop [页码]: 查看商店物品';
  cmdShop.solve = (rctx, msg, cmdArgs) => {
    let text = '商店：\n';
    let isEmpty = true;
    let val = cmdArgs.getArgN(1);
    let page = 1;
    if (val) {
      let num = parseInt(val);
      if (isNaN(num) || num < 1) {
        seal.replyToSender(rctx, msg, '页码不合法，应为正整数');
        return seal.ext.newCmdExecuteResult(true);
      }
      page = num;
    }
    let totalPage = Math.ceil(itemMap.size / 10);
    if (page > totalPage) {
      seal.replyToSender(rctx, msg, '页码超出范围');
      return seal.ext.newCmdExecuteResult(true);
    }
    let start = (page - 1) * 10;
    let end = 10;
    itemMap.forEach((value, key) => {
      if (!value.canBuy) {
        text += `${key}: 不可购买\n`;
        return;
      }
      if (start > 0) {
        start--;
        return;
      }
      if (end <= 0) {
        return;
      }
      end--;
      text += `${key}: 价格`;
      let isFree = true;
      if (value.price.gp !== 0) {
        text += ` ${value.price.gp}gp `;
        isFree = false;
      }
      if (value.price.sp !== 0) {
        text += ` ${value.price.sp}sp `;
        isFree = false;
      }
      if (value.price.cp !== 0) {
        text += ` ${value.price.cp}cp `;
        isFree = false;
      }
      if (isFree) {
        text += '免费';
      }
      text += '\n';
      isEmpty = false;
    })
    text += `第[${page}/${totalPage}]页`;
    if (isEmpty) {
      text += '空空如也';
    }
    seal.replyToSender(rctx, msg, text);
    return seal.ext.newCmdExecuteResult(true);
  }
  return cmdShop;
}
