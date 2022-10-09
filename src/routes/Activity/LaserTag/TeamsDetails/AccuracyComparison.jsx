import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function AccuracyComparison() {
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
      title="Прецизност"
      subtitle="Однос испуцаних метака и погодака у мете"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
