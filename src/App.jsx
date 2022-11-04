import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import MobileLayout from "./components/MobileLayout";
import Home from "./routes/Home";
import Activity from "./routes/Activity";
import LaserTag from "./routes/Activity/LaserTag";
import LaserTagIndividualDetails from "./routes/Activity/LaserTag/IndividualDetails";
import LaserTagTeamsDetails from "./routes/Activity/LaserTag/TeamsDetails";
import Users from "./routes/Users";
import UsersOverview from "./routes/Users/Overview";
import Profile from "./routes/Users/Profile";
import Participants from "./routes/Activity/Participants";
import Explore from "./routes/Explore";
import ExploreOverview from "./routes/Explore/Overview";
import ExploreDetails from "./routes/Explore/Details";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <MobileLayout>
              <Home />
            </MobileLayout>
          }
          path="/"
        />
        <Route
          element={
            <MobileLayout showHeader={false} showNavigation={false}>
              <SignIn />
            </MobileLayout>
          }
          path="/sign-in"
        />
        <Route
          element={
            <MobileLayout showHeader={false} showNavigation={false}>
              <SignUp />
            </MobileLayout>
          }
          path="/sign-up"
        />
        <Route
          element={
            <MobileLayout>
              <Activity />
            </MobileLayout>
          }
          path="/activity"
        >
          <Route path="" element={<Navigate to="laser-tag" />} />
          <Route path="laser-tag">
            <Route path="" element={<LaserTag />} />
            <Route path=":id">
              <Route path="" element={<LaserTagIndividualDetails />} />
              <Route path="participants" element={<Participants />} />
              <Route path="users">
                <Route path="" element={<LaserTagIndividualDetails />} />
                <Route path=":userId" element={<LaserTagIndividualDetails />} />
              </Route>
              <Route path="statistic" element={<LaserTagTeamsDetails />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="/users"
          element={
            <MobileLayout>
              <Users />
            </MobileLayout>
          }
        >
          <Route path="">
            <Route path="" element={<UsersOverview />} />
            <Route path=":id">
              <Route path="" element={<Profile />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="/explore"
          element={
            <MobileLayout>
              <Explore />
            </MobileLayout>
          }
        >
          <Route path="">
            <Route path="" element={<ExploreOverview />} />
            <Route path=":id">
              <Route path="" element={<ExploreDetails />} />
            </Route>
          </Route>
        </Route>
        <Route
          element={
            <MobileLayout>
              <div>404</div>
            </MobileLayout>
          }
          path="*"
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
