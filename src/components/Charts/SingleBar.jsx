import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export default function SingleBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 16,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barGap={0}
        barCategoryGap={1}
      >
        <XAxis
          dataKey="name"
          tickMargin={0}
          interval={0}
          tick={{ fontSize: "8px", width: "50px", wordWrap: "break-word" }}
        />
        <Bar
          label={{ fill: "gray", fontSize: 8, position: "top" }}
          dataKey="value"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
