import { Question } from "@/types/smti";

export const questions: Question[] = [
  {
    id: 1,
    title: "开会40分钟还没讲重点，你在想：",
    options: [
      { key: "A", text: "这流程必须改革", score: { S: 2, T: 2, A: 1, C: 1 } },
      { key: "B", text: "谁在装懂我已看透", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "这段能写成段子", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 2,
    title: "老板说“明天就要结果”，你会：",
    options: [
      { key: "A", text: "先拆任务救火", score: { S: 2, T: 2, A: 1, C: 1 } },
      { key: "B", text: "先看这锅是谁的", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "边崩溃边输出", score: { M: 1, F: 2, A: 1, V: 1 } },
    ],
  },
  {
    id: 3,
    title: "同事突然甩锅给你，你第一反应是：",
    options: [
      { key: "A", text: "整证据，讲清楚", score: { S: 2, T: 2, A: 1, C: 2 } },
      { key: "B", text: "先别急，看后台", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "发条高级阴阳文", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 4,
    title: "朋友拉你创业，你会先问：",
    options: [
      { key: "A", text: "模式和现金流呢", score: { S: 1, T: 2, I: 1, C: 2 } },
      { key: "B", text: "谁出钱谁掌权", score: { S: 2, T: 1, A: 1, C: 2 } },
      { key: "C", text: "故事够不够热血", score: { M: 1, F: 2, A: 1, V: 2 } },
    ],
  },
  {
    id: 5,
    title: "群里有人阴阳怪气，你会：",
    options: [
      { key: "A", text: "直接把话说明白", score: { S: 2, T: 1, A: 2, C: 1 } },
      { key: "B", text: "截图，观察局势", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "开玩笑顺便反击", score: { M: 1, F: 2, A: 1, V: 1 } },
    ],
  },
  {
    id: 6,
    title: "你突然成了团队负责人，第一件事是：",
    options: [
      { key: "A", text: "定规则分责任", score: { S: 2, T: 2, A: 1, C: 2 } },
      { key: "B", text: "看谁能打谁混", score: { M: 2, T: 2, I: 1, C: 1 } },
      { key: "C", text: "先把气氛搞起来", score: { S: 1, F: 2, A: 1, V: 2 } },
    ],
  },
  {
    id: 7,
    title: "团队有人摆烂，你会：",
    options: [
      { key: "A", text: "明确标准和后果", score: { S: 2, T: 2, A: 1, C: 2 } },
      { key: "B", text: "看他背后靠谁", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "劝两句，不行算了", score: { M: 1, F: 1, I: 1, V: 2 } },
    ],
  },
  {
    id: 8,
    title: "两个核心成员互撕，你会：",
    options: [
      { key: "A", text: "先把问题拆开", score: { S: 1, T: 2, I: 1, C: 1 } },
      { key: "B", text: "判断谁更有价值", score: { S: 2, T: 2, A: 1, C: 1 } },
      { key: "C", text: "讲个笑话降温", score: { M: 1, F: 2, I: 1, V: 2 } },
    ],
  },
  {
    id: 9,
    title: "你被说“太强势”，你心里想：",
    options: [
      { key: "A", text: "我只是想做成事", score: { S: 2, T: 2, A: 1, C: 1 } },
      { key: "B", text: "强者本来会被议论", score: { S: 2, F: 1, A: 2, C: 1 } },
      { key: "C", text: "行，我写篇小作文", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 10,
    title: "朋友emo找你聊天，你会：",
    options: [
      { key: "A", text: "给他列计划", score: { S: 1, T: 2, A: 1, C: 1 } },
      { key: "B", text: "分析问题根源", score: { M: 1, T: 2, I: 1, C: 1 } },
      { key: "C", text: "陪他边吃边骂", score: { M: 2, F: 2, I: 1, V: 2 } },
    ],
  },
  {
    id: 11,
    title: "朋友突然暴富，你第一反应是：",
    options: [
      { key: "A", text: "他路径做对了什么", score: { M: 1, T: 2, I: 1, C: 1 } },
      { key: "B", text: "他背后资源是谁", score: { M: 2, T: 1, I: 2, V: 1 } },
      { key: "C", text: "我要写篇感悟", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 12,
    title: "暧昧对象忽冷忽热，你会：",
    options: [
      { key: "A", text: "直接问清楚", score: { S: 1, T: 1, A: 2, C: 1 } },
      { key: "B", text: "观察对方动机", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "发疯但要体面", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 13,
    title: "风口来了但风险很大，你会：",
    options: [
      { key: "A", text: "先算长期价值", score: { S: 1, T: 2, I: 1, C: 1 } },
      { key: "B", text: "先看谁在操盘", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "先做内容抢声量", score: { S: 1, F: 1, A: 2, V: 1 } },
    ],
  },
  {
    id: 14,
    title: "如果突然有100万，你更想：",
    options: [
      { key: "A", text: "投进长期系统", score: { S: 1, T: 2, I: 1, C: 1 } },
      { key: "B", text: "撬动更大资源", score: { S: 2, T: 1, A: 2, V: 1 } },
      { key: "C", text: "去旅行和创作", score: { M: 1, F: 2, I: 1, V: 2 } },
    ],
  },
  {
    id: 15,
    title: "长期不被看见，你会：",
    options: [
      { key: "A", text: "继续积累等机会", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "B", text: "换个地方找识货人", score: { S: 1, T: 1, A: 2, V: 1 } },
      { key: "C", text: "把孤独写成作品", score: { M: 1, F: 2, I: 2, V: 1 } },
    ],
  },
  {
    id: 16,
    title: "被人抢功劳，你会：",
    options: [
      { key: "A", text: "拿证据争回来", score: { S: 2, T: 2, A: 2, C: 2 } },
      { key: "B", text: "记下这笔账", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "表面笑，内心写诗", score: { M: 1, F: 2, I: 1, V: 1 } },
    ],
  },
  {
    id: 17,
    title: "如果穿越成宫里的小太监，开局没人理你，你会：",
    options: [
      { key: "A", text: "先摸清宫规人脉", score: { M: 1, T: 2, I: 2, C: 1 } },
      { key: "B", text: "记住每个人弱点", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "C", text: "靠会说话混熟脸", score: { M: 1, F: 1, A: 1, V: 2 } },
    ],
  },
  {
    id: 18,
    title: "如果穿越成青楼歌伎，你会：",
    options: [
      { key: "A", text: "分清谁有权有钱", score: { M: 2, T: 1, I: 2, C: 1 } },
      { key: "B", text: "用才情让人高看", score: { S: 1, F: 2, A: 1, V: 1 } },
      { key: "C", text: "暗中攒资源脱身", score: { M: 2, T: 2, I: 2, C: 1 } },
    ],
  },
  {
    id: 19,
    title: "如果穿越进乱世，你第一选择是：",
    options: [
      { key: "A", text: "找靠谱队伍跟对人", score: { M: 1, T: 1, I: 1, V: 2 } },
      { key: "B", text: "冲到台前搏一把", score: { S: 2, F: 1, A: 2, C: 1 } },
      { key: "C", text: "观察谁是真英雄", score: { M: 2, T: 1, I: 2, V: 1 } },
    ],
  },
  {
    id: 20,
    title: "如果人生是一局棋，你更像：",
    options: [
      { key: "A", text: "重新制定规则的人", score: { S: 2, T: 2, A: 1, C: 2 } },
      { key: "B", text: "暗中布局的人", score: { M: 2, T: 2, I: 2, C: 1 } },
      { key: "C", text: "把棋局写成诗的人", score: { M: 1, F: 2, I: 1, V: 2 } },
    ],
  },
  {
    id: 21,
    title: "你突然中了 500 万，但到账短信只有你一个人看见。你第一反应是？",
    options: [
      { key: "A", text: "先装作什么都没发生，连呼吸都不能太富贵", score: { I: 1, T: 1 } },
      { key: "B", text: "立刻开始规划钱怎么生钱，穷人的仇我先不报了", score: { T: 1, C: 1 } },
      { key: "C", text: "先请最亲近的人吃顿好的，人生不能只剩计算器", score: { V: 1, F: 1 } },
    ],
  },
  {
    id: 22,
    title: "你手机只剩 1% 电，还要靠导航走回家。你会？",
    options: [
      { key: "A", text: "立刻关掉所有后台，进入省电皇帝模式", score: { T: 1, C: 1 } },
      { key: "B", text: "先记住大概路线，没电了也要靠脑子活下去", score: { I: 1, M: 1 } },
      { key: "C", text: "继续导航，反正人生最精彩的部分都在赌", score: { A: 1, F: 1 } },
    ],
  },
  {
    id: 23,
    title: "外卖被送错，你打开一看，是别人点的豪华套餐。你会？",
    options: [
      { key: "A", text: "立刻联系客服，原则不能被一份炸鸡击穿", score: { C: 1, T: 1 } },
      { key: "B", text: "先看看订单信息，判断怎么处理最省事", score: { T: 1, I: 1 } },
      { key: "C", text: "内心挣扎三秒：这是不是命运给我的加餐？", score: { V: 1, F: 1 } },
    ],
  },
  {
    id: 24,
    title: "你被莫名其妙拉进一个陌生亲戚群，里面已经开始发“家族复兴计划”。你会？",
    options: [
      { key: "A", text: "先潜水观察，看看谁是群里的精神族长", score: { I: 1, T: 1 } },
      { key: "B", text: "直接改备注、开免打扰，别影响朕的现实生活", score: { C: 1, S: 1 } },
      { key: "C", text: "竟然有点想参与，万一家族真要崛起呢", score: { V: 1, A: 1 } },
    ],
  },
  {
    id: 25,
    title: "你梦到自己被秦始皇、刘邦、武则天一起面试。他们问你凭什么加入乱世高端局。你会？",
    options: [
      { key: "A", text: "展示执行力：给我一个目标，我能拆成十个步骤", score: { T: 1, A: 1 } },
      { key: "B", text: "展示生存力：我不一定最强，但我一定活到决赛圈", score: { M: 1, I: 1 } },
      { key: "C", text: "展示号召力：我能让一群人觉得跟着我有饭吃", score: { S: 1, V: 1 } },
    ],
  },
  {
    id: 26,
    title: "高铁上，旁边的人一直外放短视频，音量大到像在给全车开发布会。你会？",
    options: [
      { key: "A", text: "直接提醒：耳机不是文物，可以使用", score: { S: 1, C: 1 } },
      { key: "B", text: "忍一会儿，实在不行再换座或找乘务员", score: { M: 1, T: 1 } },
      { key: "C", text: "戴上耳机假装隔绝世界，但内心已经写好小作文", score: { I: 1, F: 1 } },
    ],
  },
  {
    id: 27,
    title: "你被迫经营一家快倒闭的古代客栈，账上只剩三两银子。你第一步是？",
    options: [
      { key: "A", text: "先盘账、砍成本、改菜单，活下来再谈理想", score: { T: 1, C: 1 } },
      { key: "B", text: "搞一个“江湖英雄半价夜”，先把人气炒起来", score: { A: 1, S: 1 } },
      { key: "C", text: "把客栈改成情报中转站，来喝茶的人都带点秘密", score: { I: 1, S: 1 } },
    ],
  },
  {
    id: 28,
    title: "你突然获得一天读心术，能听见所有人心里话。你会？",
    options: [
      { key: "A", text: "先测试规则，确认能不能稳定使用", score: { T: 1, I: 1 } },
      { key: "B", text: "立刻去见关键人物，信息差就是生产力", score: { S: 1, A: 1 } },
      { key: "C", text: "听了三个人就想关闭，人类内心太吵了", score: { F: 1, M: 1 } },
    ],
  },
  {
    id: 29,
    title: "你发了一条略带情绪的朋友圈，结果领导第一个点赞。你会？",
    options: [
      { key: "A", text: "立刻设置分组，从此朋友圈进入战国时代", score: { C: 1, I: 1 } },
      { key: "B", text: "迅速补一条正能量内容，把局面圆回来", score: { T: 1, M: 1 } },
      { key: "C", text: "不删，谁还没有一点精神波动", score: { F: 1, A: 1 } },
    ],
  },
  {
    id: 30,
    title: "路边算命先生看你一眼，说：“你以后不是一般人。”你会？",
    options: [
      { key: "A", text: "表面笑笑，心里想这话我也觉得有道理", score: { S: 1, F: 1 } },
      { key: "B", text: "问他依据是什么，玄学也要讲证据链", score: { T: 1, C: 1 } },
      { key: "C", text: "开始反思：难道我现在的苦都是伏笔？", score: { M: 1, V: 1 } },
    ],
  },
  {
    id: 31,
    title: "同学会现场，大家都在暗中比较工作、对象、收入。你会？",
    options: [
      { key: "A", text: "少说多看，信息量比饭菜还大", score: { I: 1, T: 1 } },
      { key: "B", text: "不卑不亢，没必要为别人的赛道自卑", score: { C: 1, S: 1 } },
      { key: "C", text: "表面哈哈哈，回家后默默开始升级自己", score: { M: 1, A: 1 } },
    ],
  },
  {
    id: 32,
    title: "你穿成古代祭天仪式上被选中的“祥瑞”，所有人都盯着你等奇迹。你会？",
    options: [
      { key: "A", text: "先别露怯，祥瑞也要有职业素养", score: { M: 1, S: 1 } },
      { key: "B", text: "顺势制造神秘感，让大家觉得我真有点东西", score: { S: 1, I: 1 } },
      { key: "C", text: "找机会跑路，被神化通常没什么好下场", score: { T: 1, C: 1 } },
    ],
  },
  {
    id: 33,
    title: "你被派去给皇帝的猫当铲屎官，听说这猫比大臣还受宠。你会？",
    options: [
      { key: "A", text: "认真伺候，猫开心了，皇帝也可能开心", score: { M: 1, T: 1 } },
      { key: "B", text: "借猫接近皇帝，铲屎也能铲出上升通道", score: { S: 1, A: 1 } },
      { key: "C", text: "和猫建立感情，先拿下后宫真正的隐藏 Boss", score: { V: 1, I: 1 } },
    ],
  },
];
