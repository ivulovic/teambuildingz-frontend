import {
  useGetActivities,
  useGetActivity,
  useGetAllParticipantPerActivity,
} from "../../../db";
import Section from "../../../components/Section";
import AvgLaserTagComparison from "./AvgLaserTagComparison";
import AvgLaserWarComparison from "./AvgLaserWarComparison";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Activities } from "../../../db/data/activities";

export default function ExploreOverview() {
  const [search] = useSearchParams();
  const allActivities = useGetActivities();
  const [laserWar, laserTag] = useGetActivities();
  const laserWarAvgData = useGetActivity(laserWar.id);
  const laserTagAvgData = useGetActivity(laserTag.id);
  const laserWarParticipants = useGetAllParticipantPerActivity(laserWar.id);
  const laserTagParticipants = useGetAllParticipantPerActivity(laserTag.id);
  const activeComparison = useMemo(() => {
    const activityId = search.get("id");
    const u1 = search.get("u1");
    const u2 = search.get("u2");
    if (!search.toString() || !activityId || !u1 || !u2) {
      return "Explore";
    }

    const activity = allActivities.find((x) => x.id === activityId);
    const participants =
      activityId === Activities.LaserTag.id
        ? laserTagParticipants
        : laserWarParticipants;
    const user1 = participants[u1];
    const user2 = participants[u2];
    return `${user1.name} vs ${user2.name} | ${activity.name} | Explore`;
  }, [search]);

  return (
    <>
      <Helmet>
        <title>{activeComparison} | Teambuildingz </title>
      </Helmet>
      <Section
        title={laserWar.name}
        subtitle={`Average ${laserWar.name} statistic comparison based on ${
          laserWar.data.length
        } record${laserWar.data.length > 1 ? "s" : ""}`}
      >
        <AvgLaserWarComparison
          participants={laserWarParticipants}
          data={laserWarAvgData}
        />
      </Section>
      <Section
        title={laserTag.name}
        subtitle={`Average ${laserTag.name} statistic comparison based on ${
          laserTag.data.length
        } record${laserTag.data.length > 1 ? "s" : ""}`}
      >
        <AvgLaserTagComparison
          participants={laserTagParticipants}
          data={laserTagAvgData}
        />
      </Section>
    </>
  );
}
