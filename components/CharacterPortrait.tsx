"use client";

import { useMemo, useState } from "react";
import { characterImages } from "@/data/characterImages";
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
  const { shell, label } = sizeMap[size];
  const fallbackGlyph = useMemo(() => profile.character.replace("型", "").slice(0, 1), [profile.character]);
  const imagePath = characterImages[profile.code as keyof typeof characterImages];

  return (
    <div
      className={`relative isolate overflow-hidden border border-white/15 bg-[radial-gradient(circle_at_50%_78%,rgba(84,242,195,0.24),transparent_26%),radial-gradient(circle_at_50%_22%,rgba(156,107,255,0.2),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.22))] shadow-neon backdrop-blur ${shell}`}
    >
      <div className="absolute inset-[10%] rounded-[24px] border border-white/10" />
      <div className="absolute bottom-[10%] left-1/2 h-[14%] w-[52%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(84,242,195,0.45),rgba(84,242,195,0.04)_65%,transparent_72%)] blur-md" />

      {imagePath && !imageFailed ? (
        <img
          src={imagePath}
          alt={profile.character}
          className="absolute inset-x-[8%] bottom-[8%] top-[8%] h-[84%] w-[84%] object-contain drop-shadow-[0_0_28px_rgba(84,242,195,0.22)]"
          onError={() => setImageFailed(true)}
        />
      ) : null}

      {(imageFailed || !imagePath) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex h-[52%] w-[52%] items-center justify-center rounded-full border border-gold/25 bg-black/35 font-black text-gold/90 shadow-[0_0_30px_rgba(247,195,95,0.18)] ${label}`}
          >
            {fallbackGlyph}
          </div>
        </div>
      )}

      <div className="absolute bottom-2 right-2 rounded-full border border-white/10 bg-black/35 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-white/72">
        {profile.code}
      </div>
    </div>
  );
}
