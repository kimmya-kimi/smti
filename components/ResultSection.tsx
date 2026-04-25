import { ReactNode } from "react";

interface ResultSectionProps {
  title: string;
  children: ReactNode;
}

export function ResultSection({ title, children }: ResultSectionProps) {
  return (
    <section className="archive-border animate-riseIn rounded-[28px] bg-white/[0.04] p-5 shadow-card backdrop-blur md:p-6">
      <h2 className="mb-4 text-base font-bold tracking-wide text-white sm:text-lg md:text-xl">{title}</h2>
      <div className="text-[13px] leading-7 text-white/78 sm:text-sm md:text-[15px]">{children}</div>
    </section>
  );
}
