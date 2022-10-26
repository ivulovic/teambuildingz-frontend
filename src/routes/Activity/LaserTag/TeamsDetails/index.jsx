import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetActivities, useGetActivity } from "../../../../db";
import AccuracyComparison from "./AccuracyComparison";
import Achievements from "./Achievements";
import DamageDone from "./DamageDoneComparison";
import DamageGet from "./DamageGetComparison";
import DeathsComparison from "./DeathsComparison";
import HitsComparison from "./HitsComparison";
import KillsComparison from "./KillsComparison";
import PlayerComparison from "./PlayerComparison";
import RatingComparison from "./RatingComparison";
import WoundsComparison from "./WoundsComparison";

export default function Details() {
  const { id } = useParams();
  const [search] = useSearchParams();

  const data = useGetActivity(id);

  const activeComparison = useMemo(() => {
    const activityId = search.get("id");
    const u1 = search.get("u1");
    const u2 = search.get("u2");
    if (!search.toString() || !activityId || !u1 || !u2) {
      return `${data.activity.name} #${data.id}`;
    }

    const user1 = data.teams[0].participants[u1];
    const user2 = data.teams[1].participants[u2];
    return `${user1.name} vs ${user2.name} | ${data.activity.name} #${id} `;
  }, [search]);

  return (
    <div className="page-layout">
      <Helmet>
        <title>{activeComparison} | Teambuildingz</title>
      </Helmet>
      <Achievements data={data} />
      <PlayerComparison data={data} />
      <RatingComparison data={data} />
      <AccuracyComparison data={data} />
      <DamageDone data={data} />
      <DamageGet data={data} />
      <DeathsComparison data={data} />
      <KillsComparison data={data} />
      <HitsComparison data={data} />
      <WoundsComparison data={data} />
    </div>
  );
}
