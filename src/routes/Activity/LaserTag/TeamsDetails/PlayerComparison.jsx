import { useState } from "react";
import Avatar from "../../../../components/Avatar";
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';

import { data } from "../data";
import Section from "../Section";
import PlayerTargets from "./PlayerTargets";

export default function PlayerComparison() {

  const getUserById = (id) => data.statistic.find((x) => x.user.id === id);

  const [u1, setU1] = useState(0);
  const [u2, setU2] = useState(0);

  const handleChange = (direction, value, type) => {
    const tIndex = type === 'u1' ? 0 : 1;
    const maxPlayers = data.teams[tIndex].participants.length - 1;
    if(direction < 0){
      const nextId = value - 1;
      return nextId <= 0 ? 0 : nextId;
    }
    if(direction > 0){
      const nextId = value + 1;
      return nextId >= maxPlayers ? maxPlayers : nextId;
    }
  }
  const handleChangeU1 = (direction, value, type) => {
    setU1(handleChange(direction, value, type));
  }
  const handleChangeU2 = (direction, value, type) => {
    setU2(handleChange(direction, value, type));
  }

  const user1 = getUserById(data.teams[0].participants[u1].id);
  const user2 = getUserById(data.teams[1].participants[u2].id)

  if(!user2)return <></>
  return (
    <Section
    // title="Compare Team Members"
    // subtitle="Compare different users and check out their performance"
>
    <div className="individual-statistic">
      <div className="inline-list">
        <div className="player-header">
          <Avatar
            width={35}
            height={35}
            img={user1.user.image}
          />
          <h1 className="text-character-1">
            <button onClick={() => handleChangeU1(-1, u1, 'u1')}>
            <FiChevronLeft />
            </button>
            <span>{user1.user.name}</span>
            <button onClick={() => handleChangeU1(+1, u1, 'u1')}>
            <FiChevronRight />
            </button>
            </h1>
        </div>
        <div className="player-header">
          <Avatar
            width={35}
            height={35}
            img={user2.user.image}
          />
          <h1 className="text-character-2">
            <button type="button" onClick={() => handleChangeU2(-1, u2, 'u2')}>
              <FiChevronLeft />
            </button>
            <span>{user2.user.name}</span>
            <button type="button" onClick={() => handleChangeU2(+1, u2, 'u2')}>
              <FiChevronRight />
            </button>
          </h1>
        </div>
      </div>
      {/* <div className="inline-list">
        <div
          className="player-achievements"
          title="Times you took all Health Points from a single player"
        >
          <h2 className="uppercase">Kills</h2>
          <div>
            <RiKnifeBloodLine/>
            <div className="inline-list">
              <h1 className="text-character-1">{user1.kills}</h1>
              <h1 className="text-character-2">{user2.kills}</h1>
            </div>
          </div>
        </div>
        <div
          className="player-achievements"
          title="Times you took all Health Points from a single player"
        >
          <h2 className="uppercase">Accuracy</h2>
          <div>
            <BiTargetLock />
            <div className="inline-list">
              <h1 className="text-character-1">{user1.accuracy}%</h1>
              <h1 className="text-character-2">{user2.accuracy}%</h1>
            </div>
          </div>
        </div>
        <div
          className="player-achievements"
          title="Times you took all Health Points from a single player"
        >
          <h2 className="uppercase">Deaths</h2>
          <div>
            <GiHastyGrave />
            <div className="inline-list">
              <h1 className="text-character-1">{user1.gameOver}</h1>
              <h1 className="text-character-2">{user2.gameOver}</h1>
            </div>
          </div>
        </div>
      </div> */}
      <PlayerTargets  primary={user1.user.id} secondary={user2.user.id} />
      {/* <PlayerComparisonTargets primary={user1.user.id} secondary={user2.user.id}  /> */}
    </div>
</Section>
  );
}
