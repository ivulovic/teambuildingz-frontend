import React from "react";
import { games } from "../Activity/LaserTag/data";
import Section from "../../components/Section";
import Activity from "../../components/Activity";

const RecentTasks = () => {
  const recentLaserTag = games[0];

  const recentCardItems = [
    {
      id: 1,
      path: "laser-tag",
      title: recentLaserTag.name,
      date: recentLaserTag.date,
      location: recentLaserTag.location,
      members: recentLaserTag.participants,
      organization: recentLaserTag.organization,
    },
  ];
  return <div>

    <Section
      title="Ваше активности"
      subtitle={"Активности у којима сте недавно учествовали"}
    > 
      {recentCardItems.map(activity => <Activity key={activity.id} {...activity} />)}
    </Section>
  </div>
};

export default RecentTasks;
