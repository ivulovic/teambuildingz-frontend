import React from "react";
import { activities } from "../../db";
import Activity from "../../components/Activity";

const RecentTasks = () => {
  const recentCardItems = activities.map((recentLaserTag) => ({
    id: recentLaserTag.id,
    path: "laser-tag",
    title: recentLaserTag.activity.name,
    date: recentLaserTag.date,
    location: recentLaserTag.activity.organization.location,
    members: recentLaserTag.participants,
  }));

  return (
    <div className="recent-tasks">
      {recentCardItems.map((activity) => (
        <Activity key={activity.id} {...activity} />
      ))}
    </div>
  );
};

export default RecentTasks;
