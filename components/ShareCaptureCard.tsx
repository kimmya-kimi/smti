"use client";

import { useState } from "react";
import { CalculatedResult, ResultProfile } from "@/types/smti";
import { CharacterPortrait } from "@/components/CharacterPortrait";

interface ShareCaptureCardProps {
  profile: ResultProfile;
  result: CalculatedResult;
}

export function ShareCaptureCard({ profile, result }: ShareCaptureCardProps) {
  const [hintVisible, setHintVisible] = useState(false);

  const bars = [
    { label: "控场指数", left: "控场", right: "抗压", value: result.rawScores.S, altValue: result.rawScores.M },
    { label: "上头指数", left: "算账", right: "上头", value: result.rawScores.T, altValue: result.rawScores.F },
    { label: "出手指数", left: "冲锋", right: "潜伏", value: result.rawScores.A, altValue: result.rawScores.I },
    { label: "破防指数", left: "原则", right: "破防", value: result.rawScores.C, altValue: result.rawScores.V },
  ].map((item) => {
    const total = item.value + item.altValue || 1;
    return {
      ...item,
      width: Math.max(Math.round((item.value / total) * 100), 16),
    };
  });

  const handleSavePrompt = () => {
    setHintVisible(true);
    window.setTimeout(() => setHintVisible(false), 2200);
  };

  return (
    <div className="space-y-4">
      <div className="archive-border overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-neon">
        <div className="rounded-[26px] bg-gradient-to-br from-black/35 via-black/20 to-black/35 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">SMTI</div>
              <div className="mt-3 text-3xl font-black tracking-tight text-white">{profile.code}</div>
              <div className="mt-2 text-lg font-semibold text-white">{profile.character}</div>
              <div className="mt-1 text-sm text-white/72">{profile.label}</div>
            </div>
            <CharacterPortrait profile={profile} size="lg" />
          </div>

          <div className="mt-5 rounded-[24px] border border-white/10 bg-black/25 p-4">
            <div className="text-lg font-semibold text-white/88">{profile.punchline}</div>
            <div className="mt-4 space-y-3">
              {bars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex items-center justify-between text-xs text-white/58">
                    <span>{bar.left}</span>
                    <span>{bar.label}</span>
                    <span>{bar.right}</span>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#f7c35f,#ff4d6d,#54f2c3)]"
                      style={{ width: `${bar.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <button
          type="button"
          onClick={handleSavePrompt}
          className="rounded-2xl border border-white/12 bg-white/6 px-5 py-4 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-white/10 active:scale-[0.98]"
        >
          保存我的 SMTI 卡片
        </button>
        <div className="flex items-center rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold/88">
          {hintVisible ? "长按或截图保存你的 SMTI 卡片" : "截图区已就绪"}
        </div>
      </div>
    </div>
  );
}
