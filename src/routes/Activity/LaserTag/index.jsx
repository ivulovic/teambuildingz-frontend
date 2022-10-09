import { Link, useLocation } from "react-router-dom";
import Avatar from '../../../components/Avatar';
import { games } from "./data";
import Section from "./Section";
import "./style.css";

const LIMIT = 4;

export default function LaserTag() {
  const { pathname } = useLocation();
  return (
    <div>
      <Section 
        title="Your Laser Tag Activities"
        subtitle="Recent activities of you and your friends"
        >
        <ul className="activity-list">
          {games.map(game => (
            <li>
              <div className="info">
                  <Link to={`${pathname}/${game.id}`}>{game.name}</Link>
                  <span>{game.date}</span>
              </div>
              <div className="ui-recent-card-footer">
                <div className="ui-recent-card-footer-users">
                  {game.participants.slice(0, LIMIT).map(participant => (
                    <Avatar
                      width={35}
                      height={35}
                      img={participant.image}
                    />
                  ))}
                  <Avatar
                    width={35}
                    height={35}
                    style={{
                      background: "#fff",
                      color: "#000",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                    }}
                    text={`+${game.participants.length - LIMIT}`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      
    </div>
  );
}
