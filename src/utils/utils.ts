import {playerMap, Save} from "../io/io_helper";
import {Player, Price} from "../types";

export function generateUUID() {
  return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function playerReduceMoney(ctx: seal.MsgContext, needGp: number, needSp: number, needCp: number, doDecrease: boolean = true) {
  let playerGp = seal.vars.intGet(ctx, 'gp')[0];
  let playerSp = seal.vars.intGet(ctx, 'sp')[0];
  let playerCp = seal.vars.intGet(ctx, 'cp')[0];
  let playerTotal = playerGp * 100 + playerSp * 10 + playerCp;
  let needTotal = needGp * 100 + needSp * 10 + needCp;
  if (needTotal > playerTotal) {
    return [false, null];
  }
  playerGp -= needGp;
  playerSp -= needSp;
  playerCp -= needCp;
  while (playerGp < 0) {
    playerGp += 1;
    playerSp -= 10;
  }
  while (playerSp < 0) {
    playerSp += 1;
    playerCp -= 10;
  }
  while (playerCp < 0) {
    playerCp += 10;
    playerSp -= 1;
  }
  while (playerSp < 0) {
    playerSp += 10;
    playerGp -= 1;
  }
  let price = new Price(seal.vars.intGet(ctx, 'gp')[0] - playerGp, seal.vars.intGet(ctx, 'sp')[0] - playerSp, seal.vars.intGet(ctx, 'cp')[0] - playerCp);
  if (doDecrease) {
    seal.vars.intSet(ctx, 'gp', playerGp);
    seal.vars.intSet(ctx, 'sp', playerSp);
    seal.vars.intSet(ctx, 'cp', playerCp);
  }
  // 第二个元素反映了玩家的货币变化
  return [true, price];
}

export function getPlayer(rctx: seal.MsgContext, msg: seal.Message, cmdArgs: seal.CmdArgs, ext: seal.ExtInfo, skipNameCheck = false) {
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
    let uuid = generateUUID();
    while (userMap.has(uuid)) {
      uuid = generateUUID();
    }
    seal.vars.strSet(mctx, `$bind_inv`, uuid);
    userMap.set(uuid, player);
    Save(playerMap, ext);
  } else if (!skipNameCheck) {
    let currentname = seal.format(mctx, `{$t玩家}`);
    if (player.name !== currentname) {
      seal.replyToSender(rctx, msg, `检测到当前角色名与绑定物品栏时不符，物品栏已绑定至角色：${player.name}，当前角色名：${currentname}`);
      return null;
    }
  }
  return player;
}
