export class Price {
  public gp: number;
  public sp: number;
  public cp: number;

  constructor(gp: number, sp: number, cp: number) {
    this.gp = gp;
    this.sp = sp;
    this.cp = cp;
  }
}

export class Item {
  public name: string;
  public alias: Array<string>;
  public description: string;
  public price: Price;
  // 充能次数或者使用次数
  public use: number;
  // 只有在充能物品时才有用，一次性物品则为0
  public useMax: number;
  // 是否可以购买
  public canBuy: boolean;
  public weight: number;
  // 以下为特殊属性
  // func (ctx, msg, Player, InventoryInfo): string 返回结果或报错文本
  public shortRestFunc: Function;
  public longRestFunc: Function;
  public useFunc: Function;

  constructor(name: string, price: any) {
    this.name = name;
    this.price = new Price(price.gp, price.sp, price.cp);
    this.use = 0;
    this.useMax = 0;
    this.canBuy = false;
    this.weight = 0;
    this.alias = [];
    this.description = "";
  }

  fromJSON(obj: any) {
    this.price = new Price(obj.price.gp, obj.price.sp, obj.price.cp);
    this.use = obj.use;
    this.useMax = obj.useMax ? obj.useMax : 0;
    this.canBuy = obj.canBuy;
    this.weight = obj.weight;
    this.alias = obj.alias;
    this.description = obj.description;
    this.useFunc = obj.useFunc;
    this.shortRestFunc = obj.shortRestFunc;
    this.longRestFunc = obj.longRestFunc;
  }

  useItem(ctx: seal.MsgContext, msg: seal.Message, player: Player, item: InventoryInfo) {
    if (this.useFunc) {
      return this.useFunc(ctx, msg, player, item);
    }
    if (item.count <= 0) {
      return "使用失败：你没有" + this.name;
    }
    if (item.use <= 0 && this.useMax > 0) {
      return "使用失败：你的" + this.name + "充能已经用完";
    }
    if (this.use > 0) {
      item.use--;
    }
    if (item.use === 0 && this.useMax > 0) {
      return "你使用了" + this.name + "，它的充能已经耗尽";
    }
    if (item.use === 0 && this.useMax === 0) {
      item.count--;
      if (item.count > 0) {
        item.use = this.use;
      } else {
        player.items.delete(this.name);
      }
      return "你使用并消耗了" + this.name + "，剩余" + item.count + "个";
    }
    return "你使用了" + this.name;
  }
}

export class InventoryInfo {
  public key: string;
  public count: number;
  public use: number;
  public extra: Map<string, any>;

  constructor(key: string, count: number) {
    this.key = key;
    this.count = count;
    this.use = 0;
    this.extra = new Map<string, any>();
  }

  public toJSON() {
    return {
      key: this.key,
      count: this.count,
      use: this.use,
      extra: Object.fromEntries(this.extra),
    }
  }

  public fromJSON(obj: any) {
    this.key = obj.key;
    this.count = obj.count;
    this.use = obj.use;
    for (let [key, value] of Object.entries(obj.extra)) {
      this.extra.set(key, value);
    }
  }
}

export class Player {
  public msgTaskArgs: Array<string | false | true>;
  public items: Map<string, InventoryInfo>;
  public longRest: Map<string, string>;
  public name: string;

  constructor(msgTaskArgs: Array<string | false | true>, name: string = "") {
    this.msgTaskArgs = msgTaskArgs;
    this.name = name;
    this.items = new Map<string, InventoryInfo>();
    this.longRest = new Map<string, string>();
  }

  public toJSON() {
    let itemsTemp = new Map<string, object>();
    this.items.forEach((value, key) => {
      itemsTemp.set(key, value.toJSON());
    })
    // console.log("toJSON Player called");
    return {
      msgTaskArgs: this.msgTaskArgs,
      name: this.name,
      items: Object.fromEntries(itemsTemp),
      longRest: Object.fromEntries(this.longRest),
    }
  }

  public fromJSON(obj: any) {
    let itemMapTemp = new Map<string, InventoryInfo>();
    Object.entries(obj.items).forEach(([key, value]) => {
      let item = new InventoryInfo(key, 0);
      item.fromJSON(value);
      itemMapTemp.set(key, item);
    });
    let longRestTemp = new Map<string, string>();
    if (!obj.longRest) {
      obj.longRest = {};
    }
    Object.entries(obj.longRest).forEach(([key, value]) => {
      longRestTemp.set(key, <string>value);
    });
    this.longRest = longRestTemp;
    this.msgTaskArgs = obj.msgTaskArgs;
    this.items = itemMapTemp;
    this.name = obj.name;
  }
}
