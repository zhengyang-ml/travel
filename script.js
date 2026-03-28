const STORAGE_KEY = "travel_guide_templates_v2";
const ACTIVE_CITY_KEY = "travel_guide_active_city_v2";

const defaultGuides = {
  chenzhou: {
    heroTitle: "郴州深度旅游攻略",
    heroSubtitle:
      "聚焦东江湖、高椅岭、莽山五指峰、仰天湖。含路径规划、门票与预约、最佳季节、行李清单、避坑建议。",
    audience: "适用人群：首次到郴州自由行 / 周末短途 / 摄影行程",
    updatedAt: "2026-03-28",
    overview: [
      {
        title: "最佳季节",
        text: "4-6 月看云雾与翠绿山体，9-11 月天气更稳、能见度更高，适合摄影与徒步。",
      },
      {
        title: "建议时长",
        text: "首次建议 3 天 2 晚；只打卡东江湖+高椅岭可做 2 天 1 晚；深度玩法建议 4 天 3 晚。",
      },
      {
        title: "预算参考",
        text: "2天1晚：700-1200 元；3天2晚：1200-2000 元；含莽山五指峰索道预算会明显上浮。",
      },
      {
        title: "城市节奏",
        text: "景区分散，车程比你想象更久。把“路上时间”算进日程，避免一天排 3 个远距离景区。",
      },
    ],
    itineraries: [
      {
        id: "three-day",
        label: "3天2晚（推荐）",
        intro: "适合第一次来郴州，自然风光和城市夜游都有，强度中等，几乎不走回头路。",
        days: [
          {
            title: "Day 1：东江湖晨雾 + 白廊环湖",
            desc: "06:00 前后到小东江观雾带，拍完雾漫渔舟后坐船游湖，下午转白廊公路看湖岸线，晚上回市区住裕后街附近。",
          },
          {
            title: "Day 2：高椅岭 + 飞天山 + 裕后街夜宵",
            desc: "早上先去高椅岭避开正午暴晒，中午后去飞天山或回市区休整，晚上在裕后街吃鱼粉、血鸭和小炒。",
          },
          {
            title: "Day 3：莽山五指峰（整天）",
            desc: "建议早出发，索道+观光车+步道完整走一圈。16:00 前开始回程，避免山路夜间驾驶。",
          },
        ],
      },
      {
        id: "two-day",
        label: "2天1晚（周末）",
        intro: "时间紧张就抓两大核心：东江湖和高椅岭。重点是早起和控节奏，不然体感会很赶。",
        days: [
          {
            title: "Day 1：高铁到郴州 + 东江湖",
            desc: "建议早班高铁抵达后直奔东江湖，下午白廊或返市区。晚上住郴州主城区，方便次日出发。",
          },
          {
            title: "Day 2：高椅岭半日 + 市区收尾",
            desc: "07:00-11:00 走高椅岭核心观景线，中午后返程；若体力允许可补苏仙岭或北湖公园。",
          },
        ],
      },
      {
        id: "four-day",
        label: "4天3晚（深度）",
        intro: "适合摄影/慢游人群，东江湖、莽山、仰天湖都能覆盖，且每天留有机动时间应对天气变化。",
        days: [
          {
            title: "Day 1：东江湖（晨雾+游船）",
            desc: "晨雾拍摄结束后可在资兴午餐，下午不再硬排远景区，给第二天留体力。",
          },
          {
            title: "Day 2：高椅岭 + 飞天山",
            desc: "上午高椅岭，下午飞天山丹霞线，晚间回市区补给。",
          },
          {
            title: "Day 3：莽山五指峰",
            desc: "全天山地行程，建议穿防滑徒步鞋并备薄冲锋衣。",
          },
          {
            title: "Day 4：仰天湖大草原 + 返程",
            desc: "选晴天上草原更出片。中午后下山去车站/机场，避免高海拔下午起雾影响行车。",
          },
        ],
      },
    ],
    spots: [
      {
        name: "东江湖旅游区（资兴）",
        ticket: "观湖线成人票约 ¥75 起（平台价）",
        hours: "常见公告：04/12-10/31 约 06:00-18:00；11/01-03/31 约 08:00-17:30（当日为准）",
        booking: "建议提前 1 天在线预约；可通过景区官方渠道或携程/去哪儿/同程等平台下单。",
        visit: "半天-1天，晨雾拍摄推荐日出前到位。",
      },
      {
        name: "高椅岭旅游区",
        ticket: "成人约 ¥95；儿童/学生/老人优惠票约 ¥49（平台公示）",
        hours: "04/30-10/07 07:00-19:00；10/08-04/29 08:00-18:00，常见 16:40 后停止入园。",
        booking: "旺季建议提前 1-2 天预约，优先上午时段入园；雨天注意临时限流。",
        visit: "3-5 小时，晴天暴晒明显，防晒要做足。",
      },
      {
        name: "莽山五指峰景区",
        ticket: "门票+往返索道+往返观光车成人套票约 ¥280-290 起",
        hours: "常见 08:00-18:00，16:30 停止售票与入园（以景区公告为准）。",
        booking: "建议提前线上预约。可关注景区官方渠道，或用携程/去哪儿等平台购票。",
        visit: "建议整天，山地天气多变，注意保暖防风。",
      },
      {
        name: "仰天湖大草原",
        ticket: "门票约 ¥60 起（平台价，旺季可能浮动）",
        hours: "官方公告显示 4/18 恢复营业；景区执行分时预约，平台常见场次为 07:00-12:00、12:00-18:00（以当日公告为准）。",
        booking: "执行实名预约，无预约不入园。预约渠道：景区官方公众号/小程序与合作平台。",
        visit: "半天-1天，山顶风大、温差明显。",
      },
    ],
    budgets: [
      {
        title: "经济型（约 ¥1200-1500/人）",
        desc: "青旅/经济酒店 + 公共交通/拼车，适合学生和轻预算人群。",
        items: ["住宿：120-180 元/晚 x 2", "本地交通：200-300 元", "景区门票：350-550 元", "餐饮：250-350 元"],
      },
      {
        title: "舒适型（约 ¥1600-2200/人）",
        desc: "中端酒店 + 网约车/短包车，兼顾体验和效率。",
        items: ["住宿：260-420 元/晚 x 2", "本地交通：300-500 元", "景区门票：450-700 元", "餐饮：350-500 元"],
      },
      {
        title: "深度摄影型（约 ¥2200-3200/人）",
        desc: "含更灵活的用车和机动时间，适合多点位拍摄。",
        items: ["住宿：300-600 元/晚 x 3（按 4 天线）", "本地交通：600-1000 元（含包车时段）", "景区门票：650-1000 元", "餐饮与补给：500-700 元"],
      },
    ],
    transport: [
      {
        title: "外地到郴州",
        points: ["高铁优先：到郴州西站后再转景区，整体时间最可控。", "自驾可走京港澳高速，适合多景点联动；但山路路段尽量避免夜间驾驶。", "若有航班可飞郴州北湖机场；无直飞时可选长沙/广州中转高铁。"],
      },
      {
        title: "市内车程预估",
        points: ["郴州西站 -> 高椅岭：约 40-60 分钟", "郴州西站 -> 东江湖游客中心：约 60-90 分钟", "郴州西站 -> 仰天湖：约 90-120 分钟（山路）", "郴州西站 -> 莽山五指峰：约 150-210 分钟"],
      },
      {
        title: "不绕路策略",
        points: ["东江湖与白廊放同一天；高椅岭与飞天山放同一天。", "莽山和仰天湖都远，尽量不要在同一天硬排。", "最后一天安排“近景区+返程”，避免赶车焦虑。"],
      },
    ],
    foods: [
      {
        area: "必吃菜系",
        desc: "优先尝本地辨识度高的菜，再补湘菜经典。",
        items: ["栖凤渡鱼粉（早餐/夜宵都可）", "东江鱼（干香下饭，适合买伴手礼）", "临武鸭、嘉禾血鸭（重口但很有记忆点）", "桂东黄菌/山笋类时令菜（春秋更推荐）"],
      },
      {
        area: "觅食片区",
        desc: "住在这些区域附近，夜间觅食更方便。",
        items: ["裕后街：夜景好、餐饮密度高", "北湖路/国庆南路周边：本地馆子集中", "资兴东江周边：适合景区日午餐"],
      },
      {
        area: "点单建议",
        desc: "湘南口味偏辣偏咸，先控辣度再加菜。",
        items: ["2 人建议 2 菜 1 汤，避免过量", "先说明“微辣/少盐”，否则默认偏重口", "景区店价格普遍高于市区 15%-30%"],
      },
      {
        area: "预算参考",
        desc: "按中端门店估算，不含酒水。",
        items: ["早餐：10-20 元/人", "正餐：40-90 元/人", "夜宵：30-70 元/人"],
      },
    ],
    packingBase: [
      {
        title: "证件与票务",
        items: ["身份证", "驾驶证（自驾）", "酒店与景区预约截图", "紧急联系人与保险信息"],
      },
      {
        title: "电子设备",
        items: ["手机+充电器", "充电宝（>=10000mAh）", "相机与备用电池", "车载充电头/数据线"],
      },
      {
        title: "健康与安全",
        items: ["常用药（肠胃/过敏/晕车）", "创可贴与消毒棉片", "防蚊液", "一次性雨衣"],
      },
      {
        title: "徒步与防护",
        items: ["防滑徒步鞋", "速干袜 2-3 双", "防晒帽", "墨镜与防晒霜（SPF50+）"],
      },
    ],
    packingSeasonExtra: {
      spring: { title: "春季加带", items: ["薄冲锋衣", "轻薄抓绒", "可折叠雨伞", "防潮袋（相机/衣物）"] },
      summer: { title: "夏季加带", items: ["冰袖或防晒面罩", "电解质冲剂", "速干短袖 2-3 件", "防中暑药品"] },
      autumn: { title: "秋季加带", items: ["薄外套", "长袖速干衣", "保温杯", "清晨拍摄用薄手套（可选）"] },
      winter: { title: "冬季加带", items: ["保暖内层", "防风外套", "暖贴", "防滑鞋套（雨雪天可用）"] },
    },
    tips: [
      "东江湖晨雾拍摄窗口短，建议提前一晚住在景区周边并设置双闹钟。",
      "高椅岭与仰天湖部分路段无遮挡，阴天也会晒伤，防晒别省。",
      "莽山五指峰海拔和风力变化快，同一天可能经历“热-冷-风大”三段体验。",
      "郴州景区分散，网约车在部分山区返程接单慢，提前约返程车更稳。",
      "节假日热门景区会临时限流，遇到排队别硬等，先走周边轻量路线。",
      "山地栈道拍照时不要后退找角度，尤其高椅岭、莽山临崖点位。",
      "若带老人和儿童，建议把“上下山强度高”的景区放在体力最好的那天。",
      "自驾请避免夜间跑山路，尤其雨后和雾天，安全优先。",
    ],
    sources: [
      { label: "携程：高椅岭旅游区", url: "https://you.ctrip.com/sight/chenzhou336/1714278.html" },
      { label: "携程：东江湖旅游区", url: "https://you.ctrip.com/sight/zixing1570/16641.html" },
      { label: "途牛：东江湖旅游区", url: "https://www.tuniu.com/menpiao/10142" },
      { label: "去哪儿：高椅岭门票", url: "https://touch.piao.qunar.com/touch/detail.htm?id=2783915913" },
      { label: "去哪儿：莽山五指峰详情", url: "https://piao.qunar.com/ticket/detaillight_476153.html" },
      { label: "去哪儿：莽山五指峰门票", url: "https://touch.piao.qunar.com/touch/detail.htm?cat=from_other%3Dt_3984&id=3674279627" },
      { label: "北湖区政府：仰天湖恢复营业公告", url: "https://www.beihu.gov.cn/content/646943/53/15296710.html" },
      { label: "北湖区政府：仰天湖线上预约公告", url: "https://www.beihu.gov.cn/content/646942/61/15231210.html" },
      { label: "去哪儿：仰天湖门票", url: "https://touch.piao.qunar.com/touch/detail.htm?cat=from_other%3Dt_3420&id=11901" },
    ],
  },
  zhangjiajie: {
    heroTitle: "张家界深度旅游攻略模板",
    heroSubtitle:
      "覆盖国家森林公园、天门山、大峡谷玻璃桥、宝峰湖。此模板可直接在线编辑成你自己的版本。",
    audience: "适用人群：张家界首刷 / 亲子山水游 / 摄影徒步党",
    updatedAt: "2026-03-28",
    overview: [
      {
        title: "最佳季节",
        text: "4-6 月和 9-11 月舒适度最高。雨后云海概率高，但步道更滑，拍摄和安全要同时考虑。",
      },
      {
        title: "建议时长",
        text: "首次建议 4 天 3 晚。时间紧可做 3 天 2 晚（天门山 + 森林公园核心）。",
      },
      {
        title: "预算参考",
        text: "3 天线约 1500-2600 元/人；4 天线约 2200-3600 元/人（含索道/电梯等交通票）。",
      },
      {
        title: "行程节奏",
        text: "把“上山排队”和“景区内换乘”时间算进去，别按地图直线距离估算体力和耗时。",
      },
    ],
    itineraries: [
      {
        id: "three-day",
        label: "3天2晚（推荐）",
        intro: "适合第一次来张家界，主打高效打卡核心景观。",
        days: [
          {
            title: "Day 1：天门山",
            desc: "优先上午入园，走索道+玻璃栈道线，下午视天气选择穿山扶梯或徒步段。",
          },
          {
            title: "Day 2：国家森林公园（袁家界+天子山）",
            desc: "建议早入园，先走热门点位避开人流，下午走天子山方向观景平台。",
          },
          {
            title: "Day 3：金鞭溪 + 十里画廊 / 大峡谷二选一",
            desc: "体力偏轻就走溪谷线，追求刺激可选玻璃桥。",
          },
        ],
      },
      {
        id: "two-day",
        label: "2天1晚（压缩）",
        intro: "适合周末快闪。建议只选两大景区，避免来回折腾。",
        days: [
          { title: "Day 1：天门山全天", desc: "把核心栈道和观景点一次走完，晚间回市区补给休息。" },
          {
            title: "Day 2：森林公园半日核心线",
            desc: "只保留袁家界核心平台，不做全线徒步，下午返程。",
          },
        ],
      },
      {
        id: "four-day",
        label: "4天3晚（深度）",
        intro: "适合慢游和摄影，留足天气与体力机动空间。",
        days: [
          { title: "Day 1：天门山", desc: "主打高空景观与晚间市区休整。" },
          { title: "Day 2：森林公园东线", desc: "袁家界、天子山、观景平台拍摄。" },
          { title: "Day 3：森林公园西线", desc: "金鞭溪与十里画廊，走轻徒步恢复体力。" },
          { title: "Day 4：大峡谷玻璃桥 / 宝峰湖", desc: "根据天气与返程时刻做收尾安排。" },
        ],
      },
    ],
    spots: [
      {
        name: "张家界国家森林公园（武陵源）",
        ticket: "可填写：门票 + 景区交通的实际支出",
        hours: "可填写：当季开放时段与最晚入园时间",
        booking: "建议填写：官方预约渠道 + 平台分时票信息",
        visit: "建议 1.5-2 天更从容",
      },
      {
        name: "天门山国家森林公园",
        ticket: "可填写：不同线路票型价格（A/B/C 线）",
        hours: "可填写：旺季/淡季开园、索道运营时段",
        booking: "建议提前预约热门时段，雨雾天留备选计划",
        visit: "半天-1天",
      },
      {
        name: "张家界大峡谷玻璃桥",
        ticket: "可填写：门票与套票区间",
        hours: "可填写：开园时间与最晚检票时段",
        booking: "建议实名预约，节假日尽量提前 2-3 天",
        visit: "3-5 小时",
      },
      {
        name: "宝峰湖 / 黄龙洞（补充项）",
        ticket: "可填写：二选一景点门票",
        hours: "可填写：景区当季时段",
        booking: "可填写：是否可现场购票与是否限流",
        visit: "2-4 小时",
      },
    ],
    budgets: [
      {
        title: "经济型（约 ¥1500-2200/人）",
        desc: "经济酒店+公共交通，适合学生党。",
        items: ["住宿：150-260 元/晚", "餐饮：300-450 元", "门票交通：700-1100 元", "市内交通：150-300 元"],
      },
      {
        title: "舒适型（约 ¥2200-3200/人）",
        desc: "中端酒店+网约车，行程更省力。",
        items: ["住宿：300-550 元/晚", "餐饮：450-700 元", "门票交通：900-1400 元", "市内交通：300-600 元"],
      },
      {
        title: "深度摄影型（约 ¥3200-4500/人）",
        desc: "含机动用车和更多上山时段，适合拍云海/日出。",
        items: ["住宿：450-850 元/晚", "餐饮：700-1000 元", "门票交通：1200-1800 元", "用车：600-1200 元"],
      },
    ],
    transport: [
      {
        title: "外地到张家界",
        points: ["高铁到张家界西站最稳；机场适合远途城市直飞。", "住在天门山索道站附近，首日/末日衔接更顺。", "森林公园和市区之间往返需要预留至少半天机动。"],
      },
      {
        title: "景区串联建议",
        points: ["天门山单独占一天。", "森林公园建议拆成 1-2 天。", "大峡谷/宝峰湖安排在返程前一天或当天上午。"],
      },
      {
        title: "避堵建议",
        points: ["热门景区务必早入园。", "连续雨天会增加排队与交通波动。", "节假日优先选择分时票的最早档。"],
      },
    ],
    foods: [
      {
        area: "本地特色",
        desc: "景区外的本地馆子性价比更高。",
        items: ["土家三下锅", "腊肉合蒸", "岩耳炖鸡", "葛根粉"],
      },
      {
        area: "吃饭区域",
        desc: "按住宿位置优先就近。",
        items: ["天门山索道站周边", "武陵源标志门附近", "溪布街夜间片区"],
      },
      {
        area: "点餐建议",
        desc: "景区内餐饮偏贵，建议带简易能量补给。",
        items: ["提前说辣度", "两人点 2 菜 1 汤", "山上优先补水和碳水"],
      },
      {
        area: "预算参考",
        desc: "按中端馆子估算。",
        items: ["早餐：12-25 元/人", "正餐：50-100 元/人", "夜宵：35-80 元/人"],
      },
    ],
    packingBase: [
      {
        title: "证件与票务",
        items: ["身份证", "酒店订单与景区预约码", "返程票截图", "应急联系人信息"],
      },
      {
        title: "电子设备",
        items: ["手机与快充头", "充电宝", "相机与备用电池", "防水袋"],
      },
      {
        title: "健康与安全",
        items: ["晕车药", "肠胃药", "创可贴", "运动贴布"],
      },
      {
        title: "徒步与防护",
        items: ["防滑鞋", "速干衣", "防晒用品", "一次性雨衣"],
      },
    ],
    packingSeasonExtra: {
      spring: { title: "春季加带", items: ["轻薄冲锋衣", "防潮袋", "薄抓绒", "备用袜子"] },
      summer: { title: "夏季加带", items: ["透气速干衣", "电解质冲剂", "防中暑药", "防晒面罩"] },
      autumn: { title: "秋季加带", items: ["薄外套", "长袖内层", "保温杯", "轻手套"] },
      winter: { title: "冬季加带", items: ["保暖内层", "防风外壳", "暖贴", "防滑鞋套"] },
    },
    tips: [
      "先看天气再定先后顺序，晴天优先远景观景平台，阴雨天优先溪谷和溶洞类。",
      "山上栈道拍照时不要后退找角度，人员密集时不要停在台阶中段。",
      "天门山与森林公园都可能排队，给每段交通至少预留 30-60 分钟弹性。",
      "亲子出行建议每日只安排一个“强体力景区”。",
      "遇到大雾时不强行追机位，优先保安全并及时调整行程。",
    ],
    sources: [
      { label: "张家界市人民政府（文旅信息入口）", url: "https://www.zjj.gov.cn/" },
      { label: "张家界模板说明：请补充你常用的官方预约链接", url: "" },
      { label: "张家界模板说明：请补充你出发日期对应的票务平台链接", url: "" },
    ],
  },
};

