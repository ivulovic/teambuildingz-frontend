import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Avatar from "../../../../components/Avatar";
import Section from "../../../../components/Section";
import PlayerTargets from "./PlayerTargets";

export default function PlayerComparison({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [search] = useSearchParams();
  const getUserById = (id) => data.statistic.find((x) => x.user.id === id);

  const [u1, setU1] = useState(Number(search.get("u1")) || 0);
  const [u2, setU2] = useState(Number(search.get("u2")) || 0);

  const handleChange = (direction, v, type) => {
    const value = Number(v);
    const tIndex = type === "u1" ? 0 : 1;
    const maxPlayers = data.teams[tIndex].participants.length - 1;
    if (direction < 0) {
      const nextId = value - 1;
      return nextId <= 0 ? 0 : nextId;
    }
    if (direction > 0) {
      const nextId = value + 1;
      return nextId >= maxPlayers ? maxPlayers : nextId;
    }
  };
  const handleChangeU1 = (direction, value, type) => {
    const newV = handleChange(direction, value, type);
    setU1(newV);
    navigate(
      `${location.pathname}?id=${data.activity.id}&u1=${newV}&u2=${u2}`,
      { replace: true }
    );
  };
  const handleChangeU2 = (direction, value, type) => {
    const newV = handleChange(direction, value, type);
    setU2(newV);
    navigate(
      `${location.pathname}?id=${data.activity.id}&u1=${u1}&u2=${newV}`,
      { replace: true }
    );
  };
  const user1 = getUserById(data.teams[0].participants[u1].id);
  const user2 = getUserById(data.teams[1].participants[u2].id);

  if (!user2) return <></>;
  return (
    <Section>
      <div className="individual-statistic">
        <div className="inline-list">
          <div className="player-header">
            <Avatar width={35} height={35} img={user1.user.image} />
            <h1 className="text-character-1">
              <button onClick={() => handleChangeU1(-1, u1, "u1")}>
                <FiChevronLeft />
              </button>
              <span>{user1.user.name}</span>
              <button onClick={() => handleChangeU1(+1, u1, "u1")}>
                <FiChevronRight />
              </button>
            </h1>
          </div>
          <div className="player-header">
            <Avatar width={35} height={35} img={user2.user.image} />
            <h1 className="text-character-2">
              <button
                type="button"
                onClick={() => handleChangeU2(-1, u2, "u2")}
              >
                <FiChevronLeft />
              </button>
              <span>{user2.user.name}</span>
              <button
                type="button"
                onClick={() => handleChangeU2(+1, u2, "u2")}
              >
                <FiChevronRight />
              </button>
            </h1>
          </div>
        </div>
        <PlayerTargets
          primary={user1.user.id}
          secondary={user2.user.id}
          data={data}
        />
      </div>
    </Section>
  );
}
