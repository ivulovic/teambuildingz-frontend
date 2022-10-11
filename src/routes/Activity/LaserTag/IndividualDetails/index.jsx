import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { games } from "../data";
import IndividualStatistic from "./IndividualStatistic";
import Targets from "./Targets";

export default function Details(){
    const params = useParams();
    const defaultGame = params.id ? games.find(x => x.id === params.id) : games[0];
    const defaultUser = !params.userId ? defaultGame.teams[0].participants[0] : defaultGame.participants.find(x => x.id === params.userId);
    return <div className="page-layout">
         <Helmet>
            <title>{defaultUser.name}'s Statistic | Teambuildingz </title>
        </Helmet>
        <IndividualStatistic id={defaultUser.id} />
        <Targets id={defaultUser.id} />
    </div>
}