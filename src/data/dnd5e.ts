import {InventoryInfo, Player} from "../types";

export const DND_ADVENTURE_GEAR = {
  //物品名称
  "算盘": {
    //别名
    "alias": ["算盘Abacus","Abacus"],
    //价格
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    //使用次数，-1表示无限次
    "use": -1,
    //重量
    "weight": 2,
    //是否可以购买
    "canBuy": true,
    //描述，照抄速查表
    "description": "PHB装备:算盘/\n" +
      "算盘 Abacus\n" +
      "价格：2gp\n" +
      "重量：2磅"
  },
  "强酸": {
    "alias": ["强酸Acid","Acid"],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "PHB装备:强酸/\n" +
      "强酸 Acid（小瓶 Vial）\n" +
      "价格：25gp\n" +
      "重量：1磅\n" +
      "你可以用一个动作将这小瓶液体泼溅到你身边5尺内的一个生物身上，或是将小瓶投到至多20尺远的地方，并利用冲击打破它。两种情况都可以视为对一个生物或物件发动一次远程攻击，并将强酸视为一件临时武器。命中时，目标受到2d6点强酸伤害。"
  },
  "炽火胶": {
    "alias": ["炽火胶Alchemist's fire","Alchemist's fire"],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "PHB装备:炽火胶/\n" +
      "炽火胶 Alchemist's Fire（扁瓶 Flask）\n" +
      "价格：50gp\n" +
      "重量：1磅\n" +
      "一种粘稠的流体，其一旦接触空气就会引起自燃。你可以用一个动作将这小瓶液体投到至多20尺远的地方，并利用冲击打破它。这个动作视为对一个生物或物件发动一次远程攻击，并将炽火胶视为一件临时武器。命中时，目标在它每回合开始时受到1d4点火焰伤害。被命中生物可以使用动作进行一次DC10的敏捷检定，以扑灭火焰来结束该伤害效应。\n"
  },
  "箭": {
    "alias": ["箭Arrows","Arrows"],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 20,
    "weight": 1,
    "canBuy": true,
    "description": "PHB装备:箭/\n" +
      "箭 Arrows(20)\n" +
      "弹药\n" +
      "价格：1gp\n" +
      "重量：1磅"
  },
  "吹矢": {
    "alias": ["吹矢Blowgun Needles","Blowgun Needles"],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 50,
    "weight": 1,
    "canBuy": true,
    "description": "PHB装备:吹矢/\n" +
      "吹矢 Blowgun Needles(50)\n" +
      "弹药\n" +
      "价格：1gp\n" +
      "重量：1磅"
  },
  "弩矢": {
    "alias": ["弩矢Crossbow Bolts","Crossbow Bolts"],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 20,
    "weight": 1.5,
    "canBuy": true,
    "description": 'PHB装备:弩矢/\n' +
      '弩矢 Crossbow Bolts(20)\n' +
      '弹药\n' +
      '价格：1gp\n' +
      '重量：1.5磅\n'
  },
  "投石索弹丸": {
    "alias": ["投石索弹丸Sling Bullets","Sling Bullets"],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 4
    },
    "use": 20,
    "weight": 1.5,
    "canBuy": true,
    "description": "PHB装备:投石索弹丸/\n" +
      "投石索弹丸 Sling Bullets(20)\n" +
      "弹药\n" +
      "价格：4gp\n" +
      "重量：1.5磅"
  },
  "抗毒剂": {
    "alias": ["抗毒剂Antitoxin","Antitoxin"],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "PHB装备:抗毒剂/\n" +
      "抗毒剂 Antitoxin（小瓶 Vial）\n" +
      "价格：50gp\n" +
      "喝下瓶内液体的生物在1小时内进行对抗对毒素的豁免检定时具有优势。它无法为不死生物或构装生物提供任何增益。"
  },
  "滚珠": {
    "alias": ["滚珠Ball Bearings","Ball Bearings"],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 2,
    "canBuy": true,
    "description": "PHB装备:滚珠/\n" +
      "滚珠 Ball Bearings（一包1000粒）\n" +
      "价格：1gp\n" +
      "重量：2磅\n" +
      "你可以用一个动作将这些小金属珠从袋子中洒出，并覆盖一片边长10尺的方形区域。穿过这片区域的生物必须进行一次DC10的敏捷豁免，豁免失败则摔至倒地。以半速穿过该区域的生物不需要进行该豁免。\n"
  },
}

export const DND_ARMOR = {
  "布甲": {
    "alias": ["布甲Padded","Padded"],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 8,
    "canBuy": true,
    "description": "PHB护甲:布甲/\n" +
      "布甲 Padded\n" +
      "类型：轻甲\n" +
      "价格：5gp\n" +
      "护甲等级(AC)：11+敏捷调整值\n" +
      "隐匿劣势\n" +
      "重量：8磅\n" +
      "布甲由数层布料与棉料的衬里构成。\n",
    useFunc: (ctx: seal.MsgContext, msg: seal.Message, player: Player, item: InventoryInfo) => {
      let dex = seal.vars.intGet(ctx, 'dex');
      if (!dex[1]) {
        return "使用失败：你没有录入敏捷属性";
      }
      let dexMod = Math.floor((dex[0] - 10) / 2);
      let ac = 11 + dexMod;
      seal.vars.intSet(ctx, 'ac', ac);
      return `${seal.format(ctx, "{$t玩家}")}穿上了布甲，护甲等级为` + ac;
    }
  }
}
