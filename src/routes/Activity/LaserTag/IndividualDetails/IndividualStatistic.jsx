import { GiBurningSkull } from "react-icons/gi";
import { Link, useLocation, useParams } from "react-router-dom";
import Player from "../../../../components/Player";
import { Users } from "../../../../db";

export default function IndividualStatistic({ id, data }) {
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
        <Link to={`/users/${user.id}`}>
          <Player width={70} height={70} image={user.image} name={user.name} />
        </Link>
      </div>

      <div className="inline-list teams">
        <div className="inline-list">
          {team.participants.map((x) => {
            return (
              <Link
                key={x.id}
                replace={true}
                to={`${getRootPathname()}/users/${x.id}`}
                className="player-header"
              >
                <Player image={x.image} name={x.name} nameClassName="small" />
              </Link>
            );
          })}
        </div>
        <Link className="game-stats" to={`${getRootPathname()}/statistic`}>
          <GiBurningSkull />
          STATISTIC
        </Link>
        <div className="inline-list">
          {opponentTeam.participants.map((x) => {
            return (
              <Link
                key={x.id}
                replace={true}
                to={`${getRootPathname()}/users/${x.id}`}
                className="player-header"
              >
                <Player image={x.image} name={x.name} nameClassName="small" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
