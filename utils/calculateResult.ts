import { questions } from "@/data/questions";
import { AnswerRecord, CalculatedResult, DimensionKey } from "@/types/smti";

const dimensionOrder: DimensionKey[] = ["S", "M", "T", "F", "A", "I", "C", "V"];

const dimensionLabelMap: Record<DimensionKey, string> = {
  S: "S 主导值",
  M: "M 承压值",
  T: "T 铁律值",
  F: "F 风骨值",
  A: "A 进攻值",
  I: "I 隐匿值",
  C: "C 契约值",
  V: "V 共生值",
};

export function calculateResult(answerRecords: AnswerRecord[]): CalculatedResult {
  const rawScores: Record<DimensionKey, number> = {
    S: 0,
    M: 0,
    T: 0,
    F: 0,
    A: 0,
    I: 0,
    C: 0,
    V: 0,
  };

  answerRecords.forEach((answer) => {
    const question = questions.find((item) => item.id === answer.questionId);
    const option = question?.options.find((item) => item.key === answer.optionKey);

    if (!option) {
      return;
    }

    dimensionOrder.forEach((key) => {
      rawScores[key] += option.score[key] ?? 0;
    });
  });

  const code =
    `${rawScores.S >= rawScores.M ? "S" : "M"}` +
    `${rawScores.T >= rawScores.F ? "T" : "F"}` +
    `${rawScores.A >= rawScores.I ? "A" : "I"}` +
    `${rawScores.C >= rawScores.V ? "C" : "V"}`;

  const highestScore = Math.max(...Object.values(rawScores), 1);

  const radarData = dimensionOrder.map((key) => {
    const normalized = Math.round((rawScores[key] / highestScore) * 100);
    return {
      dimension: dimensionLabelMap[key],
      value: Math.max(normalized, 10),
      fullMark: 100,
    };
  });

  return { code, rawScores, radarData };
}
