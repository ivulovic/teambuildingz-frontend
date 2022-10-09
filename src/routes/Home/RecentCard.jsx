import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Card = ({ id, title, className, members, date }) => {
  return (
    <div className={`ui-recent-card`}>
      <div className={`ui-recent-card-bg ${className}`}></div>
      <div className="ui-recent-card-header">
        <div className="ui-recent-card-header-left">
          <span className="link ui-recent-card-header-button">
            {date}
          </span>
        </div>
      </div>
      <div className="ui-recent-card-body">
        <div className="ui-recent-card-body-title font-xxl">{title}</div>
      </div>
      <div className="ui-recent-card-footer">
        <div className="ui-recent-card-footer-users">
          {members.map((x) => (
            <Link to={`/activity/laser-tag/${id}/users/${x.id}`}>
              <Avatar widthd={25} height={35} img={x.image} />
            </Link>
          ))}
          {/* <Avatar
            widthd={35}
            height={35}
            style={{
              background: "#fff",
              color: "#000",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center"
            }}
            text={"+2"}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
