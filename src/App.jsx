import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import MobileLayout from "./components/MobileLayout";
import Home from "./routes/Home";
import Activity from "./routes/Activity";
import LaserTag from "./routes/Activity/LaserTag";
import LaserTagIndividualDetails from "./routes/Activity/LaserTag/IndividualDetails";
import LaserTagTeamsDetails from "./routes/Activity/LaserTag/TeamsDetails";

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
            <MobileLayout>
              <Activity />
            </MobileLayout>
          }
          path="/activity"
        >
            <Route path="" element={<Navigate to="laser-tag"/>} />
            <Route path="laser-tag">
              <Route path="" element={<LaserTag />} />
              <Route path=":id">
                <Route path="" element={<LaserTagIndividualDetails/>} />
                <Route path="users">
                  <Route path="" element={<LaserTagIndividualDetails/>} />
                  <Route path=":userId" element={<LaserTagIndividualDetails/>} />
                </Route>
                <Route path="teams" element={<LaserTagTeamsDetails/>} />
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
