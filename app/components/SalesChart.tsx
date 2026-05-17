"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Pn", sales: 142 },
  { day: "Wt", sales: 218 },
  { day: "Śr", sales: 186 },
  { day: "Cz", sales: 304 },
  { day: "Pt", sales: 412 },
  { day: "So", sales: 528 },
  { day: "Nd", sales: 487 },
];

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
};

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div
      style={{
        background: "#161516",
        color: "#ffffff",
        padding: "8px 12px",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "-0.01em",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ opacity: 0.6, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ marginTop: 2 }}>
        <span style={{ color: "#f03d1e" }}>{payload[0].value}</span> zł
      </div>
    </div>
  );
}

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 6, left: 6, bottom: 0 }}>
        <defs>
          <linearGradient id="vintlyArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f03d1e" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#f03d1e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke="rgba(22,21,22,0.08)"
          strokeDasharray="3 4"
          vertical={false}
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{
            fill: "#6b6869",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
          dy={6}
        />
        <YAxis hide domain={["dataMin - 30", "dataMax + 30"]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "#f03d1e",
            strokeWidth: 1,
            strokeDasharray: "3 3",
          }}
        />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#f03d1e"
          strokeWidth={2.5}
          fill="url(#vintlyArea)"
          dot={{
            fill: "#ffffff",
            stroke: "#f03d1e",
            strokeWidth: 2,
            r: 3.5,
          }}
          activeDot={{
            fill: "#f03d1e",
            stroke: "#ffffff",
            strokeWidth: 2,
            r: 5,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
