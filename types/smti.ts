export type DimensionKey = "S" | "M" | "T" | "F" | "A" | "I" | "C" | "V";

export type ScoreMap = Partial<Record<DimensionKey, number>>;

export interface QuestionOption {
  key: "A" | "B" | "C";
  text: string;
  score: ScoreMap;
}

export interface Question {
  id: number;
  title: string;
  options: QuestionOption[];
}

export interface ResultVisual {
  themeColor: string;
  bgGradient: string;
  imagePath?: string;
  portraitKey:
    | "crown"
    | "expansion"
    | "visor"
    | "fan"
    | "blade"
    | "banner"
    | "wave"
    | "hairpin"
    | "abacus"
    | "network"
    | "chess"
    | "sail"
    | "dagger"
    | "brush"
    | "bamboo"
    | "moon";
  props: string[];
  memeTags: string[];
  visualLine: string;
}

export interface ResultProfile {
  code: string;
  character: string;
  label: string;
  punchline: string;
  radarComment: string;
  historicalExplanation: string;
  personality: string;
  jobs: [string, string, string];
  loveProfile: string;
  shareText: string;
  visual: ResultVisual;
}

export type ResultMap = Record<string, ResultProfile>;

export interface AnswerRecord {
  questionId: number;
  optionKey: "A" | "B" | "C";
}

export interface CalculatedResult {
  code: string;
  rawScores: Record<DimensionKey, number>;
  radarData: { dimension: string; value: number; fullMark: number }[];
}
