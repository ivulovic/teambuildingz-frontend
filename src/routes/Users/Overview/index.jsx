import Section from "../../../components/Section";
import UserCard from "../../../components/UserCard";
import { useGetUsers } from "../../../db";

export default function UsersOverview() {
  const users = useGetUsers();
  return (
    <div className="user">
      <Section title={"Users"} subtitle={"List of the users"}>
        {users.map((user) => (
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
