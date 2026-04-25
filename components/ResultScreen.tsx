import { results } from "@/data/results";
import { CalculatedResult } from "@/types/smti";
import { CharacterCard } from "@/components/CharacterCard";
import { JobList } from "@/components/JobList";
import { RadarPanel } from "@/components/RadarPanel";
import { ResultSection } from "@/components/ResultSection";
import { ShareCaptureCard } from "@/components/ShareCaptureCard";
import { ShareBox } from "@/components/ShareBox";

interface ResultScreenProps {
  result: CalculatedResult;
  onEditAnswers: () => void;
  onReset: () => void;
}

export function ResultScreen({ result, onEditAnswers, onReset }: ResultScreenProps) {
  const profile = results[result.code];

  return (
    <section className="space-y-5 md:space-y-6">
      <div className="animate-riseIn">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          你的 SMTI 档案已生成
        </div>
        <CharacterCard profile={profile} rawScores={result.rawScores} />
        <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-card">
          <div className="text-3xl font-black tracking-tight text-white">
            {profile.code} {profile.character}
          </div>
          <div className="mt-2 text-base font-semibold text-gold">{profile.label}</div>
          <div className="mt-3 text-lg text-white/80">{profile.punchline}</div>
        </div>
      </div>

      <ResultSection title="你的生存参数">
        <RadarPanel data={result.radarData} />
        <p className="mt-4">{profile.radarComment}</p>
      </ResultSection>

      <ResultSection title="分享我的 SMTI">
        <ShareCaptureCard profile={profile} result={result} />
      </ResultSection>

      <ResultSection title={`为什么你是${profile.character}？`}>
        <p>{profile.historicalExplanation}</p>
      </ResultSection>

      <ResultSection title="你的真实人格底色">
        <p>{profile.personality}</p>
      </ResultSection>

      <ResultSection title="推荐工种">
        <JobList jobs={profile.jobs} />
      </ResultSection>

      <ResultSection title="你的恋爱画像">
        <p>{profile.loveProfile}</p>
      </ResultSection>

      <ResultSection title="把结果发给会破防的人">
        <ShareBox shareText={profile.shareText} onEditAnswers={onEditAnswers} onReset={onReset} />
      </ResultSection>

      <section className="archive-border animate-riseIn rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-5 shadow-card backdrop-blur md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold tracking-wide text-white md:text-xl">作者述说</h2>
          <div className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-gold/80">
            小天鹅
          </div>
        </div>

        <div className="rounded-[24px] border border-white/8 bg-black/20 px-4 py-5 md:px-5">
          <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-white/38">命运档案尾页</div>
          <div className="space-y-4 text-sm leading-8 text-white/78 md:text-[15px]">
            <p>
              我一直觉得，人格测试最有趣的地方，不是把人关进某个标签里，而是让你突然看见自己身上某种熟悉又陌生的力量。
            </p>
            <p>
              你可能不是秦始皇，也不是刘邦、项羽、苏轼、李清照。
              <br />
              但你一定在某些时刻像他们。
            </p>
            <p>
              有人在混乱里想建立规则，
              <br />
              有人在委屈里偷偷升级，
              <br />
              有人靠情义连接世界，
              <br />
              也有人宁愿退场，也不愿给荒谬供电。
            </p>
            <p>
              SMTI不是要告诉你“你只能成为谁”，
              <br />
              而是想问你：
            </p>
            <p className="text-base font-medium leading-9 text-white md:text-lg">
              如果人生真的像一场乱世，
              <br />
              你会怎么活？
              <br />
              你会怎么赢？
              <br />
              你又会怎样保住自己？
            </p>
            <p>
              愿你看完这份 SMTI 档案之后，
              <br />
              不是被命运定义，
              <br />
              而是更想亲手改写它。
            </p>
            <p className="pt-2 text-right font-medium text-gold/85">—— 小天鹅</p>
          </div>
        </div>
      </section>
    </section>
  );
}
