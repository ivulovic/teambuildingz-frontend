import { Link } from "react-router-dom";
import Player from "../Player";
import "./style.scss";

export default function Team({ members, name, description }) {
  return (
    <div className="team-wrapper">
      <div className="team">
        {members.map((x, i) => (
          <Link className={`player-${i}`} to={`/users/${x.user.id}`}>
            <Player
              key={x.user.id}
              width={100 - i * 10}
              height={100 - i * 10}
              image={x.user.image}
              title={x.user.name}
            />
          </Link>
        ))}
      </div>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
}
