import {itemMap} from "../io/io_helper";
import ExtInfo = seal.ExtInfo;

export function getShopCommand(_: ExtInfo) {
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
  return cmdShop;
}
