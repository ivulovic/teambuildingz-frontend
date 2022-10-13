import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

export default function PlayerTargets({ primary, secondary, data }) {

  const d = useMemo(() => {
    const keys = [
        { key: "rating", label: "Rating" },
        { key: "accuracy", label: "Accuracy" },
        { key: "kills", label: "Kills" },
        { key: "gameOver", label: "Deaths" },
      ];
    const mainStatistic = data.statistic.find((x) => x.user.id === primary);
    const secondaryStatistic = data.statistic.find(
      (x) => x.user.id === secondary
    );

    const vals = keys.map(({ key, label }) => {
      return {
        name: label,
        count: Number(mainStatistic[key]).toFixed(2),
        compared: Number(secondaryStatistic[key]).toFixed(2),
      };
    });
    return [
      ...vals,
      {
        name: "Hits",
        count: Number(mainStatistic.hits.total).toFixed(2),
        compared: Number(secondaryStatistic.hits.total).toFixed(2),
      },
      {
        name: "Wounds",
        count: Number(mainStatistic.wounds.total).toFixed(2),
        compared: Number(secondaryStatistic.wounds.total).toFixed(2),
      },
      {
        name: "Shots Fired",
        count: Number(mainStatistic.shotFired).toFixed(2),
        compared: Number(secondaryStatistic.shotFired).toFixed(2),
      },
      {
        name: "Damage Done",
        count: Number(mainStatistic.damageDone).toFixed(2),
        compared: Number(secondaryStatistic.damageDone).toFixed(2),
      },
      {
        name: "Damage Received",
        count: Number(mainStatistic.damageGet).toFixed(2),
        compared: Number(secondaryStatistic.damageGet).toFixed(2),
      },
    ];
  }, [primary, secondary]);

  return (
    <div className="inline-list no-gap">
      {d.map((x) => (
        <ResponsiveContainer height={350} key={x.name}>
          <BarChart height={40} data={[x]} barGap={0} barCategoryGap={0}>
            <Bar
              dataKey="count"
              stackId="a"
              fill="var(--character-1)"
              label={{
                fill: "white",
                fontSize: 8,
                textShadow: "10px 10px 10px black",
              }}
            />
            <Bar
              dataKey="compared"
              stackId="b"
              fill="var(--character-2)"
              label={{ fill: "white", fontSize: 8 }}
            />
            <XAxis
              dataKey="name"
              allowDataOverflow={true}
              tickCount={0}
              interval={0}
              tick={{ fontSize: "8px", width: "10px", wordWrap: "break-word" }}
            />
          </BarChart>
        </ResponsiveContainer>
      ))}
    </div>
  );
}
