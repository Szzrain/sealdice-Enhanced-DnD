import {Init} from "./io/io_helper";
import {getInventoryCommand} from "./command/inventory";
import {getShopCommand} from "./command/shop";
import {doLongRest, getLrCommand} from "./command/lr";

function main() {
  // 注册扩展
  let ext = seal.ext.find('enhanced-dnd');
  if (!ext) {
    ext = seal.ext.new('enhanced-dnd', 'SzzRain', '1.0.3');
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

  ext.onCommandReceived = (rctx, msg, cmdArgs) => {
    if ((cmdArgs.command == "longrest" || cmdArgs.command == "长休") && (!cmdArgs.getArgN(1))) {
      doLongRest(ext, rctx, msg, cmdArgs);
    }
  }
}

main();
