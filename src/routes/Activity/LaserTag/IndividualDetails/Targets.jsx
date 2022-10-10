import { useMemo } from "react";
import BarChart from "../../../../components/Charts/Bar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function Targets({ id }) {
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
  const woundsChartData = useMemo(() => getPopulatedData("wounds"), [id]);

  return (
    <>
      <Section
        title="Ране"
        subtitle={
          "Погодак након кога противник почиње да крвари"
        }
      >
        <BarChart data={woundsChartData} />
      </Section>

      <Section title="Погоци" subtitle={"Погодак начињен након што је противник рањен"}>
        <BarChart data={hitsChartData} />
      </Section>
    </>
  );
}
