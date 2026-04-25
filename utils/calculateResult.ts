import { questions } from "@/data/questions";
import { AnswerRecord, CalculatedResult, DimensionKey } from "@/types/smti";

const dimensionOrder: DimensionKey[] = ["S", "M", "T", "F", "A", "I", "C", "V"];

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

  const radarData = [
    { dimension: "控场指数", score: Math.max(rawScores.S, rawScores.M) },
    { dimension: "上头指数", score: Math.max(rawScores.T, rawScores.F) },
    { dimension: "出手指数", score: Math.max(rawScores.A, rawScores.I) },
    { dimension: "破防指数", score: Math.max(rawScores.C, rawScores.V) },
  ].map((item) => {
    const normalized = Math.round((item.score / highestScore) * 100);
    return {
      dimension: item.dimension,
      value: Math.max(normalized, 10),
      fullMark: 100,
    };
  });

  return { code, rawScores, radarData };
}
