import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function DamageGet() {
  const statistic = data.statistic.sort((a, z) => z.damageGet - a.damageGet).map((x, i) => {
    const { name } = x.user;
    return {
      name,
      value: x.damageGet,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Настале штете"
      subtitle="Играчи над којим су противници узели највише поена"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
