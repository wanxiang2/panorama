"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

/**
 * This component renders the net worth chart on the top right of the home page using the Recharts library.
 */

type NetWorthData = {
  month: string;
  value: number;
};

const data: NetWorthData[] = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 450 },
  { month: "May", value: 700 },
  { month: "Jun", value: 600 },
];

export default function NetWorthChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis hide dataKey="month" />
        <YAxis hide />
        <Tooltip
          formatter={(value) => `$${value}`}
          labelFormatter={(label) => label}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={3}
          fill="url(#blueGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}