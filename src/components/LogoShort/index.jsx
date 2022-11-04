import { Link } from "react-router-dom";
import "./style.scss";

export default function LogoShort() {
  return (
    <Link to="/" className="logo-short">
      <div>
        <h1>tz</h1>
      </div>
    </Link>
  );
}
