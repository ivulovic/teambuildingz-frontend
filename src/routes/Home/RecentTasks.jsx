import React from "react";
import { Link } from "react-router-dom";
import RecentCard from "./RecentCard";
import { games } from "../Activity/LaserTag/data";

const RecentTasks = () => {
  const recentLaserTag = games[0];

  const recentCardItems = [
    {
      id: 1,
      path: "laser-tag",
      title: recentLaserTag.name,
      date: recentLaserTag.date,
      members: recentLaserTag.participants,
    },
  ];
  return (
    <div className="RecentTasks">
      <div className="RecentTasks-header">
        <h4>Recent Activities</h4>
      </div>
      <div className="RecentTasks-cards">
        {recentCardItems.map((e) => (
          <Link to={`/activity/${e.path}/${recentLaserTag.id}`}>
            <RecentCard className={e.path} key={e.id} {...e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
