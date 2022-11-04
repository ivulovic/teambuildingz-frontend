import { Link } from "react-router-dom";
import "./style.scss";

export default function Logo({ showMoto = true }) {
  return (
    <Link to="/" className="logo">
      <div>
        <h1>teambuildingz</h1>
        {showMoto ? <h2>not just a game .</h2> : <></>}
      </div>
    </Link>
  );
}
