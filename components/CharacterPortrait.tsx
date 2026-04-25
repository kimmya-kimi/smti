"use client";

import { useMemo, useState } from "react";
import { ResultProfile } from "@/types/smti";

interface CharacterPortraitProps {
  profile: ResultProfile;
  size?: "sm" | "lg";
}

const sizeMap = {
  sm: {
    shell: "h-16 w-16 rounded-2xl",
    inner: "inset-2 rounded-[18px]",
    label: "text-lg",
  },
  lg: {
    shell: "h-24 w-24 rounded-[28px] md:h-28 md:w-28",
    inner: "inset-3 rounded-[24px]",
    label: "text-2xl",
  },
};

export function CharacterPortrait({ profile, size = "lg" }: CharacterPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { shell, inner, label } = sizeMap[size];
  const fallbackGlyph = useMemo(() => profile.character.replace("型", "").slice(0, 1), [profile.character]);

  const renderAdornment = () => {
    switch (profile.visual.portraitKey) {
      case "crown":
        return (
          <>
            <div className="absolute left-1/2 top-[14%] h-[13%] w-[42%] -translate-x-1/2 rounded-t-full border border-[#f7c35f]/70 bg-[#f7c35f]/15" />
            <div className="absolute left-[32%] top-[8%] h-[12%] w-[10%] rotate-[-8deg] rounded-t-full border border-[#f7c35f]/70 bg-[#f7c35f]/25" />
            <div className="absolute left-[45%] top-[5%] h-[15%] w-[10%] rounded-t-full border border-[#f7c35f]/80 bg-[#f7c35f]/30" />
            <div className="absolute right-[32%] top-[8%] h-[12%] w-[10%] rotate-[8deg] rounded-t-full border border-[#f7c35f]/70 bg-[#f7c35f]/25" />
          </>
        );
      case "expansion":
        return (
          <>
            <div className="absolute right-[10%] top-[16%] h-[6%] w-[26%] rotate-[22deg] rounded-full bg-[#ff8d5d]/55" />
            <div className="absolute right-[15%] top-[24%] h-[6%] w-[22%] rotate-[8deg] rounded-full bg-[#f7c35f]/45" />
            <div className="absolute left-[18%] top-[18%] h-[10%] w-[20%] rounded-full border border-white/20 bg-white/10" />
          </>
        );
      case "visor":
        return (
          <>
            <div className="absolute left-1/2 top-[30%] h-[12%] w-[42%] -translate-x-1/2 rounded-full border border-[#9c6bff]/60 bg-black/65" />
            <div className="absolute left-[25%] top-[24%] h-[5%] w-[18%] rounded-full bg-[#9c6bff]/30" />
          </>
        );
      case "fan":
        return (
          <>
            <div className="absolute right-[8%] top-[34%] h-[24%] w-[30%] rounded-t-[90%] rounded-bl-[90%] border border-[#c7d2fe]/60 bg-[#dbeafe]/10" />
            <div className="absolute right-[18%] top-[38%] h-[18%] w-[2px] rotate-[18deg] bg-[#c7d2fe]/70" />
            <div className="absolute right-[14%] top-[40%] h-[18%] w-[2px] rotate-[6deg] bg-[#c7d2fe]/50" />
          </>
        );
      case "blade":
        return (
          <>
            <div className="absolute right-[10%] top-[18%] h-[36%] w-[6%] rotate-[28deg] rounded-full bg-[#ff7b7b]/60" />
            <div className="absolute right-[19%] top-[44%] h-[6%] w-[16%] rotate-[28deg] rounded-full bg-[#f7c35f]/55" />
          </>
        );
      case "banner":
        return (
          <>
            <div className="absolute left-[16%] top-[18%] h-[42%] w-[3%] rounded-full bg-white/55" />
            <div className="absolute left-[19%] top-[18%] h-[20%] w-[24%] skew-y-[-12deg] rounded-r-xl bg-[#ff6b6b]/35" />
          </>
        );
      case "wave":
        return (
          <>
            <div className="absolute left-[12%] bottom-[18%] h-[18%] w-[28%] rounded-full border border-[#7dd3fc]/45 bg-[#38bdf8]/10" />
            <div className="absolute left-[24%] bottom-[14%] h-[14%] w-[30%] rounded-full border border-[#7dd3fc]/45 bg-[#38bdf8]/10" />
          </>
        );
      case "hairpin":
        return (
          <>
            <div className="absolute right-[20%] top-[14%] h-[28%] w-[3%] rotate-[24deg] rounded-full bg-[#f9a8d4]/70" />
            <div className="absolute right-[14%] top-[10%] h-[10%] w-[10%] rounded-full border border-[#f9a8d4]/60 bg-[#f9a8d4]/20" />
          </>
        );
      case "abacus":
        return (
          <>
            <div className="absolute left-[12%] top-[16%] h-[26%] w-[24%] rounded-xl border border-[#f87171]/55 bg-black/40" />
            <div className="absolute left-[16%] top-[22%] h-[2px] w-[16%] bg-[#f87171]/60" />
            <div className="absolute left-[18%] top-[18%] h-[10%] w-[10%] rounded-full bg-[#f7c35f]/45" />
            <div className="absolute left-[22%] top-[26%] h-[10%] w-[10%] rounded-full bg-[#f7c35f]/45" />
          </>
        );
      case "network":
        return (
          <>
            <div className="absolute left-[14%] top-[18%] h-[8%] w-[8%] rounded-full bg-[#54f2c3]/55" />
            <div className="absolute left-[28%] top-[12%] h-[8%] w-[8%] rounded-full bg-[#f7c35f]/55" />
            <div className="absolute left-[26%] top-[26%] h-[8%] w-[8%] rounded-full bg-[#54f2c3]/55" />
            <div className="absolute left-[18%] top-[18%] h-[2px] w-[16%] rotate-[24deg] bg-white/40" />
            <div className="absolute left-[18%] top-[24%] h-[2px] w-[14%] bg-white/40" />
          </>
        );
      case "chess":
        return (
          <>
            <div className="absolute left-[14%] top-[18%] h-[18%] w-[18%] rounded-full border border-[#7dd3fc]/55 bg-[#38bdf8]/10" />
            <div className="absolute left-[18%] top-[14%] h-[6%] w-[10%] rounded-full bg-[#7dd3fc]/55" />
            <div className="absolute left-[12%] top-[33%] h-[2px] w-[22%] bg-[#7dd3fc]/45" />
          </>
        );
      case "sail":
        return (
          <>
            <div className="absolute right-[14%] top-[18%] h-[28%] w-[2px] bg-white/55" />
            <div className="absolute right-[16%] top-[18%] h-[16%] w-[18%] rounded-tl-full bg-[#f7c35f]/35" />
            <div className="absolute right-[16%] top-[34%] h-[12%] w-[14%] rounded-bl-full bg-[#f59e0b]/28" />
          </>
        );
      case "dagger":
        return (
          <>
            <div className="absolute left-[14%] top-[18%] h-[34%] w-[5%] rotate-[-28deg] rounded-full bg-[#60a5fa]/55" />
            <div className="absolute left-[10%] top-[42%] h-[6%] w-[16%] rotate-[-28deg] rounded-full bg-[#f7c35f]/45" />
          </>
        );
      case "brush":
        return (
          <>
            <div className="absolute right-[14%] top-[18%] h-[30%] w-[3%] rotate-[18deg] rounded-full bg-[#d1fae5]/70" />
            <div className="absolute right-[10%] top-[14%] h-[10%] w-[10%] rounded-t-full bg-[#86efac]/45" />
          </>
        );
      case "bamboo":
        return (
          <>
            <div className="absolute left-[12%] top-[18%] h-[28%] w-[4%] rounded-full bg-[#86efac]/55" />
            <div className="absolute left-[19%] top-[12%] h-[34%] w-[4%] rounded-full bg-[#4ade80]/50" />
            <div className="absolute left-[9%] top-[24%] h-[2px] w-[14%] bg-[#bbf7d0]/45" />
          </>
        );
      case "moon":
        return (
          <>
            <div className="absolute right-[14%] top-[12%] h-[18%] w-[18%] rounded-full bg-[#c084fc]/30" />
            <div className="absolute right-[10%] top-[12%] h-[18%] w-[18%] rounded-full bg-black/65" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative isolate overflow-hidden border border-white/15 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.22))] shadow-neon backdrop-blur ${shell}`}
    >
      <div className={`absolute ${inner} border border-white/10`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,195,95,0.18),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(84,242,195,0.18),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(156,107,255,0.22),transparent_30%)]" />
      <div className="absolute left-1/2 top-[24%] h-[30%] w-[28%] -translate-x-1/2 rounded-full border border-white/12 bg-white/12 shadow-[0_0_30px_rgba(255,255,255,0.06)]" />
      <div className="absolute left-1/2 bottom-[14%] h-[34%] w-[56%] -translate-x-1/2 rounded-t-[999px] border border-white/10 bg-white/10" />
      <div className="absolute left-1/2 top-[39%] h-[3%] w-[18%] -translate-x-1/2 rounded-full bg-black/35" />
      {renderAdornment()}

      {profile.visual.imagePath && !imageFailed ? (
        <img
          src={profile.visual.imagePath}
          alt={profile.character}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : null}

      {(imageFailed || !profile.visual.imagePath) && (
        <div className="absolute inset-0">
          <div className="absolute bottom-2 right-2 rounded-full border border-white/10 bg-black/35 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-white/72">
            {profile.code}
          </div>
          <div
            className={`absolute left-2 top-2 flex items-center justify-center rounded-full border border-gold/25 bg-black/30 px-2 py-1 font-black text-gold/90 ${label}`}
          >
            {fallbackGlyph}
          </div>
        </div>
      )}
    </div>
  );
}
