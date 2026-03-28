const cityData = [
  {
    id: "changsha",
    name: "长沙市",
    subtitle: "湘江夜色、老街烟火与现代潮流同框",
    intro:
      "长沙适合首次来湘的游客，交通成熟、夜生活丰富，博物馆和老街都很集中，3 天可以玩得完整。",
    bestSeason: "3-5月、9-11月",
    duration: "3天2晚",
    budget: "人均 900-1500 元（中端）",
    transport: "高铁到长沙南/飞机到黄花机场；地铁覆盖主景区",
    highlights: ["岳麓山-岳麓书院", "湖南博物院", "橘子洲与湘江夜游", "潮宗街-太平老街"],
    itinerary: [
      "Day1：湖南博物院 → 烈士公园 → 坡子街夜宵",
      "Day2：岳麓山 → 岳麓书院 → 橘子洲 → 湘江夜游",
      "Day3：开福寺 → 潮宗街咖啡小店 → 返程",
    ],
    foods: ["臭豆腐", "口味虾", "剁椒鱼头", "糖油粑粑", "长沙米粉"],
    tips: ["博物院需提前预约", "夜市排队长，建议错峰", "夏季湿热，防晒与驱蚊都要准备"],
    tags: ["culture", "food", "family"],
  },
  {
    id: "zhuzhou",
    name: "株洲市",
    subtitle: "工业城市里的山水与炎帝文化",
    intro:
      "株洲适合亲子和轻户外旅行，云龙片区配套完善，炎陵方向则更偏自然与文化体验。",
    bestSeason: "4-6月、9-11月",
    duration: "2-3天",
    budget: "人均 700-1200 元",
    transport: "高铁到株洲西；市区网约车+短途自驾更方便",
    highlights: ["神农城炎帝文化主题区", "株洲方特旅游区", "炎帝陵", "酒仙湖景区"],
    itinerary: [
      "Day1：神农城 → 神农塔夜景 → 河西夜市",
      "Day2：方特主题乐园全天（亲子优先）",
      "Day3：炎帝陵或酒仙湖一日往返",
    ],
    foods: ["攸县香干", "茶陵祖庵鱼", "醴陵小炒肉", "米豆腐"],
    tips: ["方特周末人多，建议工作日前往", "炎陵方向山路多，晕车人群备药", "春季多雨，带轻便雨具"],
    tags: ["culture", "family", "nature"],
  },
  {
    id: "xiangtan",
    name: "湘潭市",
    subtitle: "红色旅游核心地与湘江古城慢生活",
    intro:
      "湘潭节奏慢，文化厚度高，适合做 2 天深度游，红色路线和老街路线都比较成熟。",
    bestSeason: "全年可游，春秋更舒适",
    duration: "2天1晚",
    budget: "人均 500-900 元",
    transport: "高铁到湘潭北；景点间网约车效率更高",
    highlights: ["韶山旅游区", "窑湾历史文化街区", "东山书院", "昭山风景区"],
    itinerary: [
      "Day1：韶山核心景区红色线路",
      "Day2：窑湾古街 → 东山书院 → 湘江沿线散步",
    ],
    foods: ["湘潭水煮活鱼", "毛氏红烧肉", "剁椒蒸菜", "湘莲甜品"],
    tips: ["韶山节假日车流量大，尽量早出发", "红色场馆请遵守参观秩序", "古街夜间灯光适合拍照"],
    tags: ["red", "culture", "food"],
  },
  {
    id: "hengyang",
    name: "衡阳市",
    subtitle: "南岳衡山祈福登高与古城书院文化",
    intro:
      "衡阳以南岳衡山最有代表性，建议至少安排 2 天，山上温差明显，分层穿衣体验更好。",
    bestSeason: "4-10月（避开极端天气）",
    duration: "2-3天",
    budget: "人均 700-1300 元",
    transport: "高铁到衡山西/衡阳东；上山可乘景区环保车",
    highlights: ["南岳衡山", "祝融峰日出", "石鼓书院", "东洲岛"],
    itinerary: [
      "Day1：南岳大庙 → 半山寺庙群",
      "Day2：凌晨冲顶祝融峰看日出 → 下山休整",
      "Day3：石鼓书院 → 东洲岛轻松游",
    ],
    foods: ["衡阳鱼粉", "南岳素斋", "衡东土菜", "唆螺"],
    tips: ["旺季住宿建议提前 1-2 周预订", "雨雾天气山路湿滑，鞋底防滑很关键", "祈福点排队时注意保管随身物品"],
    tags: ["nature", "culture", "family"],
  },
  {
    id: "shaoyang",
    name: "邵阳市",
    subtitle: "世界自然遗产与苗瑶风情兼具",
    intro:
      "邵阳更适合自驾或包车，崀山景观完整、游线清晰，配合南山牧场可做 3 天自然疗愈行程。",
    bestSeason: "4-6月、9-10月",
    duration: "3天2晚",
    budget: "人均 800-1400 元",
    transport: "高铁到邵阳北后转车；多景点分散建议自驾",
    highlights: ["崀山风景名胜区", "南山国家公园（城步片区）", "白水洞", "苗寨民俗体验"],
    itinerary: [
      "Day1：崀山天一巷与八角寨",
      "Day2：扶夷江漂流或丹霞地貌深度线",
      "Day3：南山牧场草原风光 → 返程",
    ],
    foods: ["武冈卤菜", "猪血丸子", "邵阳米粉", "苗家酸汤菜"],
    tips: ["景区间车程较长，行程别排太满", "山区天气变化快，备冲锋衣", "漂流项目受天气影响较大"],
    tags: ["nature", "culture", "family"],
  },
  {
    id: "yueyang",
    name: "岳阳市",
    subtitle: "洞庭湖畔的名楼诗意与湿地风光",
    intro:
      "岳阳兼有人文地标和湖泊生态，城市游与湖区游都可 2 天完成，适合周末短途。",
    bestSeason: "3-5月、10-11月",
    duration: "2天1晚",
    budget: "人均 600-1000 元",
    transport: "高铁到岳阳东；市区景点集中，公交+打车即可",
    highlights: ["岳阳楼", "君山岛", "洞庭湖博物馆", "巴陵广场夜景"],
    itinerary: [
      "Day1：岳阳楼景区 → 汴河街美食 → 夜游洞庭湖畔",
      "Day2：君山岛环线 → 洞庭湖博物馆",
    ],
    foods: ["洞庭银鱼", "君山虾饼", "巴陵全鱼席", "岳阳烧烤"],
    tips: ["登楼高峰在节假日上午，建议下午入场", "湖区风大，秋冬注意保暖", "君山岛往返关注末班车时间"],
    tags: ["culture", "food", "family", "nature"],
  },
  {
    id: "changde",
    name: "常德市",
    subtitle: "桃花源意境与水城慢游体验",
    intro:
      "常德以人文意境见长，桃花源和市区河街可组成舒缓行程，适合情侣和家庭轻松出行。",
    bestSeason: "3-4月、9-11月",
    duration: "2-3天",
    budget: "人均 650-1100 元",
    transport: "高铁到常德站；桃花源建议包车或参加一日团",
    highlights: ["桃花源旅游区", "常德诗墙", "柳叶湖", "常德河街夜游"],
    itinerary: [
      "Day1：常德诗墙 → 河街慢逛 → 夜景拍摄",
      "Day2：桃花源全天深度游",
      "Day3：柳叶湖骑行或游船 → 返程",
    ],
    foods: ["常德牛肉粉", "酱板鸭", "钵子菜", "擂茶"],
    tips: ["桃花源景区面积较大，穿舒适步行鞋", "河街晚间更出片，建议预留时间", "夏季注意防晒补水"],
    tags: ["culture", "food", "family", "nature"],
  },
  {
    id: "zhangjiajie",
    name: "张家界市",
    subtitle: "峰林奇观与高空体验代表目的地",
    intro:
      "张家界是湖南自然景观天花板，建议 4 天起步，森林公园和天门山分开游玩，体力更合理。",
    bestSeason: "4-6月、9-11月",
    duration: "4天3晚",
    budget: "人均 1800-3000 元",
    transport: "飞机/高铁到张家界；景区间班车+索道组合",
    highlights: ["张家界国家森林公园", "袁家界与天子山", "天门山", "大峡谷玻璃桥"],
    itinerary: [
      "Day1：抵达后游天门山（索道+玻璃栈道）",
      "Day2：森林公园袁家界 → 天子山",
      "Day3：金鞭溪徒步 → 十里画廊",
      "Day4：大峡谷玻璃桥或宝峰湖 → 返程",
    ],
    foods: ["土家三下锅", "腊肉合蒸", "岩耳炖鸡", "葛根粉"],
    tips: ["核心景区需提前在线预约", "雨天云海概率高但路滑，鞋子很关键", "旺季排队时间长，尽量早入园"],
    tags: ["nature", "family"],
  },
  {
    id: "yiyang",
    name: "益阳市",
    subtitle: "竹海茶乡与洞庭湖区慢节奏生活",
    intro:
      "益阳不拥挤，适合周末休闲，桃江竹海和安化黑茶文化线路是核心看点。",
    bestSeason: "3-5月、10-11月",
    duration: "2天1晚",
    budget: "人均 500-900 元",
    transport: "高铁到益阳南；安化方向建议包车",
    highlights: ["桃花江竹海", "安化茶马古道", "会龙山", "皇家湖湿地"],
    itinerary: [
      "Day1：桃江竹海徒步 → 市区夜宵",
      "Day2：安化黑茶体验馆 → 茶马古道",
    ],
    foods: ["安化擂茶", "南县小龙虾", "益阳松花皮蛋", "腊味合蒸"],
    tips: ["茶山路段弯道多，避免夜间赶路", "适合走慢节奏，不建议高密度打卡", "湿地蚊虫较多，备防蚊用品"],
    tags: ["nature", "food", "family"],
  },
  {
    id: "chenzhou",
    name: "郴州市",
    subtitle: "雾漫小东江与丹霞草甸一站集齐",
    intro:
      "郴州近年热度高，东江湖+高椅岭组合很经典，建议 3 天行程覆盖湖景、山景与温泉。",
    bestSeason: "4-11月（雾景看清晨）",
    duration: "3天2晚",
    budget: "人均 1100-1800 元",
    transport: "高铁到郴州西；景点分散，拼车或包车更省时",
    highlights: ["东江湖", "高椅岭", "莽山国家森林公园", "仰天湖草原"],
    itinerary: [
      "Day1：东江湖晨雾拍摄 → 游船",
      "Day2：高椅岭丹霞徒步 → 郴州温泉",
      "Day3：莽山或仰天湖二选一深度游",
    ],
    foods: ["栖凤渡鱼粉", "临武鸭", "东江鱼", "嘉禾血鸭"],
    tips: ["东江湖晨雾时间窗口短，建议前晚住景区附近", "高椅岭无遮挡，防晒要足", "热门机位注意安全，不越警戒线"],
    tags: ["nature", "food", "family"],
  },
  {
    id: "yongzhou",
    name: "永州市",
    subtitle: "古城文脉与山水秘境并存",
    intro:
      "永州人文底蕴深，柳宗元文化和零陵古城很有辨识度，适合文化+自然结合行程。",
    bestSeason: "春秋两季",
    duration: "2-3天",
    budget: "人均 600-1100 元",
    transport: "高铁到永州站；景点间打车较灵活",
    highlights: ["零陵古城", "柳子庙", "九嶷山", "阳明山国家森林公园"],
    itinerary: [
      "Day1：零陵古城 → 柳子庙夜游",
      "Day2：九嶷山文化线 + 山景",
      "Day3：阳明山森林线（可选）",
    ],
    foods: ["东安鸡", "永州血鸭", "道州灰鹅", "宁远酿豆腐"],
    tips: ["古城夜景拍照推荐蓝调时段", "山里早晚温差较大，备薄外套", "景区内台阶较多，轻装出行更舒适"],
    tags: ["culture", "nature", "food"],
  },
  {
    id: "huaihua",
    name: "怀化市",
    subtitle: "古商城与侗苗风情的多民族旅行地",
    intro:
      "怀化历史节点丰富，古城、受降纪念地和民族村寨都值得停留，适合 3 天文化线路。",
    bestSeason: "4-6月、9-10月",
    duration: "3天2晚",
    budget: "人均 800-1400 元",
    transport: "高铁到怀化南；县域景点建议包车",
    highlights: ["洪江古商城", "芷江受降纪念坊", "黔阳古城", "通道侗寨"],
    itinerary: [
      "Day1：洪江古商城沉浸式步行",
      "Day2：芷江受降纪念馆红色线路",
      "Day3：黔阳古城或通道侗寨人文体验",
    ],
    foods: ["芷江鸭", "酸汤鱼", "侗家腌肉", "米豆腐"],
    tips: ["古商城巷道多，建议请讲解更易理解历史", "部分村寨夜间交通弱，尽量白天进出", "尊重民族习俗再拍照"],
    tags: ["culture", "red", "food"],
  },
  {
    id: "loudi",
    name: "娄底市",
    subtitle: "梯田、溶洞与梅山文化的组合玩法",
    intro:
      "娄底非常适合自然人文混搭游，紫鹊界梯田和梅山龙宫强烈建议搭配安排。",
    bestSeason: "4-6月、9-10月",
    duration: "2-3天",
    budget: "人均 700-1200 元",
    transport: "高铁到娄底南；新化景区建议自驾或包车",
    highlights: ["紫鹊界梯田", "梅山龙宫", "曾国藩故居", "湄江地质公园"],
    itinerary: [
      "Day1：梅山龙宫 + 新化县城夜宵",
      "Day2：紫鹊界梯田日出/日落线",
      "Day3：曾国藩故居或湄江地质线",
    ],
    foods: ["新化三合汤", "水车板鸭", "梅山扣肉", "牛肉粉"],
    tips: ["梯田最佳拍摄在清晨和傍晚", "雨后部分土路泥泞，鞋子和车辆要注意", "溶洞湿滑，老人小孩慢行"],
    tags: ["nature", "culture", "family"],
  },
  {
    id: "xiangxi",
    name: "湘西州",
    subtitle: "吊脚楼夜色与峡谷大桥的视觉冲击",
    intro:
      "虽然不是地级市，但通常与湖南全域旅游一起规划。凤凰古城+芙蓉镇+矮寨是经典三连。",
    bestSeason: "3-5月、9-11月",
    duration: "3天2晚",
    budget: "人均 1000-1700 元",
    transport: "高铁到凤凰古城站或吉首东；多点联游建议包车",
    highlights: ["凤凰古城", "芙蓉镇", "矮寨大桥", "德夯苗寨"],
    itinerary: [
      "Day1：凤凰古城白天漫游 + 沱江夜景",
      "Day2：芙蓉镇瀑布夜景 + 土家民俗体验",
      "Day3：矮寨大桥观景台 → 德夯峡谷徒步",
    ],
    foods: ["血粑鸭", "苗家酸汤鱼", "社饭", "腊味火锅"],
    tips: ["古城商业化较明显，住宿先看评价再订", "古城石板路雨天湿滑", "苗寨演出场次多，先确认时间表"],
    tags: ["nature", "culture", "food", "family"],
  },
];

