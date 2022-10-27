import { ResponsiveContainer, BarChart, XAxis, Bar } from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width={"99%"} height={350}>
      <BarChart
        data={data}
        margin={{
          top: 16,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barCategoryGap={1}
        barGap={0}
      >
        {/* <CartesianGrid strokeDasharray="1 1" /> */}
        <XAxis
          dataKey="name"
          tickMargin={0}
          interval={0}
          tick={{ fontSize: "9px", width: "50px", wordWrap: "break-word" }}
        />
        <Bar
          label={{ fill: "gray", fontSize: 9, position: "top" }}
          dataKey="count"
          fill="var(--character-1)"
        />
        <Bar
          label={{ fill: "gray", fontSize: 9, position: "top" }}
          dataKey="compared"
          fill="var(--character-2)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
