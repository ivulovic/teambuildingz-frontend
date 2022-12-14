import { useMemo } from "react";
import BarChart from "../../../../components/Charts/Bar";
import Section from "../../../../components/Section";

export default function Targets({ id, data }) {
  const userStatistic = data.statistic.find((x) => x.user.id === id);

  const getPopulatedData = (key) => {
    const dataToMap = userStatistic[key].data.sort((a, z) => z.count - a.count);
    const populatedData = dataToMap.map((hit) => {
      const {
        target: { name },
      } = hit;
      let comparedValue = 0;
      const targetObj = data.statistic.find((x) => x.user.id === hit.target.id);
      if (!targetObj) {
        return {
          ...hit,
          compared: comparedValue,
          name: userStatistic.user.name + " " + name,
        };
      }
      const targeterData = targetObj[key].data.find(
        (x) => x.target.id === userStatistic.user.id
      );
      if (targeterData) {
        comparedValue = targeterData.count;
      }
      return {
        ...hit,
        compared: comparedValue,
        name: userStatistic.user.name + " " + name,
      };
    });
    return populatedData;
  };
  const hitsChartData = useMemo(() => getPopulatedData("hits"), [id]);

  return (
    <>
      <Section title="Hits" subtitle={"A hit you made to the opponent"}>
        <BarChart data={hitsChartData} />
      </Section>
    </>
  );
}
