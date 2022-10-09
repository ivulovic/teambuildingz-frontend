import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function DamageDone() {
  const statistic = data.statistic.sort((a, z) => z.damageDone - a.damageDone).map((x, i) => {
    const { name } = x.user;
    return {
      name,
      value: x.damageDone,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Нанете штете"
      subtitle="Број освојених поена након поготка у мету"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
