import {
  GiDiamondTrophy,
  GiHeavyBullets,
  GiMuscleUp,
  GiNinjaHead,
  GiShieldReflect,
  GiTargetDummy,
} from "react-icons/gi";
import { FaRegHandshake, FaUserInjured } from "react-icons/fa";
import Section from "../Section";
import { data } from "../data";

export default function Achievements() {

  const getValue = (key) => data.statistic.sort((a, z) => z[key] - a[key]);
  const getNestedValue = (key) => data.statistic.sort((a, z) => a[key].total - z[key].total);
  
  const [destroyer] = getValue('damageDone');
  const [sniper] = getValue('accuracy');
  const [kamikaze] = getValue('gameOver');
  const [rambo] = getValue('shotFired');
  const [warrior] = getValue('rating');
  const [invulnerable] = getNestedValue('wounds');
  const getWinner = () => {
    const totalRating = [];
    data.teams.map(x => {
      totalRating.push({
        ...x,
        totalRating: data.statistic.filter(y => y.teamId === x.id).reduce((a, x) => a + x.rating, 0),
      })
    });
    return totalRating.sort((a, z) => z.totalRating - a.totalRating);
  };
  const [winner, loser] = getWinner();
  console.log(getWinner())
  return (
    <Section
      // title="Achievements"
      // subtitle="Given to players who meet specific criteria"
    >
      <div className="inline-list winner-list">
        <div className="winner">
          <GiDiamondTrophy />
          <span  className="text-neutral">{winner.name}</span>
          <div className="inline-list">
          <span className="text-positive">{winner.totalRating.toFixed(2)}</span>
          <span className="text-secondary handshake">
            <FaRegHandshake />
          </span>
          <span className="text-negative">{loser.totalRating.toFixed(2)}</span>
          </div>
        </div>
        {/* <div className="loser">
        <FaRegSadCry />
        <span>{loser.name}</span>
        <span>{loser.totalRating.toFixed(2)}</span>
      </div> */}
      </div>
      <div className="inline-list">
        <div className="player-achievements">
          <h2 className={`text-character-${destroyer.teamId}`}>{destroyer.user.name}</h2>
          <GiMuscleUp className={`text-character-${destroyer.teamId}`}/>
          <h2>Разбијач</h2>
          <h1>{destroyer.damageDone}</h1>
          <h3>Нанео највише штете</h3>
        </div>

        <div className="player-achievements">
          <h2  className={`text-character-${sniper.teamId}`}>{sniper.user.name}</h2>
          <GiTargetDummy  className={`text-character-${sniper.teamId}`} />
          <h2>Снајпер</h2>
          <h1>{sniper.accuracy.toFixed(2)}%</h1>
          <h3>Најбоља прецизност</h3>
        </div>

        <div className="player-achievements">
          <h2  className={`text-character-${kamikaze.teamId}`}>{kamikaze.user.name}</h2>
          <FaUserInjured   className={`text-character-${kamikaze.teamId}`}/>
          <h2>Камиказа</h2>
          <h1>{kamikaze.gameOver}</h1>
          <h3>Највише убијан</h3>
        </div>

        <div className="player-achievements">
          <h2  className={`text-character-${rambo.teamId}`}>{rambo.user.name}</h2>
          <GiHeavyBullets   className={`text-character-${rambo.teamId}`}/>
          <h2>Рамбо</h2>
          <h1>{rambo.shotFired}</h1>
          <h3>Највише испуцаних меткова</h3>
        </div>

        <div className="player-achievements">
          <h2  className={`text-character-${invulnerable.teamId}`}>{invulnerable.user.name}</h2>
          {/* <GiShieldBash /> */}
          <GiShieldReflect   className={`text-character-${invulnerable.teamId}`}/>
          <h2>Нерањив</h2>
          <h1>{invulnerable.wounds.total}</h1>
          <h3>Најмање рањаван</h3>
        </div>

        <div className="player-achievements">
          <h2  className={`text-character-${warrior.teamId}`}>{warrior.user.name}</h2>
          <GiNinjaHead  className={`text-character-${warrior.teamId}`} />
          <h2>Ратник</h2>
          <h1>{warrior.rating.toFixed(2)}</h1>
          <h3>Најбољи резултат</h3>
        </div>
      </div>
    </Section>
  );
}
