import { Link } from "react-router-dom";
import "./style.scss";

const LIMIT = 4;

export default function Activity({ id, path, title, date, members, location }) {
  const membersToList = members.slice(0, LIMIT);

  const membersLeft = members.length - LIMIT;

  return (
    <div className="activity">
      <Link className="title" to={`/activity/${path}/${id}`}>
        {title}
      </Link>
      <div className="footer">
        <span className="location">
          {location}, {date}
        </span>
        <span className="members">
          {membersToList.map((x, i) => (
            <div key={x.id}>
              <Link to={`/users/${x.id}`}>{x.name}</Link>
              {i !== LIMIT - 1 ? <span>,&nbsp;</span> : <span>&nbsp;</span>}
            </div>
          ))}

          <Link to={`/activity/${path}/${id}/participants`}>
            and {membersLeft} others
          </Link>
        </span>
      </div>
    </div>
  );
}
