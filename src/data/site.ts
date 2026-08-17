export const site = {
  name: "落日小镇",
  slogan: "生存 · 经济 · 家园 · 社交",
  version: "V1.0 开荒时代",
  address: "Play.SunsetTown.cn",
  mcVersion: "Java 版 1.21",
};

export const worlds = [
  {
    id: "spawn",
    name: "主城世界",
    tag: "服务器门户",
    color: "from-dusk-400 to-dusk-600",
    desc: "玩家的出生点与整个服务器的心脏。",
    points: [
      "玩家出生与聚集地",
      "NPC 功能区与交易市场入口",
      "活动入口 · 排行榜展示区",
      "规则说明区",
      "副本 / 工会大厅预留",
    ],
  },
  {
    id: "survival",
    name: "生存世界",
    tag: "家园所在",
    color: "from-emerald-400 to-emerald-600",
    desc: "原版生存，长期保存，是玩家真正拥有「家园感」的世界。",
    points: [
      "自由探索 · 圈地保护",
      "建造基地与农场",
      "红石建筑与玩家合作",
      "原则上永不重置",
      "禁止严重卡服机器",
    ],
  },
  {
    id: "resource",
    name: "资源世界",
    tag: "采集圣地",
    color: "from-amber-400 to-amber-600",
    desc: "挖矿砍树的资源保障，定期重置以保证每位玩家都有资源可挖。",
    points: [
      "挖矿 · 砍树 · 大规模采集",
      "高价值资源主要来源",
      "定期重置并提前公告",
      "不建议长期建造基地",
    ],
  },
  {
    id: "plot",
    name: "地皮世界",
    tag: "私人空间",
    color: "from-sky-400 to-sky-600",
    desc: "领取平坦地皮，建造住宅、商店与展示建筑。",
    points: [
      "安全稳定的私人空间",
      "建造私人住宅与实体商店",
      "支持直接传送到玩家地皮",
      "未来玩家商业街与展示区",
    ],
  },
  {
    id: "nether",
    name: "下界世界",
    tag: "资源与探索",
    color: "from-red-500 to-rose-700",
    desc: "原版下界探索，保证高级资源持续产出。",
    points: [
      "原版下界探索体验",
      "下界堡垒等结构探索",
      "外围周期性刷新",
      "重要建筑通过保护区保存",
    ],
  },
  {
    id: "end",
    name: "末地世界",
    tag: "后期征程",
    color: "from-fuchsia-500 to-purple-700",
    desc: "末影龙、末地城、鞘翅与潜影壳等高级资源所在地。",
    points: [
      "保留原版后期探索玩法",
      "中心区域长期保留",
      "外围可定期刷新",
      "控制过于变态的装备产出",
    ],
  },
];

export const features = [
  {
    icon: "🏰",
    title: "多世界生存",
    desc: "主城、生存、资源、地皮、下界、末地六大世界，各有分工，长期运营。",
  },
  {
    icon: "💰",
    title: "统一金币经济",
    desc: "统一货币金币，玩家交易、拍卖行、NPC 商店贯穿整套经济体系，带 3% 成交税抑制通胀。",
  },
  {
    icon: "🏪",
    title: "玩家自由市场",
    desc: "拍卖行随手买卖 + 地皮实体商店，玩家真正拥有自己的商业资产。",
  },
  {
    icon: "⚔️",
    title: "适度装备成长",
    desc: "原版装备为主，少量高级附魔（效率 VI / 保护 V）提供毕业后的成长目标，不碾压原版。",
  },
  {
    icon: "🎉",
    title: "常驻活动",
    desc: "主城寻宝、钓鱼比赛、射箭比赛、跑酷、在线小活动，简单稳定可反复举办。",
  },
  {
    icon: "🏆",
    title: "排行榜与收藏",
    desc: "财富榜、在线时长榜、活动积分榜，加上开服纪念收藏品，记录服务器历史。",
  },
];

export const roadmap = [
  { version: "V1.0", name: "开荒时代", status: "进行中", desc: "生存 · 经济 · 家园 · 社交" },
  { version: "V1.1", name: "工会时代", status: "规划中", desc: "工会创建 · 签到 · 贡献 · 等级" },
  { version: "V1.2", name: "势力时代", status: "规划中", desc: "工会驻地 · 排行榜 · 公共建设" },
  { version: "V1.3", name: "争霸时代", status: "规划中", desc: "工会战 · 起床战争 · 饥饿游戏" },
  { version: "V1.4", name: "冒险时代", status: "规划中", desc: "正式副本 · 世界 Boss · RPG 装备" },
  { version: "V1.5", name: "世界事件", status: "规划中", desc: "天气系统 · 世界事件 · 限时玩法" },
];

export const vipTiers = [
  {
    name: "初升会员",
    level: "VIP 1",
    price: "¥10 / 月",
    color: "border-dusk-400/40",
    perks: [
      "更多 HOME 数量",
      "拍卖行栏位增加",
      "VIP 前缀与彩色名字",
      "进服提示",
    ],
  },
  {
    name: "正午会员",
    level: "VIP 2",
    price: "¥30 / 月",
    color: "border-dusk-500 border-2",
    highlight: true,
    perks: [
      "包含 VIP 1 全部权益",
      "更多拍卖行栏位",
      "地皮内飞行",
      "部分指令冷却减少",
      "特殊称号",
    ],
  },
  {
    name: "黄昏会员",
    level: "VIP 3",
    price: "¥60 / 月",
    color: "border-dusk-600/40",
    perks: [
      "包含 VIP 2 全部权益",
      "更多 HOME 与传送点",
      "特殊聊天格式",
      "更多活动权益",
    ],
  },
];

export const corePrinciples = [
  "先把「生存、经济、家园、社交」做稳，再增加 RPG。",
  "先让玩家产生资产，再让玩家产生竞争。",
  "先让玩家认识彼此，再开放工会。",
  "装备成长不能过快，经济不能无限膨胀。",
  "赞助主要出售便利、身份和展示，不出售无法追赶的永久优势。",
];

export const rules = [
  "禁止恶意破坏他人建筑",
  "禁止利用明显 BUG 无限刷物品",
  "禁止大规模恶意卡服机器",
  "禁止恶意骚扰玩家",
  "禁止现实货币私下交易服务器资产",
  "禁止严重影响经济平衡的漏洞利用",
];

export const noDonate = [
  "无法通过游戏获得的最高级武器",
  "大量金币",
  "世界范围自由飞行",
  "无限资源",
  "极端附魔",
  "PvP 碾压属性",
];

export const firstWeek = [
  { day: "第 1 周", theme: "开荒", focus: "生存 · 挖矿 · 建家 · 圈地 · 地皮 · 交易", events: "开服寻宝 · 开荒签到 · 开服纪念称号" },
  { day: "第 2 周", theme: "经济", focus: "玩家商店 · 拍卖行 · 财富积累", events: "商业活动 · 钓鱼比赛 · 材料收集" },
  { day: "第 3 周", theme: "成长", focus: "特殊装备 · 高级附魔 · 稀有物品", events: "Boss · 射箭比赛 · 特殊掉落" },
  { day: "第 4 周", theme: "势力", focus: "固定团队组建 · 工会预热", events: "团队活动 · 小型 PvP · 排行榜结算" },
];