import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Player from "../../../components/Player";
import Section from "../../../components/Section";
import { useGetUserActivities, useGetUsers } from "../../../db";

export default function Profile() {
  const { id } = useParams();
  const users = useGetUsers();
  const user = useMemo(() => {
    return users.find((x) => x.id === id);
  }, [id, users]);
  const userActivities = useGetUserActivities(id);
  if (!user) {
    return <Navigate to="/users" />;
  }
  return (
    <div className="profile">
      <Helmet>
        <title>{user.name}'s Profile | Teambuildingz</title>
      </Helmet>
      <Player width={70} height={70} image={user.image} name={user.name} />
      {userActivities.map((activity) => (
        <Section
          title={activity.name}
          subtitle={`Participated in this activity ${activity.count} time${
            activity.count === 1 ? "" : "s"
          }`}
        />
      ))}
    </div>
  );
}
