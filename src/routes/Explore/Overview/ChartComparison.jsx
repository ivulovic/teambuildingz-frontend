import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export default function PlayerTargets({ data }) {
  return (
    <div className="inline-list no-gap">
      {data.map((x) => (
        <ResponsiveContainer height={350} key={x.name}>
          <BarChart
            margin={{
              top: 16,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            height={40}
            data={[x]}
            barGap={0}
            barCategoryGap={1}
          >
            <Bar
              dataKey="count"
              stackId="a"
              fill="var(--character-1)"
              label={{
                fill: "gray",
                position: "top",
                fontSize: 9,
                textShadow: "10px 10px 10px black",
              }}
            />
            <Bar
              dataKey="compared"
              stackId="b"
              fill="var(--character-2)"
              label={{
                fontSize: 9,
                fill: "gray",
                position: "top",
              }}
            />
            <XAxis
              dataKey="name"
              allowDataOverflow={true}
              tickCount={0}
              interval={0}
              tick={{ fontSize: "9px", width: "10px", wordWrap: "break-word" }}
            />
          </BarChart>
        </ResponsiveContainer>
      ))}
    </div>
  );
}
