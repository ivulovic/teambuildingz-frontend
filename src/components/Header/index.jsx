import { Link } from "react-router-dom";
import Logo from "../Logo";
import { BiLogInCircle } from "react-icons/bi";
// import { RiSettings4Line } from "react-icons/ri";
// import { FiSettings } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";
import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      {/* <div className="controls">
        <FiSettings />
      </div> */}
      <Logo />
      <div className="controls">
        <Link to="/sign-in">
          <BiLogInCircle />
        </Link>
        {/* <Link to="/settings">
          <IoSettingsOutline />
        </Link> */}
      </div>
    </header>
  );
}
