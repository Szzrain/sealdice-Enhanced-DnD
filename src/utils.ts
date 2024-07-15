export function generateUUID() {
  return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function playerReduceMoney(ctx: seal.MsgContext, needGp: number, needSp: number, needCp: number) {
  let playerGp = seal.vars.intGet(ctx, 'gp')[0];
  let playerSp = seal.vars.intGet(ctx, 'sp')[0];
  let playerCp = seal.vars.intGet(ctx, 'cp')[0];
  let playerTotal = playerGp * 100 + playerSp * 10 + playerCp;
  let needTotal = needGp * 100 + needSp * 10 + needCp;
  if (needTotal > playerTotal) {
    return false;
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
  seal.vars.intSet(ctx, 'gp', playerGp);
  seal.vars.intSet(ctx, 'sp', playerSp);
  seal.vars.intSet(ctx, 'cp', playerCp);
  return true;
}