const heroTitleEl = document.querySelector("#heroTitle");
const heroSubtitleEl = document.querySelector("#heroSubtitle");
const heroAudienceEl = document.querySelector("#heroAudience");
const updatedAtEl = document.querySelector("#updatedAt");
const citySelect = document.querySelector("#citySelect");
const editBtn = document.querySelector("#editBtn");
const saveBtn = document.querySelector("#saveBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const resetBtn = document.querySelector("#resetBtn");

const overviewGrid = document.querySelector("#overviewGrid");
const tripTabs = document.querySelector("#tripTabs");
const tripContent = document.querySelector("#tripContent");
const spotRows = document.querySelector("#spotRows");
const budgetGrid = document.querySelector("#budgetGrid");
const transportGrid = document.querySelector("#transportGrid");
const foodGrid = document.querySelector("#foodGrid");
const seasonSelect = document.querySelector("#seasonSelect");
const packingGrid = document.querySelector("#packingGrid");
const tipList = document.querySelector("#tipList");
const sourceList = document.querySelector("#sourceList");

let guides = loadGuides();
let currentCityId = localStorage.getItem(ACTIVE_CITY_KEY) || "chenzhou";
if (!guides[currentCityId]) {
  currentCityId = "chenzhou";
}
let activeTripId = getCurrentGuide().itineraries[0]?.id || "";
let isEditing = false;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (!isPlainObject(base)) {
    return override === undefined ? base : override;
  }
  const output = { ...base };
  if (!isPlainObject(override)) {
    return output;
  }
  Object.keys(base).forEach((key) => {
    output[key] = deepMerge(base[key], override[key]);
  });
  return output;
}

