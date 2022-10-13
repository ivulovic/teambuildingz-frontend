import SingleBarChart from "../../../../components/Charts/SingleBar";
import Section from "../../../../components/Section";

export default function KillsComparison({data}) {
  const statistic = data.statistic.sort((a, z) => z.kills - a.kills).map((x, i) => {
    const { name } = x.user;
    return {
      name,
      value: x.kills,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Kills"
      subtitle="The number of kills made by each player individually"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
