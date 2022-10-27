import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import "./style.scss";

export default function UserCard({ id, username, bio, image, activityId }) {
  return (
    <Link
      className="user-card"
      to={`/activity/laser-tag/${activityId}/users/${id}`}
      // to={`/users/${id}`}
    >
      <div>
        <Avatar img={image} width={42} height={42} />
      </div>
      <div>
        <h1 className="username">{username}</h1>
        <h2 className="bio">{bio}</h2>
      </div>
    </Link>
  );
}
