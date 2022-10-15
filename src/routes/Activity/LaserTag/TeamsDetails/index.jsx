import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetActivity } from "../../../../db";
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
  const data = useGetActivity(id);
  return (
    <div className="page-layout">
      <Helmet>
        <title>Game Statistic | Teambuildingz</title>
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
