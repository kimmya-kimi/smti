"use client";

import { useState } from "react";

interface ShareBoxProps {
  shareText: string;
  onEditAnswers: () => void;
  onReset: () => void;
}

export function ShareBox({ shareText, onEditAnswers, onReset }: ShareBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/82">
        {shareText}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-2xl border border-gold/40 bg-gold/15 px-5 py-4 text-sm font-semibold text-gold transition duration-200 hover:scale-[1.01] hover:bg-gold/20 active:scale-[0.98]"
        >
          {copied ? "已复制，准备发疯。" : "复制分享文案"}
        </button>
        <button
          type="button"
          onClick={onEditAnswers}
          className="rounded-2xl border border-white/12 bg-white/6 px-5 py-4 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-white/10 active:scale-[0.98]"
        >
          返回修改答案
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-2xl border border-white/12 bg-white/6 px-5 py-4 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-white/10 active:scale-[0.98]"
        >
          重新测试
        </button>
      </div>
    </div>
  );
}
