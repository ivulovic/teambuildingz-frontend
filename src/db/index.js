

import { data as a05102022 } from './data/laser-war/05102022';

import { data as a05072018 } from './data/laser-tag/05072018';
import { data as a12072018 } from './data/laser-tag/12072018';
import { data as a17072018 } from './data/laser-tag/17072018';
import { data as a26072018 } from './data/laser-tag/26072018';
import { data as a14082018 } from './data/laser-tag/14082018';
import { data as a23082018 } from './data/laser-tag/23082018';
import { data as a26092019 } from './data/laser-tag/26092019';
import { data as a04102019 } from './data/laser-tag/04102019';
import { data as a18102019 } from './data/laser-tag/18102019';
import { data as a24102019 } from './data/laser-tag/24102019';
import { data as a31102019 } from './data/laser-tag/31102019';
import { data as a06112019 } from './data/laser-tag/06112019';
import { data as a13112019 } from './data/laser-tag/13112019';

import { Users } from './data/users';
import { Activities } from './data/activities';
export { Users } from './data/users';

const laserTag = {
  ...Activities.LaserTag,
  data: [
    a13112019,
    a06112019,
    a31102019,
    a24102019,
    a18102019,
    a04102019,
    a26092019,
    a23082018,
    a14082018,
    a26072018,
    a17072018,
    a12072018,
    a05072018,
  ]
};

const laserWar = {
  ...Activities.LaserWar,
  data: [
    a05102022,
  ]
};

export const activities = [
  ...laserWar.data,
  ...laserTag.data
]

export function useGetUsers(){
  return Object.values(Users);
}

export function useGetActivity(id){
  return activities.find(x => x.id === id);
}
export function useGetUserActivities(id){ 
  let activitiesAggregated = [];
  activities.forEach(({activity, participants}) => {
    const hasParticipated = participants.find(x => x.id === id);
    if(hasParticipated){
      const activityIndex = activitiesAggregated.findIndex(y => y.name === activity.name);
      if(activityIndex > -1){
        activitiesAggregated = activitiesAggregated.map((a, i) => i === activityIndex ? ({
          ...a, 
          count: a.count + 1
        }) : a);
      } else {
        const result = {
          id: activity.id,
          name: activity.name,
          count: 1,
        };
        activitiesAggregated.push(result);
      }
    }
  });
  return activitiesAggregated;
}

export function useGetUserLaserWarAverageData(userId){
  const data = laserWar.data.filter(activity => activity.participants.find(participant => participant.id === userId));
  const avgData = {
    rating: 0,
    accuracy: 0,
    shotFired: 0,
    hits: 0,
    kills: 0,
    wounds: 0,
  }
  for(let i = 0; i < data.length; i++){
    const activity = data[i].statistic.find(x => x.user.id === userId);
    avgData.rating += activity.rating;
    avgData.kills += activity.kills;
    avgData.accuracy += activity.accuracy;
    avgData.shotFired += activity.shotFired;
    avgData.hits += activity.hits.total;
    avgData.wounds += activity.wounds.total;
  }
  const length = data.length;
  const avg = {
    data: [
      // {name: "APROXIMATE RATING", value: Number((avgData.rating / length)*(1+(data.length === 1 ? 0 : data.length/10))).toFixed(2)},
      ...Object.keys(avgData).map((key) => ({name: `AVERAGE ${key.toUpperCase()}`, value: Number(avgData[key] / length).toFixed(2)})),
    ],
    activity: Activities.LaserWar,
    count: data.length,
  }
  return avg;
}

export function useGetUserLaserTagAverageData(userId){
  const data = laserTag.data.filter(activity => activity.participants.find(participant => participant.id === userId));
  const avgData = {
    rating: 0,
    accuracy: 0,
    shotFired: 0,
    hits: 0,
    wounds: 0,
  }
  for(let i = 0; i < data.length; i++){
    const activity = data[i].statistic.find(x => x.user.id === userId);
    avgData.rating += activity.rating;
    avgData.accuracy += activity.accuracy;
    avgData.shotFired += activity.shotFired;
    avgData.hits += activity.hits.total;
    avgData.wounds += activity.wounds.total;
  }
  const length = data.length;
  const avg = {
    data: [
      // {name: "APROXIMATE RATING", value: Number((avgData.rating / length)*(1+(data.length === 1 ? 0 : data.length/10))).toFixed(2)},
      ...Object.keys(avgData).map((key) => ({name: `AVERAGE ${key.toUpperCase()}`, value: Number(avgData[key] / length).toFixed(2)})),
    ],
    activity: Activities.LaserTag,
    count: data.length,
  }
  return avg;
}