import React from "react";
import { activities } from "../../db";
import Section from "../../components/Section";
import Activity from "../../components/Activity";

const RecentTasks = () => {
  const recentLaserTag = activities[0];

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

    {/* <Section
      title="Your activities"
      subtitle={"Last activities you've been part of:"}
    >  */}
      {recentCardItems.map(activity => <Activity key={activity.id} {...activity} />)}
    {/* </Section> */}
  </div>
};

export default RecentTasks;
