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
}

export function RadarPanel({ data }: RadarPanelProps) {
  return (
    <div className="h-[280px] w-full rounded-[24px] border border-white/10 bg-black/20 p-2 sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="68%">
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
