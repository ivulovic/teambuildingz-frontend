import {
  useGetActivities,
  useGetActivity,
  useGetAllParticipantPerActivity,
} from "../../../db";
import Section from "../../../components/Section";
import AvgLaserTagComparison from "./AvgLaserTagComparison";
import AvgLaserWarComparison from "./AvgLaserWarComparison";

export default function ExploreOverview() {
  const [laserWar, laserTag] = useGetActivities();
  const laserWarAvgData = useGetActivity(laserWar.id);
  const laserTagAvgData = useGetActivity(laserTag.id);
  const laserWarParticipants = useGetAllParticipantPerActivity(laserWar.id);
  const laserTagParticipants = useGetAllParticipantPerActivity(laserTag.id);
  return (
    <>
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
