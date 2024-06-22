
export class InventoryInfo {
  public key: string;
  public count: number;
  public lastuse: number;
  public lastbuy: number;

  constructor(key: string, count: number) {
    this.key = key;
    this.count = count;
    this.lastuse = 0;
    this.lastbuy = 0;
  }

  public toJSON() {
    return {
      key: this.key,
      count: this.count,
      lastuse: this.lastuse,
      lastbuy: this.lastbuy,
    }
  }

  public fromJSON(obj: any) {
    this.key = obj.key;
    this.count = obj.count;
    this.lastuse = obj.lastuse;
    this.lastbuy = obj.lastbuy;
  }
}

export class Player {
  public msgTaskArgs: Array<string | false | true>;
  public items: Map<string, InventoryInfo>;
  public name: string;

  constructor(msgTaskArgs: Array<string | false | true>, name: string = "") {
    this.msgTaskArgs = msgTaskArgs;
    this.name = name;
    this.items = new Map<string, InventoryInfo>();
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
    }
  }

  public fromJSON(obj: any) {
    let itemMapTemp = new Map<string, InventoryInfo>();
    Object.entries(obj.items).forEach(([key, value]) => {
      let item = new InventoryInfo(key, 0);
      item.fromJSON(value);
      itemMapTemp.set(key, item);
    });
    this.msgTaskArgs = obj.msgTaskArgs;
    this.items = itemMapTemp;
    this.name = obj.name;
  }
}