function loadGuides() {
  const defaults = deepClone(defaultGuides);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaults;
    }
    const saved = JSON.parse(raw);
    if (!isPlainObject(saved)) {
      return defaults;
    }
    Object.keys(defaults).forEach((cityId) => {
      defaults[cityId] = deepMerge(defaults[cityId], saved[cityId]);
    });
    return defaults;
  } catch (error) {
    return defaults;
  }
}

function persistGuides() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(guides));
}

function getCurrentGuide() {
  return guides[currentCityId];
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(text) {
  return escapeHtml(text).replaceAll("'", "&#39;");
}

function editableText(path, text, tag = "span", className = "") {
  const cls = `editable-text ${className}`.trim();
  return `<${tag} class="${cls}" data-path="${path}">${escapeHtml(text)}</${tag}>`;
}

function formatToday() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function setByPath(target, path, value) {
  const parts = path.split(".");
  let current = target;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
    current = current[key];
    if (current === undefined || current === null) {
      return;
    }
  }
  const last = /^\d+$/.test(parts[parts.length - 1]) ? Number(parts[parts.length - 1]) : parts[parts.length - 1];
  current[last] = value;
}

function renderCitySelect() {
  citySelect.innerHTML = Object.keys(guides)
    .map((cityId) => {
      const selected = cityId === currentCityId ? "selected" : "";
      const label = guides[cityId].heroTitle.replace("深度旅游攻略模板", "（模板）").replace("深度旅游攻略", "");
      return `<option value="${cityId}" ${selected}>${label}</option>`;
    })
    .join("");
}

