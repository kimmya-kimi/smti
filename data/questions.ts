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
];
