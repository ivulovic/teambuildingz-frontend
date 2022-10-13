import SingleBarChart from "../../../../components/Charts/SingleBar";
import Section from "../../../../components/Section";

export default function AccuracyComparison({data}) {
  const statistic = data.statistic.sort((a, z) => z.accuracy - a.accuracy).map((x, i) => {
    const { name } = x.user;
    const { accuracy } = x;
    return {
      name,
      value: accuracy,
      fill: `var(--character-${x.teamId})`,
    };
  });
  return (
    <Section
      title="Accuracy"
      subtitle="Ratio of bullets fired and hits on targets"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