function renderHero() {
  const guide = getCurrentGuide();
  heroTitleEl.classList.add("editable-text");
  heroTitleEl.dataset.path = "heroTitle";
  heroTitleEl.textContent = guide.heroTitle;

  heroSubtitleEl.classList.add("editable-text");
  heroSubtitleEl.dataset.path = "heroSubtitle";
  heroSubtitleEl.textContent = guide.heroSubtitle;

  heroAudienceEl.classList.add("editable-text");
  heroAudienceEl.dataset.path = "audience";
  heroAudienceEl.textContent = guide.audience;

  updatedAtEl.textContent = `信息更新时间：${guide.updatedAt}`;
}

function renderOverview() {
  const guide = getCurrentGuide();
  overviewGrid.innerHTML = guide.overview
    .map(
      (item, index) => `
        <article class="overview-card">
          ${editableText(`overview.${index}.title`, item.title, "h3")}
          ${editableText(`overview.${index}.text`, item.text, "p")}
        </article>
      `
    )
    .join("");
}

function renderTripTabs() {
  const guide = getCurrentGuide();
  if (!guide.itineraries.some((item) => item.id === activeTripId)) {
    activeTripId = guide.itineraries[0]?.id || "";
  }
  tripTabs.innerHTML = guide.itineraries
    .map((trip) => {
      const activeClass = trip.id === activeTripId ? "active" : "";
      return `<button type="button" class="tab-btn ${activeClass}" data-trip-id="${trip.id}">${escapeHtml(trip.label)}</button>`;
    })
    .join("");
}

