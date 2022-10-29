import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Search from "../../components/Search";

export default function Explore() {
  return (
    <div className="explore page-spacing">
      <Helmet>
        <title>Explore | Teambuildingz </title>
      </Helmet>
      <Search />
      <Outlet />
    </div>
  );
}
