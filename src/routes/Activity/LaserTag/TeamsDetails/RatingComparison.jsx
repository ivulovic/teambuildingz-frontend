import SingleBarChart from "../../../../components/Charts/SingleBar";
import { data } from "../data";
import Section from "../../../../components/Section";

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
      title="Rating"
      subtitle="The ratio of bullets fired, number of kills, hits and wounds, as well as the accuracy of the player"
    >
      <SingleBarChart data={statistic} />
    </Section>
  );
}
