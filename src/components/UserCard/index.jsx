import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import "./style.scss";

export default function UserCard({ id, username, bio, image }) {
  return (
    <Link className="user-card" to={`/users/${id}`}>
      <div>
        <Avatar img={image} width={48} height={48} />
      </div>
      <div>
        <h1 className="username">{username}</h1>
        <h2 className="bio">{bio}</h2>
      </div>
    </Link>
  );
}
