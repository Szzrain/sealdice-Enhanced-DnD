import {InventoryInfo, Player} from "../types";

export const DND_ADVENTURE_GEAR = {
  "丝绳": {
    "alias": [
      "Silk Rope",
      "丝绳Silk Rope"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "丝绳 Silk Rope（50尺）\n价格：10gp\n重量：5磅\n"
  },
  "乘用马": {
    "alias": [
      "Riding Horse",
      "乘用马Riding Horse"
    ],
    "price": {
      "gp": 75,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "乘用马 Riding Horse\n价格：75gp\n速度：60尺\n载重：480磅\n"
  },
  "乙太精": {
    "alias": [
      "Essence of Ether",
      "乙太精Essence of Ether"
    ],
    "price": {
      "gp": 300,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "乙太精 Essence of Ether\n种类：吸入Inhaled\n每剂价格：300gp\n这些毒药是吸入时生效的粉末或气体。吹散粉末或释放气体可以让5立方尺里的生物受其效应影响。其产生的云雾在此后将立即消散。其毒素会影响鼻粘膜、泪腺和身体的其他部位，屏住呼吸并不能使吸入式毒药无害化。\n吸入这种毒药的生物必须进行一次DC 15的体质豁免，豁免失败则中毒8小时。因此中毒的生物陷入昏迷，直至其受到伤害，或者由其它生物使用动作来将其摇醒。\n"
  },
  "书本": {
    "alias": [
      "Book",
      "书本Book"
    ],
    "price": {
      "gp": 28,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "书本 Book\n价格：28gp\n重量：5磅\n一本书可能写着诗歌、故事或是其他的内容。里面可能有关于某个特定地区的学识信息，也可能有侏儒语记载的机械图和笔记，或者任何其它能够用文字或图形表达的内容。一本载有法术的书则是一本法术书。\n"
  },
  "二轮战车": {
    "alias": [
      "Chariot",
      "二轮战车Chariot"
    ],
    "price": {
      "gp": 250,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 100,
    "canBuy": true,
    "description": "二轮战车 Chariot\n价格：250gp\n重量：100磅\n"
  },
  "二轮货车": {
    "alias": [
      "Cart",
      "二轮货车Cart"
    ],
    "price": {
      "gp": 15,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 200,
    "canBuy": true,
    "description": "二轮货车 Cart\n价格：15gp\n重量：200磅\n"
  },
  "便携式攻城锤": {
    "alias": [
      "Portable Ram",
      "便携式攻城锤Portable Ram"
    ],
    "price": {
      "gp": 4,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 35,
    "canBuy": true,
    "description": "便携式攻城锤 Portable Ram\n价格：4gp\n重量：35磅\n你可以使用一具便携式攻城锤破门。此时你破门的力量检定具有+4加值。如果另一名角色从旁协助，则你破门的力量检定因此而具有优势。\n"
  },
  "信号笛": {
    "alias": [
      "Signal Whistle",
      "信号笛Signal Whistle"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 5
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "信号笛 Signal Whistle\n价格：5cp\n"
  },
  "具装": {
    "alias": [
      "Barding",
      "具装Barding"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "具装 Barding\n具装是一种用以保护动物的头、颈、胸、身的护甲。“护甲表”中的任何护甲都可加工成具装，其价格为同款类人生物护甲的四倍，重量则为两倍。\n"
  },
  "划艇": {
    "alias": [
      "Rowboat",
      "划艇Rowboat"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "划艇 Rowboat\n价格：50gp\n速度：1.5mph\n在湖泊或河流中驾驶龙骨船或划艇时，其速度会受水流影响。顺流驾船时，其速度可以加上水流速度（通常为每小时3里）。这几种载具无法逆流而上，但可以在岸上用动物作拉纤。一只划艇重100磅，因而冒险者还可以抬着它在陆上行动。\n"
  },
  "刺客之血": {
    "alias": [
      "Assassin",
      "刺客之血Assassin"
    ],
    "price": {
      "gp": 150,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "刺客之血 Assassin's Blood\n种类：服用Ingested\n每剂价格：150gp\n这种毒药必须让生物吞下整一个剂量才能发挥效应。这一剂量可以被施放于食物或液体中。DM也可以设定让少剂量发挥更小的效应。如在豁免上有优势或是豁免失败后只受一半的伤害。\n服用这种毒药的生物必须进行一次DC 10的体质豁免，豁免失败则受6（1d12）的毒素伤害并中毒24小时。豁免成功则伤害减半且不会中毒。\n"
  },
  "医疗包": {
    "alias": [
      "Healer",
      "医疗包Healer"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": 10,
    "weight": 3,
    "canBuy": true,
    "description": "医疗包 Healer's Kit\n价格：5gp\n重量：3磅\n一个医疗用小皮包中，装有绷带、药膏和夹板。医疗包可以使用十次。你可以使用一个动作，并花费一次使用次数来为一个生命值为0的生物稳定伤势，而无需进行相应的感知（医药）检定。\n"
  },
  "午夜之泪": {
    "alias": [
      "Midnight Tears",
      "午夜之泪Midnight Tears"
    ],
    "price": {
      "gp": 1500,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "午夜之泪 Midnight Tears\n种类：服用Ingested\n每剂价格：1500gp\n这种毒药必须让生物吞下整一个剂量才能发挥效应。这一剂量可以被施放于食物或液体中。DM也可以设定让少剂量发挥更小的效应。如在豁免上有优势或是豁免失败后只受一半的伤害。\n服用这种毒药的生物不会立即出现异样，其症状会一直潜伏到午夜钟声敲响时。如果毒素在此之前尚未中和，该生物就必须进行一次DC 17的体质豁免，豁免失败则受到31（9d6）的毒素伤害，豁免成功则伤害减半。\n"
  },
  "卓尔毒药": {
    "alias": [
      "Drow Poison",
      "卓尔毒药Drow Poison"
    ],
    "price": {
      "gp": 200,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "卓尔毒药 Drow Poison\n种类：损伤Injury。损伤式毒药可以作用于武器、弹药、陷阱组件和其他可造成穿刺或挥砍伤害的物件上，并维持其毒性直至被伤口吸收或被洗刷干净。涂抹该毒素物件对生物造成挥砍或穿刺伤害时，该毒药就可以自伤口产生影响。\n每剂价格：200gp\n这种毒药通常只由卓尔精灵在远离阳光的地方制作而成。遭受这种毒药影响的生物必须进行一次DC13的体质豁免，豁免失败则中毒1小时。如果豁免失败且骰值比DC相差5或更多，则该生物同时陷入昏迷。该生物在受到伤害时苏醒，或由其它生物花费动作来摇醒自己。\n"
  },
  "单帆长船": {
    "alias": [
      "Longship",
      "单帆长船Longship"
    ],
    "price": {
      "gp": 10000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "单帆长船 Longship\n价格：10000gp\n速度：3mph\n"
  },
  "卷轴": {
    "alias": [
      "Scrolls",
      "卷轴Scrolls"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "卷轴 Scrolls\n大多数卷轴都是以文书形式保存的法术，而少数的卷轴所蕴含的独特咒语还可以生成某些强效的结界。无论其内容是什么，卷轴的实体都是一卷纸，有时会附在木棒上，通常都保存在由象牙、翡翠、皮革、金属或木材等材料制作的管筒中。\n卷轴是一种消耗性的魔法物品。无论卷轴中所包含魔法的本质为何，释放其内魔法时都需要使用阅读卷轴。魔法被调用后的卷轴无法再使用。而其内的文字也会随之消失，或整个化作尘土。\n任何理解一种书写语言的生物都可以阅读卷轴上的奥法文书，并尝试将其激活。\n"
  },
  "卷轴匣": {
    "alias": [
      "Scroll Case",
      "卷轴匣Scroll Case"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "卷轴匣 Scroll Case\n价格：1gp\n重量：1磅\n一个圆柱形皮匣能够装上十张卷起的纸或是五张卷起的羊皮纸。\n"
  },
  "双人帐篷": {
    "alias": [
      "Two-Person Tent",
      "双人帐篷Two-Person Tent"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 20,
    "canBuy": true,
    "description": "双人帐篷 Two-Person Tent\n价格：2gp\n重量：20磅\n一个简单轻便的双人帆布帐篷。\n"
  },
  "口粮": {
    "alias": [
      "Rations",
      "口粮Rations"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": 1,
    "weight": 2,
    "canBuy": true,
    "description": "口粮 Rations（1日份）\n价格：5sp\n重量：2磅\n适合长途旅行携带的高能量干粮，包括牛肉干、干果、饼干和坚果等。\n"
  },
  "吊桶": {
    "alias": [
      "Bucket",
      "吊桶Bucket"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 5
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "吊桶 Bucket\n价格：5cp\n重量：2磅\n"
  },
  "吹矢": {
    "alias": [
      "Blowgun Needles",
      "吹矢Blowgun Needles"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 50,
    "weight": 1,
    "canBuy": true,
    "description": "吹矢 Blowgun Needles(50)\n弹药\n价格：1gp\n重量：1磅\n"
  },
  "商用天平": {
    "alias": [
      "Merchant",
      "商用天平Merchant"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "商用天平 Merchant's Scale\n价格：5gp\n重量：3磅\n一架天平包括一个小的衡平、一对托盘和一套共重2磅的砝码。它可以用来称量小物件的精细重量（比如稀有贵金属或贸易货物），以便估价。\n"
  },
  "四轮客车": {
    "alias": [
      "Carriage",
      "四轮客车Carriage"
    ],
    "price": {
      "gp": 100,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 600,
    "canBuy": true,
    "description": "四轮客车 Carriage\n价格：100gp\n重量：600磅\n"
  },
  "四轮货车": {
    "alias": [
      "Wagon",
      "四轮货车Wagon"
    ],
    "price": {
      "gp": 35,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 400,
    "canBuy": true,
    "description": "四轮货车 Wagon\n价格：35gp\n重量：400磅\n"
  },
  "图腾": {
    "alias": [
      "Totem",
      "图腾Totem"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "图腾 Totem\n德鲁伊法器\n价格：1gp\n"
  },
  "圣徽": {
    "alias": [
      "Holy Symbol",
      "圣徽Holy Symbol"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "圣徽 Holy Symbol\n一枚圣徽是某个神袛或神系象征。它可能是一个描绘有代表一个神袛符号的护身符，相同的符号可能作为一个徽章被仔细地雕刻或镶嵌在一面盾牌上，也可能是一个盛有一块神圣遗物碎片的小盒。牧师或圣武士能将圣徽用作其施法的法器。使用这些圣徽时，施法者必须将其握在手中，戴在身上可见处，或者将其装在盾上使用。\n另见：\n护符 Amulet\n徽章 Emblem\n圣物匣 Reliquary\n"
  },
  "圣水": {
    "alias": [
      "Holy Water",
      "圣水Holy Water"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "圣水 Holy Water（扁瓶 Flask）\n价格：25gp\n重量：1磅\n你可以用一个动作将这小瓶液体泼溅到你身边5尺范围内的一个生物身上，或是将小瓶投到至多20尺远的地方，并利用冲击打破它。两种情况都可以视为对一个生物或物件发动一次远程攻击，并将圣水视为一件临时武器。命中时，如果目标是一只邪魔或不死生物，则目标受到2d6点光耀伤害。\n一名牧师或圣武士能通过主持一种特殊的仪式来创造圣水。该仪式花费1小时进行，且需要花费价值25gp的银粉，并消耗施法者一个1环法术位。\n"
  },
  "圣物匣": {
    "alias": [
      "Reliquary",
      "圣物匣Reliquary"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "圣物匣 Reliquary\n圣徽\n价格：5gp\n重量：2磅\n"
  },
  "地图匣": {
    "alias": [
      "Map Case",
      "地图匣Map Case"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "地图匣 Map Case\n价格：1gp\n重量：1磅\n一个圆柱形皮匣能够装上十张卷起的纸或是五张卷起的羊皮纸。\n"
  },
  "基础毒药": {
    "alias": [
      "Basic Poison",
      "基础毒药Basic Poison"
    ],
    "price": {
      "gp": 100,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "基础毒药 Basic Poison（小瓶 Vial）\n价格：100gp\n你可以用一个动作将小瓶中的毒药涂于一把挥砍或穿刺武器上，或者涂在至多三发弹药上。涂毒武器或弹药命中时，被命中生物必须进行一次DC10的体质豁免，豁免失败则受到1d4的毒素伤害。涂毒后，武器的毒性效果可以维持1分钟。\n"
  },
  "墨水": {
    "alias": [
      "Ink",
      "墨水Ink"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "墨水 Ink（1盎司瓶）\n价格：10gp\n"
  },
  "墨水笔": {
    "alias": [
      "Ink Pen",
      "墨水笔Ink Pen"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "墨水笔 Ink Pen\n价格：2cp\n"
  },
  "壶": {
    "alias": [
      "Jug",
      "壶Jug"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "壶 Jug\n价格：2cp\n重量：4磅\n"
  },
  "大杯": {
    "alias": [
      "Tankard",
      "大杯Tankard"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "大杯 Tankard\n价格：2cp\n重量：1磅\n"
  },
  "大袋子": {
    "alias": [
      "Sack",
      "大袋子Sack"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 1
    },
    "use": -1,
    "weight": 0.5,
    "canBuy": true,
    "description": "大袋子 Sack\n价格：1cp\n重量：1/2磅\n"
  },
  "大锤": {
    "alias": [
      "Sledge Hammer",
      "大锤Sledge Hammer"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 10,
    "canBuy": true,
    "description": "大锤 Sledge Hammer\n价格：2gp\n重量：10磅\n"
  },
  "奥术法器": {
    "alias": [
      ""
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "奥术法器\n奥术法器 Arcane Focus\n奥术法器是一件用来引导奥术法术的特殊物品，它可以是一个法球、一块水晶、一只权杖、一根特制法杖、一根魔杖般的长木条或是其它类似的物品。术士、邪术师或法师能将这样的物品用作施法法器。\n另见：\n水晶 Crystal\n法球 Orb\n权杖 Rod\n法杖 Staff\n"
  },
  "封蜡": {
    "alias": [
      "Sealing Wax",
      "封蜡Sealing Wax"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "封蜡 Sealing Wax\n价格：5sp\n"
  },
  "小包": {
    "alias": [
      "Pouch",
      "小包Pouch"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "小包 Pouch\n价格：5sp\n重量：1磅\n一个布料或皮革制成的小包可以装20发弹丸或50发吹矢，或者其他东西。用来装施法材料成分的小包则成为材料包。\n"
  },
  "小瓶": {
    "alias": [
      "Vial",
      "小瓶Vial"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "小瓶 Vial\n价格：1gp\n"
  },
  "岩钉": {
    "alias": [
      "Piton",
      "岩钉Piton"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 5
    },
    "use": 1,
    "weight": 0.25,
    "canBuy": true,
    "description": "岩钉 Piton\n价格：5cp\n重量：1/4磅\n"
  },
  "帆船": {
    "alias": [
      "Sailing Ship",
      "帆船Sailing Ship"
    ],
    "price": {
      "gp": 10000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "帆船 Sailing Ship\n价格：10000gp\n速度：2mph\n"
  },
  "弩矢": {
    "alias": [
      "Crossbow Bolts",
      "弩矢Crossbow Bolts"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 20,
    "weight": 1.5,
    "canBuy": true,
    "description": "弩矢 Crossbow Bolts(20)\n弹药\n价格：1gp\n重量：1.5磅\n"
  },
  "弩矢匣": {
    "alias": [
      "Crossbow Bolt Case",
      "弩矢匣Crossbow Bolt Case"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "弩矢匣 Crossbow Bolt Case\n价格：1gp\n重量：1磅\n一只木匣能装二十支弩矢。\n"
  },
  "强酸": {
    "alias": [
      "Acid",
      "强酸Acid"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "强酸 Acid（小瓶 Vial）\n价格：25gp\n重量：1磅\n你可以用一个动作将这小瓶液体泼溅到你身边5尺内的一个生物身上，或是将小瓶投到至多20尺远的地方，并利用冲击打破它。两种情况都可以视为对一个生物或物件发动一次远程攻击，并将强酸视为一件临时武器。命中时，目标受到2d6点强酸伤害。\n"
  },
  "德鲁伊法器": {
    "alias": [
      "Druidic Focus",
      "德鲁伊法器Druidic Focus"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "德鲁伊法器 Druidic Focus\n德鲁伊法器是一件用来引导德鲁伊法术的特殊物品。它可以是一枝槲寄生或冬青，一根用紫杉木或其它特殊木材制作的魔杖或节杖，一根从活树上折下的法杖或是一个包含神圣动物身上的羽毛、毛皮、骨头和牙齿组合成的图腾。德鲁伊能将这样的物品用作其施法的法器。\n另见：\n槲寄生枝条 Sprig of Mistletoe\n图腾 Totem\n木质法杖 Wooden Staff\n紫杉魔杖 Yew Wand\n"
  },
  "徽章": {
    "alias": [
      "Emblem",
      "徽章Emblem"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "徽章 Emblem\n圣徽\n价格：5gp\n"
  },
  "怨恨": {
    "alias": [
      "Malice",
      "怨恨Malice"
    ],
    "price": {
      "gp": 250,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "怨恨 Malice\n种类：吸入Inhaled\n每剂价格：250gp\n这些毒药是吸入时生效的粉末或气体。吹散粉末或释放气体可以让5立方尺里的生物受其效应影响。其产生的云雾在此后将立即消散。其毒素会影响鼻粘膜、泪腺和身体的其他部位，屏住呼吸并不能使吸入式毒药无害化。\n吸入这种毒药的生物必须进行一次DC 15的体质豁免，豁免失败则中毒1小时，因此中毒的生物同时陷入目盲。\n"
  },
  "战舰": {
    "alias": [
      "Warship",
      "战舰Warship"
    ],
    "price": {
      "gp": 25000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "战舰 Warship\n价格：25000gp\n速度：2.5mph\n"
  },
  "战马": {
    "alias": [
      "Warhorse",
      "战马Warhorse"
    ],
    "price": {
      "gp": 400,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "战马 Warhorse\n价格：400gp\n速度：60尺\n载重：540磅\n"
  },
  "扁瓶": {
    "alias": [
      "Flask",
      "扁瓶Flask"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "扁瓶 Flask\n价格：2cp\n重量：1磅\n"
  },
  "扬琴": {
    "alias": [
      "Dulcimer",
      "扬琴Dulcimer"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "扬琴 Dulcimer\n乐器\n价格：25gp\n价格：10磅\n"
  },
  "投石索弹丸": {
    "alias": [
      "Sling Bullets",
      "投石索弹丸Sling Bullets"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 4
    },
    "use": 20,
    "weight": 1.5,
    "canBuy": true,
    "description": "投石索弹丸 Sling Bullets(20)\n弹药\n价格：4cp\n重量：1.5磅\n"
  },
  "抗毒剂": {
    "alias": [
      "Antitoxin",
      "抗毒剂Antitoxin"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "抗毒剂 Antitoxin（小瓶 Vial）\n价格：50gp\n喝下瓶内液体的生物在1小时内进行对抗对毒素的豁免检定时具有优势。它无法为不死生物或构装生物提供任何增益。\n"
  },
  "护符": {
    "alias": [
      "Amulet",
      "护符Amulet"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "护符 Amulet\n圣徽\n价格：5gp\n重量：1磅\n"
  },
  "排箫": {
    "alias": [
      "Pan flute",
      "排箫Pan flute"
    ],
    "price": {
      "gp": 12,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "排箫 Pan flute\n乐器\n价格：12gp\n重量：2磅\n"
  },
  "提琴": {
    "alias": [
      "Viol",
      "提琴Viol"
    ],
    "price": {
      "gp": 30,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "提琴 Viol\n乐器\n价格：30gp\n重量：1磅\n"
  },
  "撬棍": {
    "alias": [
      "Crowbar",
      "撬棍Crowbar"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "撬棍 Crowbar\n价格：2gp\n重量：5磅\n在适当的地方使用撬棍时，可以让相应的力量检定具有优势。\n"
  },
  "攀爬工具": {
    "alias": [
      "Climber",
      "攀爬工具Climber"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 12,
    "canBuy": true,
    "description": "攀爬工具 Climber's kit\n价格：25gp\n重量：12磅\n一套攀爬工具包括特制的岩钉，靴子包头，手套和系带。你可以用一个动作来运用攀爬工具锚定自己；此时你不会从锚定处摔落超过25尺，且在解除锚定前无法从锚定处向外攀爬超过25尺。\n"
  },
  "放大镜": {
    "alias": [
      "Magnifying Glass",
      "放大镜Magnifying Glass"
    ],
    "price": {
      "gp": 100,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "放大镜 Magnifying Glass\n价格：100gp\n一个用以详细观察小物件的透镜。生火时，你也可以用它代替燧石与铁片。使用放大镜聚焦光来生火需要如同阳光般明亮的光照、可用的引火物质以及约5分钟的时间来完成点燃作业。进行估价或是检查某个细小或具有精细细节物件时所作的属性检定可以使用放大镜来获得优势。\n"
  },
  "整副三龙牌": {
    "alias": [
      "Three-Dragon Ante set",
      "整副三龙牌Three-Dragon Ante set"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "整副三龙牌 Three-Dragon Ante set\n赌具\n价格：5gp\n重量：3磅\n"
  },
  "整副纸牌": {
    "alias": [
      "Playing card set",
      "整副纸牌Playing card set"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "整副纸牌 Playing card set\n赌具\n价格：5sp\n"
  },
  "整副骰子": {
    "alias": [
      "Dice set",
      "整副骰子Dice set"
    ],
    "price": {
      "gp": 0,
      "sp": 1,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "整副骰子 Dice set\n赌具\n价格：1sp\n"
  },
  "整套龙棋": {
    "alias": [
      "Dragonchess set",
      "整套龙棋Dragonchess set"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 0.5,
    "canBuy": true,
    "description": "整套龙棋 Dragonchess set\n赌具\n价格：5sp\n价格：1/2磅\n"
  },
  "旅行者服装": {
    "alias": [
      "Clothes",
      "旅行者服装Clothes"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "旅行者服装 Clothes，traveler's\n价格：2gp\n重量：4磅\n"
  },
  "普通服装": {
    "alias": [
      "Clothes",
      "普通服装Clothes"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "普通服装 Clothes,common\n价格：5sp\n重量：3磅\n"
  },
  "望远镜": {
    "alias": [
      "Spyglass",
      "望远镜Spyglass"
    ],
    "price": {
      "gp": 1000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "望远镜 Spyglass\n价格：1000gp\n重量：1磅\n从望远镜中观察到的物品能放大两倍。\n"
  },
  "木橇": {
    "alias": [
      "Sled",
      "木橇Sled"
    ],
    "price": {
      "gp": 20,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 300,
    "canBuy": true,
    "description": "木橇 Sled\n价格：20gp\n重量：300磅\n"
  },
  "木质法杖": {
    "alias": [
      "Wooden Staff",
      "木质法杖Wooden Staff"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "木质法杖 Wooden Staff\n价格：5gp\n德鲁伊法器\n重量：4磅\n一根法杖大约5到6尺长。法杖的外形千差万别：有的直径均匀而光滑，有的则扭曲变形，有的由木头制成，有的则由抛光的金属或水晶组装而成。根据材质的不同，一根法杖的重量介于2到7磅之间。\n除非法杖的描述另有说明，否则法杖都可以被用作一根长棍quarterstaff。\n"
  },
  "权杖": {
    "alias": [
      "Rod",
      "权杖Rod"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "权杖 Rod\n奥术法器\n价格：10gp\n重量：2磅\n一根魔法权杖可以是一支节杖或一支沉重的圆棒，其实体通常由金属、木头或骨头制成。其外形大约2到3尺长，1寸厚，2到5磅重。\n"
  },
  "材料包": {
    "alias": [
      "Component pouch",
      "材料包Component pouch"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "材料包 Component pouch\n价格：25gp\n重量：2磅\n材料包是一个防水的皮质小腰包，其内有间格用以放置各种材料成分以及其它你需要用以施放法术的特殊物品。某些有着特定价格的材料不包含在材料包中。\n"
  },
  "桨帆船": {
    "alias": [
      "Galley",
      "桨帆船Galley"
    ],
    "price": {
      "gp": 30000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "桨帆船 Galley\n价格：30000gp\n速度：4mph\n"
  },
  "槲寄生枝条": {
    "alias": [
      "Sprig of Mistletoe",
      "槲寄生枝条Sprig of Mistletoe"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "槲寄生枝条 Sprig of Mistletoe\n德鲁伊法器\n价格：1gp\n"
  },
  "毯子": {
    "alias": [
      "Blanket",
      "毯子Blanket"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "毯子 Blanket\n价格：5sp\n重量：3磅\n"
  },
  "水晶": {
    "alias": [
      "Crystal",
      "水晶Crystal"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "水晶 Crystal\n奥术法器\n价格：10gp\n重量：1磅\n"
  },
  "水袋": {
    "alias": [
      "Waterskin",
      "水袋Waterskin"
    ],
    "price": {
      "gp": 0,
      "sp": 2,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "水袋 Waterskin\n价格：2sp\n重量：5磅(盛满)\n"
  },
  "沙漏": {
    "alias": [
      "Hourglass",
      "沙漏Hourglass"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "沙漏 Hourglass\n价格：25gp\n重量：1磅\n"
  },
  "油灯": {
    "alias": [
      "Lamp",
      "油灯Lamp"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "油灯 Lamp\n价格：5sp\n重量：1磅\n一只油灯可以为其身边15尺半径范围提供明亮光照，以及该范围外30尺的微光光照。点亮的油灯每6小时消耗一扁瓶灯油（1品脱）。\n"
  },
  "法术书": {
    "alias": [
      "Spellbook",
      "法术书Spellbook"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "法术书 Spellbook\n价格：50gp\n重量：3磅\n硬皮封面的法术书是法师们的必须品，为方便记录法术，其通常都留有100张羊皮纸空书页。\n"
  },
  "法杖": {
    "alias": [
      "Staff",
      "法杖Staff"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "法杖 Staff\n奥术法器\n价格：5gp\n重量：4磅\n一根法杖大约5到6尺长。法杖的外形千差万别：有的直径均匀而光滑，有的则扭曲变形，有的由木头制成，有的则由抛光的金属或水晶组装而成。根据材质的不同，一根法杖的重量介于2到7磅之间。\n除非法杖的描述另有说明，否则法杖都可以被用作一根长棍quarterstaff。\n"
  },
  "法球": {
    "alias": [
      "Orb",
      "法球Orb"
    ],
    "price": {
      "gp": 20,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "法球 Orb\n奥术法器\n价格：20gp\n重量：3磅\n"
  },
  "渔具": {
    "alias": [
      "Fishing Tackle",
      "渔具Fishing Tackle"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "渔具 Fishing Tackle\n价格：1gp\n重量：4磅\n一套渔具工具包中，装有一根长杆、丝线、软木转轴、铅坠、天鹅绒饵以及窄眼网。\n"
  },
  "滑轮组": {
    "alias": [
      "Block And Tackle",
      "滑轮组Block And Tackle"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "滑轮组 Block And Tackle\n价格：5gp\n重量：5磅\n一组滑轮组，其中配有一根绳索绕过轮组中，其上还装着一个系物的钩子。滑轮组可以让你提起相当于你正常举重四倍重量的物件。\n"
  },
  "滚珠": {
    "alias": [
      "Ball Bearings",
      "滚珠Ball Bearings"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 2,
    "canBuy": true,
    "description": "滚珠 Ball Bearings（一包1000粒）\n价格：1gp\n重量：2磅\n你可以用一个动作将这些小金属珠从袋子中洒出，并覆盖一片边长10尺的方形区域。穿过这片区域的生物必须进行一次DC10的敏捷豁免，豁免失败则摔至倒地。以半速穿过该区域的生物不需要进行该豁免。\n"
  },
  "火把": {
    "alias": [
      "Torch",
      "火把Torch"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 1
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "火把 Torch\n价格：1cp\n重量：1磅\n一支火把可以为其身边20尺半径范围提供明亮光照，以及其外20尺范围的微光光照。火把的照明效果可以持续1小时。你还可以使用一支燃烧的火把发动一次近战攻击，命中时，该攻击可以造成1点火焰伤害。\n"
  },
  "火绒盒": {
    "alias": [
      "Tinderbox",
      "火绒盒Tinderbox"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "火绒盒 Tinderbox\n价格：5sp\n重量：1磅\n一个小巧的盒子里装有燧石，铁片和火绒（通常是在轻油中浸过的干布），是一种常用的生火工具。使用火绒盒点燃一支火把（或其他燃料物质外露的物件）需要使用一个动作，而用来点燃其他物品则需要花费1分钟。\n"
  },
  "灯油": {
    "alias": [
      "Oil",
      "灯油Oil"
    ],
    "price": {
      "gp": 0,
      "sp": 1,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "灯油 Oil（扁瓶 Flask）\n价格：1sp\n重量：1磅\n灯油通常装在一个1品脱大小的陶土扁瓶中。你可以用一个动作将扁瓶中的灯油泼溅到你身边5尺范围内的一个生物身上，或是将扁瓶投到至多20尺远的地方，并利用冲击打破它。两种情况都可以视为对一个生物或物件发动一次远程攻击，并将灯油视为一件临时武器。命中时，目标被灯油洒满全身。如果目标在灯油挥发前（1分钟后）受到任何火焰伤害，则目标因燃烧的灯油受到额外5点火焰伤害。你还可以将一扁瓶灯油泼在地面上，以覆盖一块边长5尺且保持水平的方形区域。点燃该区域后，灯油将持续燃烧2轮，并对任何进入该区域或在该区域结束其回合的生物造成5点火焰伤害。同一生物每回合只受该伤害作用一次。\n"
  },
  "炽火胶": {
    "alias": [
      "Alchemist",
      "炽火胶Alchemist"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 1,
    "canBuy": true,
    "description": "炽火胶 Alchemist's Fire（扁瓶 Flask）\n价格：50gp\n重量：1磅\n一种粘稠的流体，其一旦接触空气就会引起自燃。你可以用一个动作将这小瓶液体投到至多20尺远的地方，并利用冲击打破它。这个动作视为对一个生物或物件发动一次远程攻击，并将炽火胶视为一件临时武器。命中时，目标在它每回合开始时受到1d4点火焰伤害。被命中生物可以使用动作进行一次DC10的敏捷检定，以扑灭火焰来结束该伤害效应。\n"
  },
  "焦引熏烟": {
    "alias": [
      "Burnt Othur Fumes",
      "焦引熏烟Burnt Othur Fumes"
    ],
    "price": {
      "gp": 500,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "焦引熏烟 Burnt Othur Fumes\n种类：吸入Inhaled\n每剂价格：500gp\n这些毒药是吸入时生效的粉末或气体。吹散粉末或释放气体可以让5立方尺里的生物受其效应影响。其产生的云雾在此后将立即消散。其毒素会影响鼻粘膜、泪腺和身体的其他部位，屏住呼吸并不能使吸入式毒药无害化。\n受害于该毒药的生物必须进行一次DC 13的体质豁免，豁免失败则受10（3d6）的毒素伤害，并且必须在随后每个其自己回合开始时，再进行一次该豁免，每次豁免失败都将受3（1d6）的毒素伤害。三次成功豁免后毒药的效应终止。\n"
  },
  "爪钩": {
    "alias": [
      "Grappling Hook",
      "爪钩Grappling Hook"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "爪钩 Grappling Hook\n价格：2gp\n重量：4磅\n"
  },
  "爬梯": {
    "alias": [
      "Ladder",
      "爬梯Ladder"
    ],
    "price": {
      "gp": 0,
      "sp": 1,
      "cp": 0
    },
    "use": -1,
    "weight": 25,
    "canBuy": true,
    "description": "爬梯 Ladder（10尺）\n价格：1sp\n重量：25磅\n"
  },
  "牛眼提灯": {
    "alias": [
      "Bullseye Lantern",
      "牛眼提灯Bullseye Lantern"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "牛眼提灯 Bullseye Lantern\n价格：10gp\n重量：2磅\n一盏牛眼提灯可以为前方60尺的锥状区域提供明亮光照，以及该范围外60尺的微光光照。点亮的牛眼提灯每6小时消耗一扁瓶的灯油（1品脱）。\n"
  },
  "狩猎陷阱": {
    "alias": [
      "Hunting Trap",
      "狩猎陷阱Hunting Trap"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 25,
    "canBuy": true,
    "description": "狩猎陷阱 Hunting Trap\n价格：5gp\n重量：25磅\n使用动作设置好该陷阱后，其形成一个锯齿钢圈，并在生物踏上其中央压板时闭合。陷阱由一根沉重的链条固定在某处，例如一棵树或是一根钉在地上的钉子。任何踩上压板的生物都必须进行一次DC13的敏捷豁免，豁免失败则受到1d4点穿刺伤害，并停止移动。在该生物从陷阱中解脱前，其移动范围都被限制在链条的长度内（通常为3尺）。一个生物可以使用动作进行一次DC13的力量检定，以解脱自己或其触及范围内的另一生物。每次豁免失败时，被困生物都将受到1点穿刺伤害。\n"
  },
  "獒犬": {
    "alias": [
      "Mastiff",
      "獒犬Mastiff"
    ],
    "price": {
      "gp": 25,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "獒犬 Mastiff\n价格：25gp\n速度：40尺\n载重：195磅\n"
  },
  "玺戒": {
    "alias": [
      "Signet Ring",
      "玺戒Signet Ring"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "玺戒 Signet Ring\n价格：5gp\n"
  },
  "玻璃瓶": {
    "alias": [
      "Bottle",
      "玻璃瓶Bottle"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "玻璃瓶 Bottle，Glass\n价格：2gp\n重量：2磅\n"
  },
  "真理血清": {
    "alias": [
      "Truth Serum",
      "真理血清Truth Serum"
    ],
    "price": {
      "gp": 150,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "真理血清 Truth Serum\n种类：服用Ingested\n每剂价格：150gp\n这种毒药必须让生物吞下整一个剂量才能发挥效应。这一剂量可以被施放于食物或液体中。DM也可以设定让少剂量发挥更小的效应。如在豁免上有优势或是豁免失败后只受一半的伤害。\n服用该毒药的生物必须进行一次DC 11的体质豁免，豁免失败则中毒1小时，该中毒生物不能故意说谎，如同受法术诚实之域zone of truth效应影响一般。\n"
  },
  "矮种马": {
    "alias": [
      "pony",
      "矮种马pony"
    ],
    "price": {
      "gp": 30,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "矮种马 pony\n价格：30gp\n速度：40尺\n载重：225磅\n"
  },
  "矿工镐": {
    "alias": [
      "Miner",
      "矿工镐Miner"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 10,
    "canBuy": true,
    "description": "矿工镐 Miner's Pick\n价格：2gp\n重量：10磅\n"
  },
  "磨刀石": {
    "alias": [
      "Whetstone",
      "磨刀石Whetstone"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 1
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "磨刀石 Whetstone\n价格：1cp\n重量：1磅\n"
  },
  "算盘": {
    "alias": [
      "Abacus",
      "算盘Abacus"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "算盘 Abacus\n价格：2gp\n重量：2磅\n"
  },
  "箭": {
    "alias": [
      "Arrows",
      "箭Arrows"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 20,
    "weight": 1,
    "canBuy": true,
    "description": "箭 Arrows(20)\n弹药\n价格：1gp\n重量：1磅\n"
  },
  "箭袋": {
    "alias": [
      "Quiver",
      "箭袋Quiver"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "箭袋 Quiver\n价格：1gp\n重量：1磅\n一只箭袋可以盛装20支箭。\n"
  },
  "箱子": {
    "alias": [
      "Chest",
      "箱子Chest"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 25,
    "canBuy": true,
    "description": "箱子 Chest\n价格：5gp\n重量：25磅\n"
  },
  "篮子": {
    "alias": [
      "Basket",
      "篮子Basket"
    ],
    "price": {
      "gp": 0,
      "sp": 4,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "篮子 Basket\n价格：4sp\n重量：2磅\n"
  },
  "粉笔": {
    "alias": [
      "Chalk",
      "粉笔Chalk"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 1
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "粉笔 Chalk（1块）\n价格：1cp\n"
  },
  "粗腰桶": {
    "alias": [
      "Barrel",
      "粗腰桶Barrel"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 70,
    "canBuy": true,
    "description": "粗腰桶 Barrel\n价格：2gp\n重量：70磅\n"
  },
  "紫杉魔杖": {
    "alias": [
      "Yew Wand",
      "紫杉魔杖Yew Wand"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "紫杉魔杖 Yew Wand\n德鲁伊法器\n价格：10gp\n重量：1磅\n一根魔杖大约长15寸，由金属、骨头或木头制成。其末端由金属、水晶、石头或其他一些材料制成。\n"
  },
  "紫虫毒液": {
    "alias": [
      "Purple Worm Poison",
      "紫虫毒液Purple Worm Poison"
    ],
    "price": {
      "gp": 2000,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "紫虫毒液 Purple Worm Poison\n种类：损伤Injury\n每剂价格：2000gp\n损伤式毒药可以作用于武器、弹药、陷阱组件和其他可造成穿刺或挥砍伤害的物件上，并维持其毒性直至被伤口吸收或被洗刷干净。涂抹该毒素物件对生物造成挥砍或穿刺伤害时，该毒药就可以自伤口产生影响。\n该毒药必须从死亡或陷入失能的紫虫purple worm中提取。受该毒药影响的生物必须进行一次DC 19的体质豁免，豁免失败则受42（12d6）的毒素伤害，豁免成功则伤害减半。\n"
  },
  "纸": {
    "alias": [
      "Paper",
      "纸Paper"
    ],
    "price": {
      "gp": 0,
      "sp": 2,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "纸 Paper（每张）\n价格：2sp\n"
  },
  "罐": {
    "alias": [
      "Pitcher",
      "罐Pitcher"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "罐 Pitcher\n价格：2cp\n重量：4磅\n"
  },
  "羊皮纸": {
    "alias": [
      "Parchment",
      "羊皮纸Parchment"
    ],
    "price": {
      "gp": 0,
      "sp": 1,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "羊皮纸 Parchment（每张）\n价格：1sp\n"
  },
  "肥皂": {
    "alias": [
      "Soap",
      "肥皂Soap"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 2
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "肥皂 Soap\n价格：2cp\n"
  },
  "背包": {
    "alias": [
      "Backpack",
      "背包Backpack"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "背包 Backpack\n价格：2gp\n重量：5磅\n"
  },
  "腐精之油": {
    "alias": [
      "Oil of Taggit",
      "腐精之油Oil of Taggit"
    ],
    "price": {
      "gp": 400,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "腐精之油 Oil of Taggit\n种类：接触Contact\n每剂价格：400gp\n接触毒药可以涂抹于一个物件，并维持其毒性直至被洗刷干净。生物裸露的皮肤接触到毒药时便要承受其效应。\n接触到这种毒药的生物必须进行一次DC 13的体质豁免，豁免失败则中毒24小时。因此中毒的生物将陷入昏迷，直至其受到伤害才会惊醒。\n"
  },
  "芦笛": {
    "alias": [
      "Shawm",
      "芦笛Shawm"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "芦笛 Shawm\n乐器\n价格：2gp\n重量：1磅\n"
  },
  "苍白酊剂": {
    "alias": [
      "Pale Tincture",
      "苍白酊剂Pale Tincture"
    ],
    "price": {
      "gp": 250,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "苍白酊剂 Pale Tincture\n种类：服用Ingested\n每剂价格：250gp\n这种毒药必须让生物吞下整一个剂量才能发挥效应。这一剂量可以被施放于食物或液体中。DM也可以设定让少剂量发挥更小的效应。如在豁免上有优势或是豁免失败后只受一半的伤害。\n服用这种毒药的生物必须进行一次DC 16的体质豁免，豁免失败则受3（1d6）的毒素伤害并陷入中毒。该中毒生物每24小时必须再进行一次该豁免，每次豁免失败都将受3（1d6）的毒素伤害。该中毒效应终止前，该毒素造成的伤害无法以任何方式恢复。成功豁免七次后，该效应终止，此时该生物才能如常治愈伤害。\n"
  },
  "蒙汗药": {
    "alias": [
      "Torpor",
      "蒙汗药Torpor"
    ],
    "price": {
      "gp": 600,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "蒙汗药 Torpor\n种类：服用Ingested\n每剂价格：600gp\n这种毒药必须让生物吞下整一个剂量才能发挥效应。这一剂量可以被施放于食物或液体中。DM也可以设定让少剂量发挥更小的效应。如在豁免上有优势或是豁免失败后只受一半的伤害。\n服用这种毒药的生物必须进行一次DC 15的体质豁免，豁免失败则中毒4d6小时，该中毒生物陷入失能。\n"
  },
  "蛇毒": {
    "alias": [
      "Serpent Venom",
      "蛇毒Serpent Venom"
    ],
    "price": {
      "gp": 200,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "蛇毒 Serpent Venom\n种类：损伤Injury\n每剂价格：200gp\n损伤式毒药可以作用于武器、弹药、陷阱组件和其他可造成穿刺或挥砍伤害的物件上，并维持其毒性直至被伤口吸收或被洗刷干净。涂抹该毒素物件对生物造成挥砍或穿刺伤害时，该毒药就可以自伤口产生影响。\n该毒药必须从死亡或陷入失能的巨毒蛇身上提取，受该毒药影响的生物必须进行一次DC 11的体质豁免，豁免失败则受10（3d6）的毒素伤害，豁免成功则伤害减半。\n"
  },
  "蜡烛": {
    "alias": [
      "Candle",
      "蜡烛Candle"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 1
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "蜡烛 Candle\n价格：1cp\n一只蜡烛可以为其身边5尺半径范围提供明亮光照，以及该范围外5尺的微光光照。蜡烛的照明效果可以持续1小时。\n"
  },
  "表演服装": {
    "alias": [
      "Clothes",
      "表演服装Clothes"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "表演服装 Clothes,costume\n价格：5gp\n重量：4磅\n"
  },
  "角号": {
    "alias": [
      ""
    ],
    "price": {
      "gp": 3,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "角 Horn\n乐器\n价格：3gp\n重量：2磅\n"
  },
  "象": {
    "alias": [
      "Elephant",
      "象Elephant"
    ],
    "price": {
      "gp": 200,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "象 Elephant\n价格：200gp\n速度：40尺\n载重：1320磅\n"
  },
  "赌具": {
    "alias": [
      "Gaming set",
      "赌具Gaming set"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": false,
    "description": "赌具 Gaming set\n这种工具类包括了各种各样竞的技游戏工具，比如，其中最常见的骰子和纸牌\n可以用来玩三龙牌 Three-Dragon Ante这样的游戏。\n赌具熟练项指的是精通单独的某种赌博类型，例如三龙牌Three-Dragon Ante或摇色子。\n组件Components：一套赌博工具包含进行对应赌博游戏的全套赌具，例如一副完整的扑克牌或是棋盘与棋子。\n历史History：你对赌博的掌握包括对它历史的了解，以及与它有关的重要事件或与之相关的历史名人的知识。\n洞悉Insight：和某人赌上一把是了解他们个性的好方法，可以让你更好地分辨他们的谎言，了解他们的情绪。\n巧手Sleight of Hand：想出老千的话，巧手是个很有用的技能，比如你可以棋子换位、掌中藏牌、控制骰点。或者，对沉浸于赌局的目标进行扒窃也是不错的选择。\n用途    DC\n抓住作弊的玩家    15\n洞悉对手的个性    15\n以下列出了几种常见的赌具范例，但仍有其他未列出的种类存在。有赌具熟练项的角色，在使用相应赌具进行赌博的属性检定时，可以将其熟练加值加入检定结果中。个种类的赌具之间互不关联，其熟练项只能对相应的工具起效。\n整副骰子 Dice set\n整套龙棋 Dragonchess set\n整副纸牌 Playing card set\n整副三龙牌 Three-Dragon Ante set\n"
  },
  "辔具": {
    "alias": [
      "Bit and Bridle",
      "辔具Bit and Bridle"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "辔具 Bit and Bridle\n价格：2gp\n重量：1磅\n"
  },
  "里拉琴": {
    "alias": [
      "Lyre",
      "里拉琴Lyre"
    ],
    "price": {
      "gp": 30,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "里拉琴 Lyre\n乐器\n价格：30gp\n重量：2磅\n"
  },
  "野炊工具": {
    "alias": [
      "Mess Kit",
      "野炊工具Mess Kit"
    ],
    "price": {
      "gp": 0,
      "sp": 2,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "野炊工具 Mess Kit\n价格：2sp\n重量：1磅\n一个野炊工具锡盒包括一只茶杯和一些简易餐具。盒子被夹在一起，并且其中一面能够被用作一只煎锅而另一面则可以作为一只碟子或是浅碗。\n"
  },
  "钢面镜": {
    "alias": [
      "Steel Mirror",
      "钢面镜Steel Mirror"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0.5,
    "canBuy": true,
    "description": "钢面镜 Steel Mirror\n价格：5gp\n重量：1/2磅\n"
  },
  "铁壶": {
    "alias": [
      "Iron Pot",
      "铁壶Iron Pot"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 10,
    "canBuy": true,
    "description": "铁壶 Iron Pot\n价格：2gp\n重量：10磅\n"
  },
  "铁蒺藜": {
    "alias": [
      "Caltrops",
      "铁蒺藜Caltrops"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 2,
    "canBuy": true,
    "description": "铁蒺藜 Caltrops（一包20枚）\n价格：1gp\n重量：2磅\n你可以用一个动作将一包铁蒺藜撒出，并覆盖一块边长5尺的方形区域。任何进入该区域的生物必须进行一次DC15的敏捷豁免，豁免失败则该生物停止移动，并受到1点穿刺伤害。在该生物恢复至少1点生命值前，其步行速度将减少10尺。以半速穿过该区域的生物不需要进行该豁免。\n"
  },
  "铃铛": {
    "alias": [
      "Bell",
      "铃铛Bell"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "铃铛 Bell\n价格：1gp\n"
  },
  "铲子": {
    "alias": [
      "Shovel",
      "铲子Shovel"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 5,
    "canBuy": true,
    "description": "铲子 Shovel\n价格：2gp\n重量：5磅\n"
  },
  "铺盖": {
    "alias": [
      "Bedroll",
      "铺盖Bedroll"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 7,
    "canBuy": true,
    "description": "铺盖 Bedroll\n价格：1gp\n重量：7磅\n"
  },
  "链条": {
    "alias": [
      "Chain",
      "链条Chain"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 10,
    "canBuy": true,
    "description": "链条 Chain（10尺）\n价格：5gp\n重量：10磅\n一根链条有10点生命值。它可以被一次成功的DC20力量检定挣断。\n"
  },
  "锁": {
    "alias": [
      "Lock",
      "锁Lock"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "锁 Lock\n价格：10gp\n重量：1磅\n每把锁与一把钥匙相配套。不使用钥匙时，一个具有盗贼工具熟练项的生物可以通过一次成功的DC15敏捷检定撬开这把锁。DM可决定是否能够用更高的价格买到更好的锁。\n"
  },
  "锤子": {
    "alias": [
      "Hammer",
      "锤子Hammer"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "锤子 Hammer\n价格：1gp\n重量：3磅\n"
  },
  "镣铐": {
    "alias": [
      "Manacles",
      "镣铐Manacles"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 6,
    "canBuy": true,
    "description": "镣铐 Manacles\n价格：2gp\n重量：6磅\n这些金属束具可以困住一只小型或中型体型的生物。解开镣铐必须成功通过一次DC20的敏捷检定。破坏镣铐则必须成功通过一次DC20的力量检定。每套镣铐配有一把对应的钥匙。不用钥匙时，一个具有盗贼工具熟练项的生物可以通过一次成功的DC15敏捷检定撬开镣铐的锁。镣铐具有15点生命值。\n"
  },
  "长杆": {
    "alias": [
      "Pole",
      "长杆Pole"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 5
    },
    "use": -1,
    "weight": 7,
    "canBuy": true,
    "description": "长杆 Pole（10尺）\n价格：5cp\n重量：7磅\n"
  },
  "长笛": {
    "alias": [
      "Flute",
      "长笛Flute"
    ],
    "price": {
      "gp": 2,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "长笛 Flute\n乐器\n价格：2gp\n重量：1磅\n"
  },
  "长袍": {
    "alias": [
      "Robes",
      "长袍Robes"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 4,
    "canBuy": true,
    "description": "长袍 Robes\n价格：1gp\n重量：4磅\n"
  },
  "长铁钉": {
    "alias": [
      "Ironspikes",
      "长铁钉Ironspikes"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": 10,
    "weight": 5,
    "canBuy": true,
    "description": "长铁钉 Ironspikes（10根）\n价格：1gp\n重量：5磅\n"
  },
  "附盖提灯": {
    "alias": [
      "Hooded Lantern",
      "附盖提灯Hooded Lantern"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "附盖提灯 Hooded Lantern\n价格：5gp\n重量：2磅\n一盏附盖提灯可以为其身边30尺半径范围提供明亮光照，以及该范围外30尺的微光光照。点亮的提灯每6小时消耗一扁瓶的灯油（1品脱）。你可以使用一个动作放下盖子，使其光照减弱为5尺范围的微光照明。\n"
  },
  "鞍囊": {
    "alias": [
      "Saddlebags",
      "鞍囊Saddlebags"
    ],
    "price": {
      "gp": 4,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 8,
    "canBuy": true,
    "description": "鞍囊 Saddlebags\n价格：4gp\n重量：8磅\n"
  },
  "鞍座": {
    "alias": [
      "Saddle",
      "鞍座Saddle"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 25,
    "canBuy": true,
    "description": "鞍座 Saddle\n军用鞍座用以稳固骑手坐姿，保证其在骑乘战斗中的自由活动。使用鞍座时，你为维持骑乘姿势所进行的任何检定都具有优势。另外，水栖和飞行坐骑只能使用特别制作的鞍座。\n特制exotic 60gp 40磅\n 军用military 20gp 30磅\n 驮役pack 5gp 15磅\n 骑乘riding 10gp 25磅\n \n"
  },
  "风笛": {
    "alias": [
      "Bagpipes",
      "风笛Bagpipes"
    ],
    "price": {
      "gp": 30,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 6,
    "canBuy": true,
    "description": "风笛 Bagpipes\n乐器\n价格：30gp\n重量：6磅\n"
  },
  "飞龙毒液": {
    "alias": [
      "Wyvern Poison",
      "飞龙毒液Wyvern Poison"
    ],
    "price": {
      "gp": 1200,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "飞龙毒液 Wyvern Poison\n种类：损伤Injury\n每剂价格：1200gp\n损伤式毒药可以作用于武器、弹药、陷阱组件和其他可造成穿刺或挥砍伤害的物件上，并维持其毒性直至被伤口吸收或被洗刷干净。涂抹该毒素物件对生物造成挥砍或穿刺伤害时，该毒药就可以自伤口产生影响。\n这种毒药必须从死亡或陷入失能的飞龙身上提取，受这种毒药影响的生物必须进行一次DC 15的体质豁免，豁免失败则受24（7d6）的毒素伤害，豁免成功则伤害减半。\n"
  },
  "食腐虫粘液": {
    "alias": [
      "Carrion Crawler Mucus",
      "食腐虫粘液Carrion Crawler Mucus"
    ],
    "price": {
      "gp": 200,
      "sp": 0,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "食腐虫粘液 Carrion Crawler Mucus\n种类：接触Contact。接触毒药可以涂抹于一个物件，并维持其毒性直至被洗刷干净。生物裸露的皮肤接触到毒药时便要承受其效应。\n每剂价格：200gp\n这种毒必须从死亡或陷入失能的食腐虫身上获取。接触到这种毒药的生物必须进行一次DC 13的体质豁免，豁免失败则中毒1分钟。因此中毒的生物陷入麻痹。该生物在每个其自己回合结束时，再进行一次该豁免，豁免成功则终止自己身上的相应效应。\n"
  },
  "饲料": {
    "alias": [
      "Feed",
      "饲料Feed"
    ],
    "price": {
      "gp": 0,
      "sp": 0,
      "cp": 5
    },
    "use": 1,
    "weight": 10,
    "canBuy": true,
    "description": "饲料 Feed（每日份）\n价格：5cp\n重量：10磅\n"
  },
  "香水": {
    "alias": [
      "Perfume",
      "香水Perfume"
    ],
    "price": {
      "gp": 5,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "香水 Perfume（小瓶 Vial）\n价格：5gp\n"
  },
  "马厩": {
    "alias": [
      "Stabling",
      "马厩Stabling"
    ],
    "price": {
      "gp": 0,
      "sp": 5,
      "cp": 0
    },
    "use": 1,
    "weight": 0,
    "canBuy": true,
    "description": "马厩 Stabling（每日租）\n价格：5sp\n"
  },
  "驮用马": {
    "alias": [
      "Draft Horse",
      "驮用马Draft Horse"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "驮用马 Draft Horse\n价格：50gp\n速度：40尺\n载重：540磅\n"
  },
  "驴": {
    "alias": [
      "Donkey",
      "驴Donkey"
    ],
    "price": {
      "gp": 8,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "驴 Donkey\n价格：8gp\n速度：40尺\n载重：420磅\n"
  },
  "骆驼": {
    "alias": [
      "Camel",
      "骆驼Camel"
    ],
    "price": {
      "gp": 50,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "骆驼 Camel\n价格：50gp\n速度：50尺\n载重：480磅\n"
  },
  "骡": {
    "alias": [
      "Mule",
      "骡Mule"
    ],
    "price": {
      "gp": 8,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "骡 Mule\n价格：8gp\n速度：40尺\n载重：420磅\n"
  },
  "高档服装": {
    "alias": [
      "Clothes",
      "高档服装Clothes"
    ],
    "price": {
      "gp": 15,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 6,
    "canBuy": true,
    "description": "高档服装 Clothes,fine\n价格：15gp\n重量：6磅\n"
  },
  "魔杖": {
    "alias": [
      "Wand",
      "魔杖Wand"
    ],
    "price": {
      "gp": 10,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 1,
    "canBuy": true,
    "description": "魔杖 Wand\n奥术法器\n价格：10gp\n重量：1磅\n一根魔杖大约长15寸，由金属、骨头或木头制成。其末端由金属、水晶、石头或其他一些材料制成。\n"
  },
  "鲁特琴": {
    "alias": [
      "Lute",
      "鲁特琴Lute"
    ],
    "price": {
      "gp": 35,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 2,
    "canBuy": true,
    "description": "鲁特琴 Lute\n乐器\n价格：35gp\n重量：2磅\n"
  },
  "麻绳": {
    "alias": [
      "Hempen Rope",
      "麻绳Hempen Rope"
    ],
    "price": {
      "gp": 1,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 10,
    "canBuy": true,
    "description": "麻绳 Hempen Rope（50尺）\n价格：1gp\n重量：10磅\n麻质或者丝质的绳索，拥有2点生命值，且可以通过一次成功的DC17力量检定扯断。\n"
  },
  "鼓": {
    "alias": [
      "Drum",
      "鼓Drum"
    ],
    "price": {
      "gp": 6,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 3,
    "canBuy": true,
    "description": "鼓 Drum\n价格：6gp\n重量：3磅\n"
  },
  "龙骨船": {
    "alias": [
      "Keelboat",
      "龙骨船Keelboat"
    ],
    "price": {
      "gp": 3000,
      "sp": 0,
      "cp": 0
    },
    "use": -1,
    "weight": 0,
    "canBuy": true,
    "description": "龙骨船 Keelboat\n价格：3000gp\n速度：1mph\n在湖泊或河流中驾驶龙骨船或划艇时，其速度会受水流影响。顺流驾船时，其速度可以加上水流速度（通常为每小时3里）。这几种载具无法逆流而上，但可以在岸上用动物作拉纤。\n"
  }
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
    useFunc: (ctx: seal.MsgContext, _: seal.Message, __: Player, ___: InventoryInfo) => {
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
