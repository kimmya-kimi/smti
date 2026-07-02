"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface RadarPanelProps {
  data: { dimension: string; value: number; fullMark: number }[];
  blurred?: boolean;
}

export function RadarPanel({ data, blurred = false }: RadarPanelProps) {
  return (
    <div className="relative h-[280px] w-full rounded-[24px] border border-white/10 bg-black/20 p-2 sm:h-[320px]">
      {blurred ? (
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[24px] bg-black/16 backdrop-blur-[3px]" />
      ) : null}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart className={blurred ? "blur-[7px]" : ""} data={data} outerRadius="68%">
          <PolarGrid stroke="rgba(255,255,255,0.14)" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: "rgba(255,255,255,0.78)", fontSize: 10 }}
          />
          <Radar
            name="SMTI"
            dataKey="value"
            stroke="#f7c35f"
            fill="rgba(255,77,109,0.32)"
            fillOpacity={1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