const tagLabelMap = {
  nature: "山水风光",
  culture: "历史人文",
  food: "美食烟火",
  red: "红色旅游",
  family: "亲子休闲",
};

const searchInput = document.querySelector("#searchInput");
const cityList = document.querySelector("#cityList");
const cityDetail = document.querySelector("#cityDetail");
const cityCount = document.querySelector("#cityCount");
const tagFilters = document.querySelector("#tagFilters");

let activeTag = "all";
let keyword = "";
let activeCityId = cityData[0].id;

function getFilteredCities() {
  return cityData.filter((city) => {
    const tagOk = activeTag === "all" ? true : city.tags.includes(activeTag);
    if (!tagOk) {
      return false;
    }

    if (!keyword) {
      return true;
    }

    const haystack = [
      city.name,
      city.subtitle,
      city.intro,
      city.highlights.join(" "),
      city.foods.join(" "),
      city.tags.map((tag) => tagLabelMap[tag] || "").join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword.toLowerCase());
  });
}

function renderCityList() {
  const filtered = getFilteredCities();
  cityCount.textContent = `共 ${filtered.length} 个目的地`;

  if (!filtered.length) {
    cityList.innerHTML = "";
    cityDetail.innerHTML =
      '<div class="empty-state">没有找到匹配结果，请换个关键词或筛选条件。</div>';
    return;
  }

  if (!filtered.some((city) => city.id === activeCityId)) {
    activeCityId = filtered[0].id;
  }

  cityList.innerHTML = filtered
    .map((city) => {
      const activeClass = city.id === activeCityId ? "active" : "";
      return `
        <button type="button" class="city-item ${activeClass}" data-city-id="${city.id}">
          <strong>${city.name}</strong>
          <span>${city.subtitle}</span>
        </button>
      `;
    })
    .join("");

  const activeCity = filtered.find((city) => city.id === activeCityId);
  renderCityDetail(activeCity);
}

