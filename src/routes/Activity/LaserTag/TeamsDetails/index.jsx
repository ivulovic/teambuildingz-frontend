import { Helmet } from "react-helmet-async";
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

export default function Details(){
    return <div className="page-layout">
        <Helmet>
            <title>Game Statistic | Teambuildingz</title>
        </Helmet>
        <Achievements />
        <PlayerComparison />
        <RatingComparison />
        <AccuracyComparison />
        <DamageDone />
        <DamageGet />
        <DeathsComparison />
        <KillsComparison />
        <HitsComparison />
        <WoundsComparison />
    </div>
}