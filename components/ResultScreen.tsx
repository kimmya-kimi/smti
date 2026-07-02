import { results } from "@/data/results";
import { CalculatedResult } from "@/types/smti";
import { CharacterCard } from "@/components/CharacterCard";
import { CharacterPortrait } from "@/components/CharacterPortrait";
import { JobList } from "@/components/JobList";
import { RadarPanel } from "@/components/RadarPanel";
import { ResultSection } from "@/components/ResultSection";
import { ShareCaptureCard } from "@/components/ShareCaptureCard";
import { ShareBox } from "@/components/ShareBox";

interface ResultScreenProps {
  result: CalculatedResult;
  isPaid: boolean;
  isUnlocking: boolean;
  onUnlock: () => void;
  onEditAnswers: () => void;
  onReset: () => void;
}

export function ResultScreen({ result, isPaid, isUnlocking, onUnlock, onEditAnswers, onReset }: ResultScreenProps) {
  const profile = results[result.code];
  const lockedSectionTitles = [
    "分享我的 SMTI",
    "你的真实人格底色",
    "推荐工种",
    "你的恋爱画像",
    "把结果发给会破防的人",
  ];

  const renderLockedPreview = (title: string) => {
    if (title === "分享我的 SMTI") {
      return (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-4">
            <div className="blur-[6px]">
              <ShareCaptureCard profile={profile} result={result} />
            </div>
          </div>
          <div className="text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      );
    }

    if (title === "你的真实人格底色") {
      return (
        <div className="space-y-4">
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-16 rounded-full bg-gold/12" />
                <div className="h-5 w-20 rounded-full bg-white/10" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-white/8" />
                <div className="h-3 w-11/12 rounded-full bg-white/8" />
                <div className="h-3 w-4/5 rounded-full bg-white/8" />
              </div>
              <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="mt-3 space-y-3">
                  <div className="h-3 w-full rounded-full bg-white/8" />
                  <div className="h-3 w-5/6 rounded-full bg-white/8" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      );
    }

    if (title === "推荐工种") {
      return (
        <div className="space-y-4">
          <div className="grid gap-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-black/20 px-4 py-4"
              >
                <div className="h-5 w-8 rounded-full bg-white/10" />
                <div className="h-4 flex-1 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
          <div className="text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      );
    }

    if (title === "你的恋爱画像") {
      return (
        <div className="space-y-4">
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-24 rounded-full bg-white/10" />
                <div className="h-8 w-20 rounded-full bg-white/8" />
                <div className="h-8 w-28 rounded-full bg-white/8" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-white/8" />
                <div className="h-3 w-10/12 rounded-full bg-white/8" />
                <div className="h-3 w-4/5 rounded-full bg-white/8" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                  <div className="h-3 w-16 rounded-full bg-white/10" />
                  <div className="mt-3 h-3 w-full rounded-full bg-white/8" />
                  <div className="mt-2 h-3 w-3/4 rounded-full bg-white/8" />
                </div>
                <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                  <div className="h-3 w-16 rounded-full bg-white/10" />
                  <div className="mt-3 h-3 w-full rounded-full bg-white/8" />
                  <div className="mt-2 h-3 w-4/5 rounded-full bg-white/8" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      );
    }

    if (title === "把结果发给会破防的人") {
      return (
        <div className="space-y-4">
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="space-y-3">
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="h-3 w-full rounded-full bg-white/8" />
              <div className="h-3 w-11/12 rounded-full bg-white/8" />
              <div className="h-3 w-4/5 rounded-full bg-white/8" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-14 rounded-2xl border border-white/10 bg-black/20" />
            ))}
          </div>
          <div className="text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      );
    }

    return (
      <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
        <div className="space-y-3">
          <div className="h-3 w-24 rounded-full bg-white/10" />
          <div className="h-3 w-full rounded-full bg-white/8" />
          <div className="h-3 w-11/12 rounded-full bg-white/8" />
          <div className="h-3 w-5/6 rounded-full bg-white/8" />
          <div className="h-3 w-4/5 rounded-full bg-white/8" />
          <div className="pt-1 text-[12px] tracking-[0.18em] text-gold/78">解锁后查看</div>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-5 md:space-y-6">
      <div className="animate-riseIn">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-xs">
          你的 SMTI 档案已生成
        </div>
        {isPaid ? (
          <CharacterCard profile={profile} rawScores={result.rawScores} />
        ) : (
          <div
            className={`archive-border relative overflow-hidden rounded-[30px] bg-gradient-to-br ${profile.visual.bgGradient} p-5 shadow-card backdrop-blur`}
          >
            <div className="absolute -left-12 top-6 h-28 w-28 rounded-full bg-ember/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-neon/20 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center rounded-full border border-gold/40 bg-black/25 px-3 py-1 text-[9px] font-semibold tracking-[0.28em] text-gold sm:text-[10px]">
                  {profile.code}
                </div>
                <div className="mt-4 text-[28px] font-black tracking-tight text-white sm:text-[30px]">
                  {profile.character}
                </div>
                <div className="mt-3 text-base text-white/80 sm:text-lg">{profile.punchline}</div>
              </div>
              <div className="shrink-0">
                <CharacterPortrait profile={profile} size="lg" />
              </div>
            </div>
          </div>
        )}
      </div>

      {isPaid ? (
        <>
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
        </>
      ) : (
        <>
          <ResultSection title={`为什么你是${profile.character}？`}>
            <p>{profile.historicalExplanation}</p>
          </ResultSection>

          <ResultSection title="你的完整历史人格尚未解锁">
            <div className="space-y-4">
              <p className="text-[15px] leading-7 text-white/82">
                你已经拿到结果，但更深一层的解释还没打开。
              </p>
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 text-[14px] leading-7 text-white/72">
                免费部分只展示了你的表层人格结构
              </div>
              <button
                type="button"
                onClick={onUnlock}
                disabled={isUnlocking}
                className="w-full rounded-2xl border border-gold/40 bg-gold/15 px-5 py-4 text-[13px] font-semibold text-gold transition duration-200 hover:scale-[1.01] hover:bg-gold/20 active:scale-[0.98] sm:text-sm"
              >
                {isUnlocking ? "正在拉起支付..." : "解锁完整报告 ¥19.98"}
              </button>
            </div>
          </ResultSection>

          <ResultSection title="你的生存参数">
            <div className="relative">
              <RadarPanel data={result.radarData} blurred />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-gold/25 bg-black/70 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-gold">
                  简版预览
                </div>
              </div>
            </div>
          </ResultSection>

          {lockedSectionTitles.map((title) => (
            <ResultSection key={title} title={title}>
              {renderLockedPreview(title)}
            </ResultSection>
          ))}
        </>
      )}

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
