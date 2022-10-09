import { BiTargetLock } from "react-icons/bi";
import { GiBurningSkull, GiHastyGrave } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
import { Link, useLocation, useParams } from "react-router-dom";
import Avatar from "../../../../components/Avatar";
import { data, Users } from "../data";
import Section from "../Section";

export default function IndividualStatistic({ id }) {
  const userId = id;
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const user = Object.values(Users).find((x) => x.id === userId);
  const userStatistic = data.statistic.find((x) => x.user.id === userId);
  const team = data.teams.find((x) => x.id === userStatistic.teamId);
  const opponentTeam = data.teams.find((x) => x.id !== userStatistic.teamId);
  const getRootPathname = () => {
    const pathnameParts = pathname.split("/");
    const path = !params.userId
      ? `${pathname}`
      : pathnameParts.slice(0, pathnameParts.length - 2).join("/");
    return path;
  };
  return (
    <div className="individual-statistic">
      <div className="inline-list">
        <div className="player-header">
          <Avatar
            width={70}
            height={70}
            img={user.image}
          />
          <h1>{user.name}</h1>
        </div>
      </div>
      <div className="inline-list">
        <div
          className="player-achievements"
          title="Times you took all Health Points from a single player"
        >
          <RiKnifeBloodLine />
          <h2>Убистава</h2>
          <h1>{userStatistic.kills}</h1>
        </div>

        <div
          className="player-achievements"
          title="Precission of your shotting"
        >
          <BiTargetLock />
          <h2>Прецизност</h2>
          <h1>{userStatistic.accuracy}%</h1>
        </div>

        <div
          className="player-achievements"
          title="Times single player took all your Health Points"
        >
          <GiHastyGrave />
          <h2>Смрти</h2>
          <h1>{userStatistic.gameOver}</h1>
        </div>
      </div>

      <div className="inline-list teams">
        <Section title={`Саиграчи`}>
          <div className="inline-list">
            {team.participants.map((x) => {
              return (
                <Link
                  replace={true}
                  to={`${getRootPathname()}/users/${x.id}`}
                  className="player-header"
                >
                  <Avatar
                    width={35}
                    height={35}
                    img={x.image}
                  />
                  <h1>{x.name}</h1>
                </Link>
              );
            })}
          </div>
        </Section>
        <span className="fight">
          <GiBurningSkull />
        </span>
        <Section title={"Противници"}>
          <div className="inline-list">
            {opponentTeam.participants.map((x) => {
              return (
                <Link
                  replace={true}
                  to={`${getRootPathname()}/users/${x.id}`}
                  className="player-header"
                >
                  <Avatar
                    width={35}
                    height={35}
                    img={x.image}
                  />
                  <h1>{x.name}</h1>
                </Link>
              );
            })}
          </div>
        </Section>
      </div>

      <Link className="link-team-statistics" to={`${getRootPathname()}/teams`}>
        Статистика тимова
      </Link>
    </div>
  );
}
