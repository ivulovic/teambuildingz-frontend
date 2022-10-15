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
  return (
    <div className="user">
      <Section
        title={"Participants"}
        subtitle={`Participants who were part of this ${activity.name} activity`}
      >
        {activity.participants.map((user) => (
          <UserCard
            id={user.id}
            username={user.username}
            image={user.image}
            bio={user.name}
          />
        ))}
      </Section>
    </div>
  );
}