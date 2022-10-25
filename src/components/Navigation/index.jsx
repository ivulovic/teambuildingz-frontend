import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { RiGamepadLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Link = ({ text, icon, to, exact }) => {
  return (
    <NavLink end={exact} to={to} className="navigation-link">
      {icon}
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-links navigation-left">
        <Link
          to="/"
          exact={true}
          text="Home"
          icon={<HiOutlineHome className="navigation-icon" />}
        />
        <Link
          to="/explore"
          text="Explore"
          icon={<RiGamepadLine className="navigation-icon" />}
        />
        {/* <div className="navigation-addMenu">
          <Link to="/" icon={<BsPlusLg className="font-sm text-white" />} />
        </div> */}
        {/* <Link
          to="/messages"
          text="Messages"
          icon={<AiOutlineMessage className="navigation-icon" />}
        />
        <Link
          to="/profile"
          text="Profile"
          icon={<TiUserOutline className="navigation-icon" />}
        /> */}
      </div>
    </div>
  );
};

export default Navigation;
