import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import Player from "../../../components/Player";
import Section from "../../../components/Section";
import {
  useGetUserActivities,
  useGetUserLaserTagAverageData,
  useGetUserLaserWarAverageData,
  useGetUsers,
} from "../../../db";

export default function Profile() {
  const { id } = useParams();
  const users = useGetUsers();
  const user = useMemo(() => {
    return users.find((x) => x.id === id);
  }, [id, users]);
  const userActivities = useGetUserActivities(id);
  const userLaserWarData = useGetUserLaserWarAverageData(id);
  const userLaserTagData = useGetUserLaserTagAverageData(id);

  const userAvgStatistic = [userLaserTagData, userLaserWarData];

  if (!user) {
    return <Navigate to="/users" />;
  }
  return (
    <div className="profile">
      <Helmet>
        <title>{user.name}'s Profile | Teambuildingz</title>
      </Helmet>
      <Player width={70} height={70} image={user.image} name={user.name} />
      {userActivities.map((activity) => {
        const avgData = userAvgStatistic.find(
          (x) => x.activity.id === activity.id
        );
        return (
          <Section
            title={`Average ${activity.name} Statistic`}
            subtitle={`Participated in this activity ${activity.count} time${
              activity.count === 1 ? "" : "s"
            }`}
          >
            <div className="inline-list no-gap">
              {avgData.data.map((x) => (
                <ResponsiveContainer height={350} key={x.name}>
                  <BarChart
                    margin={{
                      top: 16,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                    height={40}
                    data={[x]}
                    barGap={0}
                    barCategoryGap={1}
                  >
                    <Bar
                      dataKey="value"
                      fill="var(--character-2)"
                      label={{
                        fill: "gray",
                        position: "top",
                        fontSize: 8,
                        textShadow: "10px 10px 10px black",
                      }}
                    />
                    <XAxis
                      dataKey="name"
                      allowDataOverflow={true}
                      tickCount={0}
                      interval={0}
                      tick={{
                        fontSize: "8px",
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ))}
            </div>
          </Section>
        );
      })}
    </div>
  );
}
