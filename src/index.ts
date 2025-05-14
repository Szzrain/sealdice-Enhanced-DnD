import {Init} from "./io/io_helper";
import {getInventoryCommand} from "./command/inventory";
import {getShopCommand} from "./command/shop";
import {doLongRest, getLrCommand} from "./command/lr";
import {getPayCommand} from "./command/pay";
import {getShortRestCommand} from "./command/shortrest";
import {COMMAND_LONGREST_HELP} from "./data/values";

function main() {
  // 注册扩展
  let ext = seal.ext.find('enhanced-dnd');
  if (!ext) {
    ext = seal.ext.new('enhanced-dnd', 'SzzRain', '1.2.3');
    seal.ext.register(ext);
  } else {
    throw new Error('enhanced-dnd 加载失败：同名扩展已存在');
  }

  Init(ext);
  // 注册命令
  ext.cmdMap['shop'] = getShopCommand(ext);

  ext.cmdMap['inventory'] = getInventoryCommand(ext);
  ext.cmdMap['inv'] = ext.cmdMap['inventory'];

  ext.cmdMap['lr'] = getLrCommand(ext);

  ext.cmdMap['shortrest'] = getShortRestCommand(ext);
  ext.cmdMap['短休'] = ext.cmdMap['shortrest'];

  ext.cmdMap['pay'] = getPayCommand(ext);

  ext.onCommandReceived = (rctx, msg, cmdArgs) => {
    if ((cmdArgs.command == "longrest" || cmdArgs.command == "长休") && (!cmdArgs.getArgN(1)) && (!cmdArgs.getKwarg("no-ex")) && rctx.isCurGroupBotOn) {
      setTimeout(() => {
        doLongRest(ext, rctx, msg, cmdArgs);
      }, 2000); // 延迟2秒执行
    }
    // 如果命令是长休并且参数为help，跳出扩展长休的帮助
    if ((cmdArgs.command == "longrest" || cmdArgs.command == "长休") && (cmdArgs.getArgN(1) == "help")) {
      setTimeout(() => {
        seal.replyToSender(rctx, msg, COMMAND_LONGREST_HELP)
      }, 2000); // 延迟2秒执行
    }
  }
}

main();
