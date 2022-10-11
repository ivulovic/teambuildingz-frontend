import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function HitsComparison() {
  const statistic = data.statistic
    .sort((a, z) => z.hits.total - a.hits.total)
    .map((x, i) => {
      const { name } = x.user;
      return {
        name,
        value: x.hits.total,
        fill: `var(--character-${x.teamId})`,
      };
    });

  return (
    <Section
      title="Hits"
      subtitle="Total number of hits players made to their opponents"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
