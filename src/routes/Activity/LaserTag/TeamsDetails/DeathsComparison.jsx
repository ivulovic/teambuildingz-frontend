import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function DeathsComparison() {
  const statistic = data.statistic.sort((a, z) => z.gameOver - a.gameOver).map((x, i) => {
    const { name } = x.user;
    return {
      name,
      value: x.gameOver,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Deaths"
      subtitle="The total number of deaths"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
