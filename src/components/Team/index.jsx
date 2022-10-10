import Player from "../Player";
import "./style.scss";

export default function Team({ members, name, description }) {
  return (
    <div className="team-wrapper">
        <div className="team">
            {members.map((x, i) => (
             <Player
                width={100 - i * 10}
                height={100 - i * 10}
                image={x.user.image}
                className={`player-${i}`}
                title={x.user.name}
                />
            ))}
            </div>
        <h1>{name}</h1>
        <h2>{description}</h2>
    </div>
  );
}
