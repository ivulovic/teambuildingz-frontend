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
      title="Damage Done"
      subtitle="The number of points scored after hitting the target"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
