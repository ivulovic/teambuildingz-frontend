import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import "./style.scss";

export default function UserCard({
  id,
  username,
  bio,
  image,
  activityId,
  path,
  className = "",
}) {
  const link = path || `/activity/laser-tag/${activityId}/users/${id}`;
  return (
    <Link className={`user-card ${className}`} to={link}>
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
