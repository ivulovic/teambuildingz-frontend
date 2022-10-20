

import { data as a05102022 } from './data/laser-war/05102022';

import { data as a05072018 } from './data/laser-tag/05072018';
import { data as a12072018 } from './data/laser-tag/12072018';
import { data as a17072018 } from './data/laser-tag/17072018';

import { Users } from './data/users';
export { Users } from './data/users';

export const activities = [
  a05102022,
  a05072018,
  a12072018,
  a17072018
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
    const hasParticipated = activity.participants.find(x => x.id === id);
    if(hasParticipated){
      const activityIndex = actvts.findIndex(x => x.name === activity.name);
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