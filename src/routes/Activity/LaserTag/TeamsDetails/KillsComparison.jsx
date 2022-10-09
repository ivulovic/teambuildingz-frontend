import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../Section";


export default function KillsComparison() {
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
      title="Убиства"
      subtitle="Број убистава начињених од сваког играча појединачно"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