function renderCityDetail(city) {
  const tagText = city.tags.map((tag) => tagLabelMap[tag] || tag).join(", ");

  cityDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <h2>${city.name}</h2>
        <p class="detail-desc">${city.intro}</p>
      </div>
      <div class="tag-row">
        ${city.tags
          .map((tag) => `<span class="mini-tag">${tagLabelMap[tag] || tag}</span>`)
          .join("")}
      </div>
    </div>

    <div class="quick-grid">
      <article class="quick-card">
        <h3>最佳季节</h3>
        <p>${city.bestSeason}</p>
      </article>
      <article class="quick-card">
        <h3>建议时长</h3>
        <p>${city.duration}</p>
      </article>
      <article class="quick-card">
        <h3>预算参考</h3>
        <p>${city.budget}</p>
      </article>
      <article class="quick-card">
        <h3>交通方式</h3>
        <p>${city.transport}</p>
      </article>
    </div>

    <div class="section-grid">
      <section class="section-block">
        <h3>必打卡亮点</h3>
        <ul>${city.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="section-block">
        <h3>推荐行程</h3>
        <ul>${city.itinerary.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="section-block">
        <h3>本地必吃</h3>
        <ul>${city.foods.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="section-block">
        <h3>实用提醒</h3>
        <ul>${city.tips.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
  `;

  cityDetail.setAttribute("data-city", city.id);
  cityDetail.setAttribute("data-tags", tagText);
}

tagFilters.addEventListener("click", (event) => {
  const button = event.target.closest(".tag-btn");
  if (!button) {
    return;
  }

  activeTag = button.dataset.tag || "all";
  tagFilters.querySelectorAll(".tag-btn").forEach((node) => {
    node.classList.toggle("active", node === button);
  });
  renderCityList();
});

cityList.addEventListener("click", (event) => {
  const button = event.target.closest(".city-item");
  if (!button) {
    return;
  }

  activeCityId = button.dataset.cityId;
  renderCityList();
});

searchInput.addEventListener("input", (event) => {
  keyword = event.target.value.trim();
  renderCityList();
});

renderCityList();
