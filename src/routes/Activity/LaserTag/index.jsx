import { games } from "./data";
import Activity from "../../../components/Activity";
import Section from "../../../components/Section";
import "./style.css";

export default function LaserTag() {
  const activities = games.map((x) => ({
    id: x.id,
    title: x.name,
    date: x.date,
    location: x.location,
    members: x.participants,
    organization: x.organization,
  }));

  return (
    <div>
      <Section
        title="Recent participations in the game Laser Tag"
        subtitle="Activities you recently played"
      >
        <ul className="activity-list">
          {activities.map((activity) => (
            <Activity key={activity.id} path="laser-tag" {...activity} />
          ))}
        </ul>
      </Section>
    </div>
  );
}