function renderTripContent() {
  const guide = getCurrentGuide();
  const tripIndex = guide.itineraries.findIndex((item) => item.id === activeTripId);
  if (tripIndex < 0) {
    tripContent.innerHTML = "";
    return;
  }
  const trip = guide.itineraries[tripIndex];

  tripContent.innerHTML = `
    ${editableText(`itineraries.${tripIndex}.intro`, trip.intro, "p", "trip-intro")}
    <ol class="timeline">
      ${trip.days
        .map(
          (day, dayIndex) => `
            <li>
              ${editableText(`itineraries.${tripIndex}.days.${dayIndex}.title`, day.title, "strong")}
              ${editableText(`itineraries.${tripIndex}.days.${dayIndex}.desc`, day.desc, "span")}
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}

function renderSpots() {
  const guide = getCurrentGuide();
  spotRows.innerHTML = guide.spots
    .map(
      (spot, index) => `
        <tr>
          <td>${editableText(`spots.${index}.name`, spot.name)}</td>
          <td>${editableText(`spots.${index}.ticket`, spot.ticket)}</td>
          <td>${editableText(`spots.${index}.hours`, spot.hours)}</td>
          <td>${editableText(`spots.${index}.booking`, spot.booking)}</td>
          <td>${editableText(`spots.${index}.visit`, spot.visit)}</td>
        </tr>
      `
    )
    .join("");
}

