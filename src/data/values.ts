export const EQUIPMENT_TYPE_ARMOR = "armor";

export const EQUIPMENT_TYPE_WEAPON = "weapon";

export const EQUIPMENT_TYPE_ITEM = "item";

export const EQUIPMENT_TYPE_SHIELD = "shield";

export const COMMAND_INVENTORY_HELP =
  '物品栏：\n' +
  '.inventory: 查看背包物品\n' +
  '.inventory add 物品 [数量]: 添加物品\n' +
  '.inventory use 物品 [数量]: 使用\n' +
  '.inventory buy 物品: 购买物品（根据价格扣除角色卡的gp，sp和cp属性）\n' +
  '.inventory remove 物品 [数量]: 移除物品\n' +
  '.inventory fmt: 强制绑定物品栏至当前角色\n' +
  '.inventory des 物品: 查看物品描述\n' +
  '.inventory help: 查看帮助';

export const COMMAND_LONGREST_HELP =
  '扩展长休：\n' +
  '.lr help: 查看帮助\n' +
  '.lr show: 查看长休属性\n' +
  '.lr del key1 key2 ...: 删除长休属性\n' +
  '.lr st key1=value1 key2=value2 ...: 设置长休属性（需要先设置对应属性的max值）\n' +
  '例如：先执行.st 激励max=5\n' +
  '再执行.lr st 激励=5\n';
