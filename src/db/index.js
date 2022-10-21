

import { data as a05102022 } from './data/laser-war/05102022';

import { data as a05072018 } from './data/laser-tag/05072018';
import { data as a12072018 } from './data/laser-tag/12072018';
import { data as a17072018 } from './data/laser-tag/17072018';
import { data as a26072018 } from './data/laser-tag/26072018';
import { data as a14082018 } from './data/laser-tag/14082018';
import { data as a23082018 } from './data/laser-tag/23082018';
import { data as a26092019 } from './data/laser-tag/26092019';

import { Users } from './data/users';
export { Users } from './data/users';

export const activities = [
  a05102022,
  a26092019,
  a23082018,
  a14082018,
  a26072018,
  a17072018,
  a12072018,
  a05072018,
]

export function useGetUsers(){
  return Object.values(Users);
}

export function useGetActivity(id){
  return activities.find(x => x.id === id);
}
export function useGetUserActivities(id){ 
  let actvts = [];
  activities.forEach(activity => {
    console.log(activity, id)
    const hasParticipated = activity.participants.find(x => x.id === id);
    if(hasParticipated){
      const activityIndex = actvts.findIndex(y => y.name === activity.name);
      if(activityIndex > -1){
        actvts = actvts.map((a, i) => i === activityIndex ? ({
          ...a, 
          count: a.count + 1
        }) : a);
      } else {
        const actvty = {
          id: activity.id,
          name: activity.name,
          count: 1,
        };
        actvts.push(actvty);
      }
    }
  })
  return actvts;
}