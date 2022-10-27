import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Section from "../../../components/Section";
import UserCard from "../../../components/UserCard";
import { useGetActivity } from "../../../db";

export default function Participants() {
  const { id } = useParams();
  const activity = useGetActivity(id);
  if (!activity) {
    return <Navigate to="/" />;
  }
  console.log(activity);
  return (
    <>
      <Helmet>
        <title>
          Participants | {activity.activity.name} #{activity.id} | Teambuildingz
        </title>
      </Helmet>
      <div className="user">
        <Section
          title={"Participants"}
          subtitle={`Participants who were part of this ${activity.activity.name} activity`}
        >
          {activity.participants.map((user) => (
            <UserCard
              id={user.id}
              activityId={activity.id}
              username={user.username}
              image={user.image}
              bio={user.name}
            />
          ))}
        </Section>
      </div>
    </>
  );
}
