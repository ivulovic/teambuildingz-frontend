import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { activities } from "../../../../db";
import useActivityById from "../../../../hooks/useActivityById";
import IndividualStatistic from "./IndividualStatistic";
import Targets from "./Targets";

export default function Details(){
    const params = useParams();
    const data = useActivityById();

    if(!data){
        return <Navigate to="/" />
    }

    const defaultGame = params.id ? activities.find(x => x.id === params.id) : activities[0];
    const defaultUser = !params.userId ? defaultGame.teams[0].participants[0] : defaultGame.participants.find(x => x.id === params.userId);
    return <div className="page-layout">
         <Helmet>
            <title>{defaultUser.name}'s Statistic | Teambuildingz </title>
        </Helmet>
        <IndividualStatistic id={defaultUser.id} data={data} />
        <Targets id={defaultUser.id} data={data} />
    </div>
}