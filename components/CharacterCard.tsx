import { CharacterPortrait } from "@/components/CharacterPortrait";
import { ResultProfile } from "@/types/smti";

interface CharacterCardProps {
  profile: ResultProfile;
  rawScores: Record<"S" | "M" | "T" | "F" | "A" | "I" | "C" | "V", number>;
}

export function CharacterCard({ profile, rawScores }: CharacterCardProps) {
  const stats = [
    { label: "主导气场", value: Math.max(rawScores.S, rawScores.M) },
    { label: "情绪锋度", value: Math.max(rawScores.T, rawScores.F) },
    { label: "行动烈度", value: Math.max(rawScores.A, rawScores.I) },
    { label: "破防指数", value: Math.max(rawScores.C, rawScores.V) },
  ];
  const peak = Math.max(...stats.map((item) => item.value), 1);

  return (
    <div
      className={`archive-border relative overflow-hidden rounded-[30px] bg-gradient-to-br ${profile.visual.bgGradient} p-5 shadow-neon`}
    >
      <div className="absolute -left-12 top-6 h-28 w-28 rounded-full bg-ember/25 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-neon/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-gold/40 bg-black/25 px-3 py-1 text-[10px] font-semibold tracking-[0.28em] text-gold">
            {profile.code}
          </div>
          <h3 className="mt-4 text-2xl font-black tracking-wide text-white md:text-[32px]">
            {profile.character}
          </h3>
          <p className="mt-2 text-sm font-medium text-white/75">{profile.label}</p>
        </div>
        <div className="animate-float">
          <CharacterPortrait profile={profile} size="lg" />
        </div>
      </div>

      <div className="relative mt-5 rounded-[26px] border border-white/10 bg-black/25 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <CharacterPortrait profile={profile} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-[0.26em] text-white/45">你的历史原型</div>
            <p className="mt-2 text-sm leading-6 text-white/82">{profile.visual.visualLine}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.visual.memeTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/82"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">现代反差道具</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/78">
            {profile.visual.props.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-3 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">人物参数条</div>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-white/65">
                  <span>{stat.label}</span>
                  <span>{Math.round((stat.value / peak) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#f7c35f,#ff4d6d,#54f2c3)]"
                    style={{ width: `${Math.round((stat.value / peak) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
