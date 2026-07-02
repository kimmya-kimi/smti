"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HomeScreen } from "@/components/HomeScreen";
import { PaymentSheet } from "@/components/PaymentSheet";
import { QuizScreen } from "@/components/QuizScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { questions } from "@/data/questions";
import { calculateResult } from "@/utils/calculateResult";
import { AnswerRecord, QuestionOption } from "@/types/smti";

type Stage = "home" | "quiz" | "result";
const PAID_STORAGE_KEY = "smti_paid_unlock";

interface PaymentOrder {
  orderId: string;
  amount: number;
}

export default function Page() {
  const [stage, setStage] = useState<Stage>("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isPaid, setIsPaid] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentOrder, setPaymentOrder] = useState<PaymentOrder | null>(null);
  const [paymentAttempts, setPaymentAttempts] = useState(0);
  const [paymentError, setPaymentError] = useState("");
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

  useEffect(() => {
    const paid = window.localStorage.getItem(PAID_STORAGE_KEY);
    setIsPaid(paid === "1");
    return () => clearAutoAdvance();
  }, []);

  const handleStart = () => {
    clearAutoAdvance();
    setStage("quiz");
    setCurrentIndex(0);
    setAnswers([]);
    setIsPaid(false);
    window.localStorage.removeItem(PAID_STORAGE_KEY);
    setPaymentOrder(null);
    setPaymentAttempts(0);
    setPaymentOpen(false);
    setPaymentError("");
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
    setIsPaid(false);
    window.localStorage.removeItem(PAID_STORAGE_KEY);
    setPaymentOrder(null);
    setPaymentAttempts(0);
    setPaymentOpen(false);
    setPaymentError("");
    setPendingOptionKey(null);
  };

  const handleEditAnswers = () => {
    clearAutoAdvance();
    setPendingOptionKey(null);
    setStage("quiz");
    setCurrentIndex(questions.length - 1);
  };

  const handleUnlock = async () => {
    setIsUnlocking(true);
    setPaymentError("");

    try {
      const response = await fetch("/api/payment/create", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("create failed");
      }

      const data = (await response.json()) as PaymentOrder & { currency: string; productName: string; createdAt: string };
      setPaymentOrder({ orderId: data.orderId, amount: data.amount });
      setPaymentAttempts(0);
      setPaymentOpen(true);
    } catch {
      setPaymentError("支付接口暂时没有拉起来，请稍后再试。");
    } finally {
      setIsUnlocking(false);
    }
  };

  const handleClosePayment = () => {
    setPaymentOpen(false);
    setPaymentAttempts(0);
    setPaymentError("");
  };

  const handleConfirmPayment = async () => {
    if (!paymentOrder) {
      return;
    }

    if (paymentAttempts === 0) {
      setPaymentAttempts(1);
      setPaymentError("系统核验超时，暂未确认到账。若你已经完成付款，请回到二维码页，再点一次确认支付。");
      return;
    }

    setIsUnlocking(true);
    setPaymentError("");

    try {
      const response = await fetch("/api/payment/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: paymentOrder.orderId }),
      });

      if (!response.ok) {
        throw new Error("confirm failed");
      }

      const data = (await response.json()) as { paid: boolean };

      if (data.paid) {
        setIsPaid(true);
        window.localStorage.setItem(PAID_STORAGE_KEY, "1");
        setPaymentAttempts(0);
        setPaymentOpen(false);
      }
    } catch {
      setPaymentError("支付确认失败，请再试一次。");
    } finally {
      setIsUnlocking(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-4 sm:px-5 sm:py-6 md:py-8">
        <header className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">SMTI</div>
            <div className="mt-1 text-[13px] font-medium text-white/70 sm:text-sm">历史原型测试</div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/55 sm:text-[11px]">
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
              isPaid={isPaid}
              isUnlocking={isUnlocking}
              onUnlock={handleUnlock}
              onEditAnswers={handleEditAnswers}
              onReset={handleReset}
            />
          )}
        </div>

        <PaymentSheet
          open={paymentOpen}
          amountText="¥19.98"
          orderId={paymentOrder?.orderId ?? ""}
          loading={isUnlocking}
          error={paymentError}
          onClose={handleClosePayment}
          onConfirm={handleConfirmPayment}
        />

        <footer className="pb-2 pt-6 text-center text-[11px] tracking-[0.18em] text-white/28">
          © 2026 小天鹅 · SMTI
        </footer>
      </div>
    </main>
  );
}
