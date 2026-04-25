"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const [pendingOptionKey, setPendingOptionKey] = useState<QuestionOption["key"] | null>(null);
  const autoAdvanceRef = useRef<number | null>(null);

  const clearAutoAdvance = () => {
    if (autoAdvanceRef.current) {
      window.clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
  };

  const result = useMemo(() => {
    if (answers.length !== questions.length) {
      return null;
    }
    return calculateResult(answers);
  }, [answers]);

  const currentQuestionId = questions[currentIndex].id;
  const selectedOptionKey = answers.find((item) => item.questionId === currentQuestionId)?.optionKey;

  useEffect(() => () => clearAutoAdvance(), []);

  const handleStart = () => {
    clearAutoAdvance();
    setStage("quiz");
    setCurrentIndex(0);
    setAnswers([]);
    setPendingOptionKey(null);
  };

  const upsertAnswer = (questionId: number, optionKey: QuestionOption["key"]) => {
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((item) => item.questionId === questionId);
      if (existingIndex === -1) {
        return [...prev, { questionId, optionKey }];
      }

      const next = [...prev];
      next[existingIndex] = { questionId, optionKey };
      return next;
    });
  };

  const handlePrev = () => {
    clearAutoAdvance();
    setPendingOptionKey(null);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (!selectedOptionKey) {
      return;
    }

    clearAutoAdvance();
    setPendingOptionKey(null);
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleViewResult = () => {
    if (answers.length !== questions.length) {
      return;
    }

    clearAutoAdvance();
    setPendingOptionKey(null);
    setStage("result");
  };

  const handleSelect = (option: QuestionOption) => {
    clearAutoAdvance();
    upsertAnswer(currentQuestionId, option.key);
    setPendingOptionKey(option.key);

    autoAdvanceRef.current = window.setTimeout(() => {
      setPendingOptionKey(null);

      if (currentIndex === questions.length - 1) {
        setStage("result");
        return;
      }

      setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
    }, 300);
  };

  const handleReset = () => {
    clearAutoAdvance();
    setStage("home");
    setCurrentIndex(0);
    setAnswers([]);
    setPendingOptionKey(null);
  };

  const handleEditAnswers = () => {
    clearAutoAdvance();
    setPendingOptionKey(null);
    setStage("quiz");
    setCurrentIndex(questions.length - 1);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-4 sm:px-5 sm:py-6 md:py-8">
        <header className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">SMTI</div>
            <div className="mt-1 text-sm font-medium text-white/70">历史原型测试</div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55">
            人格代码生成中
          </div>
        </header>

        <div className="flex-1">
          {stage === "home" && <HomeScreen onStart={handleStart} />}
          {stage === "quiz" && (
            <QuizScreen
              currentIndex={currentIndex}
              answers={answers}
              selectedOptionKey={selectedOptionKey}
              pendingOptionKey={pendingOptionKey}
              onSelect={handleSelect}
              onPrev={handlePrev}
              onNext={handleNext}
              onViewResult={handleViewResult}
            />
          )}
          {stage === "result" && result && (
            <ResultScreen
              result={result}
              onEditAnswers={handleEditAnswers}
              onReset={handleReset}
            />
          )}
        </div>

        <footer className="pb-2 pt-6 text-center text-[11px] tracking-[0.18em] text-white/28">
          © 2026 小天鹅 · SMTI
        </footer>
      </div>
    </main>
  );
}
