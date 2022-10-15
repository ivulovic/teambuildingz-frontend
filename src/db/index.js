

import { data as a05102022 } from './data/laser-tag/05102022';
import { Users } from './data/users';
export { Users } from './data/users';

export const activities = [
  a05102022,
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