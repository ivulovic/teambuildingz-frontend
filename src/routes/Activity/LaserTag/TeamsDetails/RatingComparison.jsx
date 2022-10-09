import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../Section";

export default function RatingComparison() {
  const statistic = data.statistic.sort((a, z) => z.rating - a.rating).map((x, i) => {
    const { name } = x.user;
    const { rating } = x;
    return {
      name,
      value: rating,
      fill: `var(--character-${x.teamId})`,
    };
  });

  return (
    <Section
      title="Резултат"
      subtitle="Однос испуцаних метака, броја убистава, погодака и рањавања, као и прецизност играча"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
