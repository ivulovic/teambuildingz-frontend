import { ResponsiveContainer, BarChart, XAxis, Bar } from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width={"99%"} height={250}>
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
          tick={{ fontSize: "8px", width: "50px", wordWrap: "break-word" }}
        />
        {/* <YAxis
          width={20}
          interval={0}
          tick={{ fontSize: "10px", width: "50px", wordWrap: "break-word" }}
        /> */}
        {/* <Tooltip
          content={(ctx) => {
            if (!ctx || (ctx && !ctx.label)) {
              return "";
            }
            const [main, compared] = ctx.label.split(" ");
            return (
              <div className="tooltip-bar">
                <div className="tooltip-check-main">
                  <span></span>
                  {main} 
                </div>
                <div className="tooltip-check-compared">
                  <span></span>
                  {compared}
                </div>
              </div>
            );
          }}
        /> */}
        <Bar
          label={{ fill: "gray", fontSize: 8, position: "top" }}
          dataKey="count"
          fill="var(--character-1)"
        />
        <Bar
          label={{ fill: "gray", fontSize: 8, position: "top" }}
          dataKey="compared"
          fill="var(--character-2)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
