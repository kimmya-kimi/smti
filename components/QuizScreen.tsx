import { questions } from "@/data/questions";
import { AnswerRecord, QuestionOption } from "@/types/smti";
import { ProgressBar } from "@/components/ProgressBar";

interface QuizScreenProps {
  currentIndex: number;
  answers: AnswerRecord[];
  onSelect: (option: QuestionOption) => void;
}

export function QuizScreen({ currentIndex, answers, onSelect }: QuizScreenProps) {
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <section className="archive-border animate-riseIn rounded-[32px] bg-white/[0.04] p-5 shadow-card backdrop-blur md:p-7">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            乱世情景加载中
          </div>
          <div className="mt-2 text-sm text-white/55">
            第 {currentIndex + 1} / {questions.length} 题
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/65">
          已作答 {answers.length} 题
        </div>
      </div>

      <ProgressBar value={progress} />

      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
        <h2 className="text-2xl font-black leading-tight text-white md:text-[30px]">
          {currentQuestion.title}
        </h2>

        <div className="mt-6 space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => onSelect(option)}
              className="group flex w-full items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition duration-200 hover:scale-[1.01] hover:border-gold/35 hover:bg-white/[0.08] active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-sm font-black text-gold transition group-hover:bg-gold/20">
                {option.key}
              </div>
              <div className="pt-1 text-base font-medium leading-7 text-white/88">
                {option.text}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
