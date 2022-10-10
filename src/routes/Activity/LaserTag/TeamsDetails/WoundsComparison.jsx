import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function WoundsComparison() {
  const statistic = data.statistic.sort((a, z) => z.wounds.total - a.wounds.total).map((x, i) => {
    const { name } = x.user;
    return {
      name,
      value: x.wounds.total,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Wounds"
      subtitle="Number of wounds made to the oponent"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
