import { Helmet } from "react-helmet-async";
import RecentTasks from "./RecentTasks";
import "./style.scss";

export default function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Teambuildingz</title>
      </Helmet>
      <RecentTasks />
    </div>
  );
}
