import {Item, Player} from "../types";
import ExtInfo = seal.ExtInfo;
import {DND_ADVENTURE_GEAR, DND_ARMOR} from "../data/dnd5e";

export var playerMap: Map<string, Map<string, Player>>

export var itemMap: Map<string, Item>

export function Init(ext: ExtInfo) {
  playerMap = playerLoad(ext);
  itemMap = loadItemMap();
}

export function loadItemMap() {
  let itemMap = new Map<string, Item>();
  for (let [key, value] of Object.entries(DND_ADVENTURE_GEAR)) {
    let item = new Item(key, value.price);
    item.fromJSON(value);
    console.log(key+":"+item);
    itemMap.set(key, item);
  }
  for (let [key, value] of Object.entries(DND_ARMOR)) {
    let item = new Item(key, value.price);
    item.fromJSON(value);
    console.log(key+":"+item);
    itemMap.set(key, item);
  }
  return itemMap;
}

function playerLoad(ext: ExtInfo) {
  let playerMapTemp = new Map<string, Map<string,Player>>();
  Object.entries(JSON.parse(ext.storageGet("playerMap") || '{}')).forEach(([key, value]) => {
    let userMapTemp = new Map<string, Player>();
    Object.entries(value).forEach(([key, value]) => {
      let player = new Player([]);
      player.fromJSON(value);
      userMapTemp.set(key, player);
    });
    playerMapTemp.set(key, userMapTemp);
  });
  return playerMapTemp;
}

export function Save(playerMap: Map<string, Map<string, Player>>, ext: ExtInfo) {
  let playerMapTemp = new Map<string, object>();
  playerMap.forEach((value, key) => {
    let userMapTemp = new Map<string, object>();
    value.forEach((value, key) => {
      userMapTemp.set(key, value);
    });
    playerMapTemp.set(key, Object.fromEntries(userMapTemp));
  });
  ext.storageSet("playerMap", JSON.stringify(Object.fromEntries(playerMapTemp)));
}
