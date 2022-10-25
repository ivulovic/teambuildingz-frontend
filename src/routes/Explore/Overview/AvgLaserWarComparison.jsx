import { useMemo, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Section from "../../../components/Section";
import { useGetUserLaserWarAverageData } from "../../../db";
import { Activities } from "../../../db/data/activities";
import ChartComparison from "./ChartComparison";

export default function AvgLaserWarComparison({ participants }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [search] = useSearchParams();
  const [u1, setU1] = useState(
    search.get("id") === Activities.LaserWar.id ? Number(search.get("u1")) : 0
  );
  const [u2, setU2] = useState(
    search.get("id") === Activities.LaserWar.id ? Number(search.get("u2")) : 1
  );

  const handleChange = (direction, v, type) => {
    const value = Number(v);
    const maxPlayers = participants.length - 1;
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
      `${location.pathname}?id=${Activities.LaserWar.id}&u1=${newV}&u2=${u2}`,
      { replace: true }
    );
  };
  const handleChangeU2 = (direction, value, type) => {
    const newV = handleChange(direction, value, type);
    setU2(newV);
    navigate(
      `${location.pathname}?id=${Activities.LaserWar.id}&u1=${u1}&u2=${newV}`,
      { replace: true }
    );
  };

  const user1 = useGetUserLaserWarAverageData(participants[u1].id);
  const user2 = useGetUserLaserWarAverageData(participants[u2].id);
  const data = useMemo(() => {
    return user1.data.map((x, i) => ({
      name: x.name,
      count: Number(x.value),
      compared: Number(user2.data[i].value),
    }));
  }, [user1, user2]);
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
        <ChartComparison
          primary={user1.user.id}
          secondary={user2.user.id}
          data={data}
        />
      </div>
    </Section>
  );
}
