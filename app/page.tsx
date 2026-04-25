"use client";

import { useMemo, useState } from "react";
import { HomeScreen } from "@/components/HomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { questions } from "@/data/questions";
import { calculateResult } from "@/utils/calculateResult";
import { AnswerRecord, QuestionOption } from "@/types/smti";

type Stage = "home" | "quiz" | "result";

export default function Page() {
  const [stage, setStage] = useState<Stage>("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const result = useMemo(() => {
    if (answers.length !== questions.length) {
      return null;
    }
    return calculateResult(answers);
  }, [answers]);

  const handleStart = () => {
    setStage("quiz");
    setCurrentIndex(0);
    setAnswers([]);
  };

  const handleSelect = (option: QuestionOption) => {
    const nextAnswers = [
      ...answers,
      { questionId: questions[currentIndex].id, optionKey: option.key },
    ];

    setAnswers(nextAnswers);

    if (currentIndex === questions.length - 1) {
      setStage("result");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setStage("home");
    setCurrentIndex(0);
    setAnswers([]);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-4 sm:px-5 sm:py-6 md:py-8">
        <header className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">SMTI</div>
            <div className="mt-1 text-sm font-medium text-white/70">乱世人格测试</div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55">
            历史原型档案生成中
          </div>
        </header>

        <div className="flex-1">
          {stage === "home" && <HomeScreen onStart={handleStart} />}
          {stage === "quiz" && (
            <QuizScreen currentIndex={currentIndex} answers={answers} onSelect={handleSelect} />
          )}
          {stage === "result" && result && <ResultScreen result={result} onReset={handleReset} />}
        </div>

        <footer className="pb-2 pt-6 text-center text-[11px] tracking-[0.18em] text-white/28">
          © 2026 小天鹅 · SMTI乱世人格测试
        </footer>
      </div>
    </main>
  );
}
