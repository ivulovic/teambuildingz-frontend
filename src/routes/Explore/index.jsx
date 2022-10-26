import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function Explore() {
  return (
    <div className="explore page-spacing">
      <Helmet>
        <title>Explore | Teambuildingz </title>
      </Helmet>
      <Outlet />
    </div>
  );
}