function renderBudgets() {
  const guide = getCurrentGuide();
  budgetGrid.innerHTML = guide.budgets
    .map(
      (budget, index) => `
        <article class="budget-card">
          ${editableText(`budgets.${index}.title`, budget.title, "h3")}
          ${editableText(`budgets.${index}.desc`, budget.desc, "p")}
          <ul>
            ${budget.items.map((item, itemIndex) => `<li>${editableText(`budgets.${index}.items.${itemIndex}`, item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderTransport() {
  const guide = getCurrentGuide();
  transportGrid.innerHTML = guide.transport
    .map(
      (block, index) => `
        <article class="transport-card">
          ${editableText(`transport.${index}.title`, block.title, "h3")}
          <ul>
            ${block.points.map((point, pointIndex) => `<li>${editableText(`transport.${index}.points.${pointIndex}`, point)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderFood() {
  const guide = getCurrentGuide();
  foodGrid.innerHTML = guide.foods
    .map(
      (food, index) => `
        <article class="food-card">
          ${editableText(`foods.${index}.area`, food.area, "h3")}
          ${editableText(`foods.${index}.desc`, food.desc, "p")}
          <ul>
            ${food.items.map((item, itemIndex) => `<li>${editableText(`foods.${index}.items.${itemIndex}`, item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderPacking(season) {
  const guide = getCurrentGuide();
  const cards = [...guide.packingBase, guide.packingSeasonExtra[season]];
  packingGrid.innerHTML = cards
    .map((card, index) => {
      const cardPath =
        index < guide.packingBase.length ? `packingBase.${index}` : `packingSeasonExtra.${season}`;
      return `
        <article class="packing-card">
          ${editableText(`${cardPath}.title`, card.title, "h3")}
          <ul>
            ${card.items.map((item, itemIndex) => `<li>${editableText(`${cardPath}.items.${itemIndex}`, item)}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderTips() {
  const guide = getCurrentGuide();
  tipList.innerHTML = guide.tips.map((tip, index) => `<li>${editableText(`tips.${index}`, tip)}</li>`).join("");
}

function renderSources() {
  const guide = getCurrentGuide();
  sourceList.innerHTML = guide.sources
    .map((source, index) => {
      const hasUrl = Boolean(source.url && source.url.trim());
      const openLink = hasUrl
        ? `<a href="${escapeAttr(source.url)}" target="_blank" rel="noopener noreferrer">打开链接</a>`
        : `<span>待补充链接</span>`;
      return `
        <li>
          ${editableText(`sources.${index}.label`, source.label)}
          <span> · </span>
          ${openLink}
          <div>${editableText(`sources.${index}.url`, source.url || "", "span")}</div>
        </li>
      `;
    })
    .join("");
}

function applyEditingState() {
  document.body.classList.toggle("editing", isEditing);
  editBtn.hidden = isEditing;
  saveBtn.hidden = !isEditing;
  cancelBtn.hidden = !isEditing;
  citySelect.disabled = isEditing;

  document.querySelectorAll(".editable-text").forEach((node) => {
    node.setAttribute("contenteditable", isEditing ? "true" : "false");
    node.setAttribute("spellcheck", "false");
  });
}

function renderAll() {
  renderCitySelect();
  renderHero();
  renderOverview();
  renderTripTabs();
  renderTripContent();
  renderSpots();
  renderBudgets();
  renderTransport();
  renderFood();
  renderPacking(seasonSelect.value || "spring");
  renderTips();
  renderSources();
  applyEditingState();
}

function collectAndSaveEdits() {
  const guide = getCurrentGuide();
  document.querySelectorAll(".editable-text[data-path]").forEach((node) => {
    const path = node.dataset.path;
    if (!path) {
      return;
    }
    const value = node.textContent.trim();
    setByPath(guide, path, value);
  });
  guide.updatedAt = formatToday();
  persistGuides();
}

tripTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".tab-btn");
  if (!button) {
    return;
  }
  const nextId = button.dataset.tripId;
  if (!nextId || nextId === activeTripId) {
    return;
  }
  activeTripId = nextId;
  renderTripTabs();
  renderTripContent();
  applyEditingState();
});

seasonSelect.addEventListener("change", (event) => {
  renderPacking(event.target.value);
  applyEditingState();
});

citySelect.addEventListener("change", (event) => {
  if (isEditing) {
    const ok = window.confirm("当前有未保存修改，切换城市会丢失本次改动。是否继续？");
    if (!ok) {
      citySelect.value = currentCityId;
      return;
    }
    isEditing = false;
  }
  currentCityId = event.target.value;
  localStorage.setItem(ACTIVE_CITY_KEY, currentCityId);
  activeTripId = getCurrentGuide().itineraries[0]?.id || "";
  renderAll();
});

editBtn.addEventListener("click", () => {
  isEditing = true;
  applyEditingState();
});

saveBtn.addEventListener("click", () => {
  collectAndSaveEdits();
  isEditing = false;
  renderAll();
});

cancelBtn.addEventListener("click", () => {
  isEditing = false;
  renderAll();
});

resetBtn.addEventListener("click", () => {
  const ok = window.confirm("确认重置当前城市为默认模板？已保存的本地修改会被覆盖。");
  if (!ok) {
    return;
  }
  guides[currentCityId] = deepClone(defaultGuides[currentCityId]);
  activeTripId = guides[currentCityId].itineraries[0]?.id || "";
  persistGuides();
  isEditing = false;
  renderAll();
});

renderAll();
