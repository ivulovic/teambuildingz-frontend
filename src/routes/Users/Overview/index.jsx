import Search from "../../../components/Search";
import UserCard from "../../../components/UserCard";
import { useGetUsers } from "../../../db";

export default function UsersOverview() {
  const users = useGetUsers();
  return (
    <div className="user">
      <Search />
      {users.map((user) => (
        <UserCard
          id={user.id}
          username={user.username}
          image={user.image}
          bio={user.name}
        />
      ))}
    </div>
  );
}
