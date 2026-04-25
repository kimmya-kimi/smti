import { questions } from "@/data/questions";
import { AnswerRecord, QuestionOption } from "@/types/smti";
import { ProgressBar } from "@/components/ProgressBar";

interface QuizScreenProps {
  currentIndex: number;
  answers: AnswerRecord[];
  selectedOptionKey?: QuestionOption["key"];
  pendingOptionKey?: QuestionOption["key"] | null;
  onSelect: (option: QuestionOption) => void;
  onPrev: () => void;
  onNext: () => void;
  onViewResult: () => void;
}

export function QuizScreen({
  currentIndex,
  answers,
  selectedOptionKey,
  pendingOptionKey,
  onSelect,
  onPrev,
  onNext,
  onViewResult,
}: QuizScreenProps) {
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const answeredCount = answers.length;
  const hasCurrentAnswer = Boolean(selectedOptionKey);
  const isLastQuestion = currentIndex === questions.length - 1;
  const isComplete = answeredCount === questions.length;

  return (
    <section className="archive-border animate-riseIn rounded-[32px] bg-white/[0.04] p-5 shadow-card backdrop-blur md:p-7">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-xs">
            情景题加载中
          </div>
          <div className="mt-2 text-[13px] text-white/55 sm:text-sm">
            第 {currentIndex + 1} / {questions.length} 题
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium text-white/65 sm:text-xs">
          进度 {Math.round(progress)}%
        </div>
      </div>

      <ProgressBar value={progress} />

      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
        <div className="mb-4 text-[11px] font-medium tracking-[0.18em] text-white/42 sm:text-xs">
          已完成 {answeredCount} / {questions.length}
        </div>
        <h2 className="text-xl font-black leading-tight text-white sm:text-2xl md:text-[28px]">
          {currentQuestion.title}
        </h2>

        <div className="mt-6 space-y-3 pb-24">
          {currentQuestion.options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => onSelect(option)}
              className={`group flex w-full items-start gap-4 rounded-[22px] border px-4 py-4 text-left transition duration-200 hover:scale-[1.01] active:scale-[0.98] ${
                selectedOptionKey === option.key
                  ? "border-gold/45 bg-gold/12 shadow-neon"
                  : "border-white/10 bg-white/[0.04] hover:border-gold/35 hover:bg-white/[0.08]"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-sm font-black text-gold transition ${
                  selectedOptionKey === option.key || pendingOptionKey === option.key
                    ? "border-gold/45 bg-gold/20"
                    : "border-gold/25 bg-gold/10 group-hover:bg-gold/20"
                }`}
              >
                {option.key}
              </div>
              <div className="pt-1 text-[15px] font-medium leading-6 text-white/88 sm:text-base sm:leading-7">
                {option.text}
              </div>
            </button>
          ))}
        </div>

        <div className="sticky bottom-0 mt-6 grid gap-3 rounded-[22px] border border-white/8 bg-black/55 p-3 backdrop-blur sm:grid-cols-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="rounded-2xl border border-white/12 bg-white/6 px-4 py-4 text-[13px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-35 sm:text-sm"
          >
            上一题
          </button>
          {!isLastQuestion ? (
            <button
              type="button"
              onClick={onNext}
              disabled={!hasCurrentAnswer}
              className="rounded-2xl border border-gold/35 bg-gold/14 px-4 py-4 text-[13px] font-semibold text-gold transition disabled:cursor-not-allowed disabled:opacity-35 sm:text-sm"
            >
              下一题
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}
          <button
            type="button"
            onClick={onViewResult}
            disabled={!isComplete}
            className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-4 text-[13px] font-semibold text-emerald-200 transition disabled:cursor-not-allowed disabled:opacity-35 sm:text-sm"
          >
            查看结果
          </button>
        </div>
      </div>
    </section>
  );
}
