import {
  GiDiamondTrophy,
} from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { data } from "../data";
import Achievement from "../../../../components/Achievement";
import Player from "../../../../components/Player";
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
          .reduce((a, x) => a + x.rating, 0),
        participants: data.statistic.filter(y => y.teamId === x.id).sort((a, z) => z.rating - a.rating)
      });
    });
    return totalRating.sort((a, z) => z.totalRating - a.totalRating);
  };
  const [winner, loser] = getWinner();
  console.log(winner);
  return (
    <div className="achievements">
      {/* <div className="inline-list winner-list">
        <div className="winner">
          <GiDiamondTrophy />
          <span className="text-neutral">{winner.name}</span>
          <div className="inline-list">
            <span className="text-character-1">
              {winner.totalRating.toFixed(2)}
            </span>
            <span className="text-secondary handshake">
              <FaRegHandshake />
            </span>
            <span className="text-character-2">
              {loser.totalRating.toFixed(2)}
            </span>
          </div>
        </div>
      </div> */}
      <Team 
        name={`Congratulations ${winner.name}!!!`}
        members={winner.participants}
      />
      <div className="inline-list">
        <Achievement
          description="Разарач"
          title={destroyer.user.name}
          image={destroyer.user.image}
          points={destroyer.damageDone}
          descriptionLong="Нанео највише штете"
          path={`/activity/laser-tag/${data.id}/users/${destroyer.user.id}`}
        />
        <Achievement
          description="Снајпер"
          title={sniper.user.name}
          image={sniper.user.image}
          points={sniper.accuracy.toFixed(2) + "%"}
          descriptionLong="Најбоља прецизност"
          path={`/activity/laser-tag/${data.id}/users/${sniper.user.id}`}
        />
        <Achievement
          description="Камиказа"
          points={kamikaze.gameOver}
          title={kamikaze.user.name}
          image={kamikaze.user.image}
          descriptionLong="Највише смрти"
          path={`/activity/laser-tag/${data.id}/users/${kamikaze.user.id}`}
        />
        <Achievement
          description="Рамбо"
          title={rambo.user.name}
          image={rambo.user.image}
          points={rambo.shotFired}
          descriptionLong="Највише испуцаних метака"
          path={`/activity/laser-tag/${data.id}/users/${rambo.user.id}`}
        />

        <Achievement
          description="Нерањив"
          descriptionLong="Најмање рана"
          title={invulnerable.user.name}
          image={invulnerable.user.image}
          points={invulnerable.wounds.total}
          path={`/activity/laser-tag/${data.id}/users/${invulnerable.user.id}`}
        />

        <Achievement
          description="Ратник"
          title={warrior.user.name}
          image={warrior.user.image}
          descriptionLong="Најбољи резултат"
          points={warrior.rating.toFixed(2)}
          path={`/activity/laser-tag/${data.id}/users/${warrior.user.id}`}
        />
      </div>
    </div>
  );
}
