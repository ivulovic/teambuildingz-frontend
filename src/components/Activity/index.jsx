import { Link } from "react-router-dom";
import "./style.scss";

const LIMIT = 6;

export default function Activity({ id, path, title, date, members, location }) {
  const list = members.slice(0, LIMIT);
  const membersLeft = members.length - LIMIT;
  return (
    <div className="activity">
      <Link className="title" to={`/activity/${path}/${id}`}>
        {title}
      </Link>
      <div className="footer">
        <span className="members">
          {list.map((x, i) => (
            <div key={x.id} className="user-image">
              <Link
                // to={`/users/${x.id}`}
                to={`/activity/${path}/${id}/users/${x.id}`}
                style={{
                  backgroundImage: `url(${x.image})`,
                }}
              >
                <span>{x.name}</span>
              </Link>
            </div>
          ))}
          <Link
            className="more-members"
            to={`/activity/${path}/${id}/participants`}
          >
            + {membersLeft} more
          </Link>
        </span>
        <span className="location">{date}</span>
      </div>
    </div>
  );
}
