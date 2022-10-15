import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "./style.scss";

export default function Users() {
  return (
    <div className="users">
      <Helmet>
        <title>Users | Teambuildingz</title>
      </Helmet>
      <Outlet />
    </div>
  );
}
