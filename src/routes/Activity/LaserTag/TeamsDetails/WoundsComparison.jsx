import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../../../../db/data/laser-tag/05102022";
import Section from "../../../../components/Section";

export default function WoundsComparison({data}) {
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
      subtitle="Total number of hits players received from their opponents"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
