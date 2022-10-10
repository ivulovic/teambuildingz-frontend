import { data } from "../data";
import Achievement from "../../../../components/Achievement";
import Team from "../../../../components/Team";

export default function Achievements() {
  const getValue = (key) => data.statistic.sort((a, z) => z[key] - a[key]);
  const getNestedValue = (key) =>
    data.statistic.sort((a, z) => a[key].total - z[key].total);

  const [destroyer] = getValue("damageDone");
  const [sniper] = getValue("accuracy");
  const [kamikaze] = getValue("gameOver");
  const [rambo] = getValue("shotFired");
  const [warrior] = getValue("rating");
  const [invulnerable] = getNestedValue("wounds");

  const getWinner = () => {
    const totalRating = [];
    data.teams.map((x) => {
      totalRating.push({
        ...x,
        totalRating: data.statistic
          .filter((y) => y.teamId === x.id)
          .reduce((a, x) => a + x.rating, 0)
          .toFixed(2),
        participants: data.statistic.filter(y => y.teamId === x.id).sort((a, z) => z.rating - a.rating)
      });
    });
    return totalRating.sort((a, z) => z.totalRating - a.totalRating);
  };
  const [winner, loser] = getWinner();

  return (
    <div className="achievements">
      <Team 
        name={`Congratulations ${winner.name}!`}
        description={`${winner.name} had total rating ${winner.totalRating} compared to ${loser.name} who had ${loser.totalRating}.`}
        members={winner.participants}
      />
      <div className="inline-list">
        <Achievement
          description="Destroyer"
          title={destroyer.user.name}
          image={destroyer.user.image}
          points={destroyer.damageDone}
          descriptionLong="Made the most damage to opponents"
        />
        <Achievement
          description="Sniper"
          title={sniper.user.name}
          image={sniper.user.image}
          points={sniper.accuracy.toFixed(2) + "%"}
          descriptionLong="Player with best accuracy"
        />
        <Achievement
          description="Kamikaze"
          points={kamikaze.gameOver}
          title={kamikaze.user.name}
          image={kamikaze.user.image}
          descriptionLong="Player with most deaths"
        />
        <Achievement
          description="Rambo"
          title={rambo.user.name}
          image={rambo.user.image}
          points={rambo.shotFired}
          descriptionLong="Player with most shots fired"
        />

        <Achievement
          description="Invulnerable"
          descriptionLong="Player who was wounded the least"
          title={invulnerable.user.name}
          image={invulnerable.user.image}
          points={invulnerable.wounds.total}
        />

        <Achievement
          description="Warrior"
          title={warrior.user.name}
          image={warrior.user.image}
          descriptionLong="Player with the best rating"
          points={warrior.rating.toFixed(2)}
        />
      </div>
    </div>
  );
}
