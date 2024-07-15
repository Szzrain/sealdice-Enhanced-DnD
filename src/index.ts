import {Init} from "./io/io_helper";
import {getInventoryCommand} from "./command/inventory";
import {getShopCommand} from "./command/shop";

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
