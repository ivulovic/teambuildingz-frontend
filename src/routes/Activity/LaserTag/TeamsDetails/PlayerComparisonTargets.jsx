import { useMemo } from "react";
import BarChart from "../../../../components/Charts/Bar";
import { data } from "../data";
import Section from "../../../../components/Section";

export default function PlayerComparisonTargets({
    primary,
    secondary
}){
    const userStatistic = data.statistic.find(x => x.user.id === primary);
   
    const getPopulatedData = (key) => {
        const dataToMap = userStatistic[key].data.filter(x => x.target.id === secondary).sort((a,z) => z.count - a.count);
        
        const populatedData = dataToMap.map((hit) => {
            const {target: { id, name }} = hit;
            let comparedValue = 0;
            const targetObj = data.statistic.find(x => x.user.id === id);
            if(!targetObj){
                return ({...hit, compared: comparedValue, name: userStatistic.user.name +' '+ name });
            }
            const targeterData = targetObj[key].data.find(x => x.target.id === userStatistic.user.id);
            if(targeterData){
                comparedValue = targeterData.count;
            }
            return ({...hit, compared: comparedValue, name: userStatistic.user.name +' '+  name  });
        })
        return populatedData;
    }
    const hitsChartData = useMemo(() => getPopulatedData('hits'), [userStatistic, primary, secondary]);

    const woundsChartData = useMemo(() => getPopulatedData('wounds'), [userStatistic, primary, secondary]);

    

    return <div className="inline-list">

    <Section
        title="Wounds"
        subtitle={"Number of times persons wounded each other"}
    >
        <BarChart data={woundsChartData} />
    </Section>

    <Section
        title="Hits"
        subtitle={"Number of times persons hit each other"}
    >
        <BarChart data={hitsChartData} />
    </Section>
    </div>
}