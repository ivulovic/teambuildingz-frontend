import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '14',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '13.11.2019.',
    participants: [   
        Users.ivanv,
        Users.stankob,
        Users.tijanat,
        Users.bojans,
        Users.draganat,
        Users.milenat,
        Users.boskov,
        Users.smiljandj,
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.ivanv,
            Users.stankob,
            Users.tijanat,
            Users.bojans
        ]
      },
      {
        ...Teams.Red,
        participants: [
          Users.draganat,
          Users.milenat,
          Users.boskov,
          Users.smiljandj,
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        17.6,
        undefined,
        5.6,
        1369,
        {
            total: 77,
            data:[
                {target: Users.smiljandj, count: 1},
                {target: Users.bojans, count: 23},
                {target: Users.tijanat, count: 11},
                {target: Users.ivanv, count: 22},
                {target: Users.stankob, count: 20},
            ]
        },
        {
            total: 160, // 161
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.smiljandj, count: 1},
                {target: Users.boskov, count: 2},
                {target: Users.milenat, count: 1},
                {target: Users.bojans, count: 33},
                {target: Users.tijanat, count: 43},
                {target: Users.ivanv, count: 37},
                {target: Users.stankob, count: 43},
            ]
        },
        50,
        3850,
        8035,
        79,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.milenat,
        Teams.Red.id,
        15,
        undefined,
        3.7,
        1723,
        {
            total: 63,
            data:[
                {target: Users.smiljandj, count: 1},
                {target: Users.draganat, count: 1},
                {target: Users.bojans, count: 10},
                {target: Users.tijanat, count: 16},
                {target: Users.ivanv, count: 15},
                {target: Users.stankob, count: 20},
            ]
        },
        {
            total: 149,
            data: [
                {target: Users.boskov, count: 3},
                {target: Users.bojans, count: 38},
                {target: Users.tijanat, count: 51},
                {target: Users.ivanv, count: 23},
                {target: Users.stankob, count: 34},
            ]
        },
        50,
        3150,
        7440,
        72,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.boskov,
        Teams.Red.id,
        75.8,
        undefined,
        5.7,
        3513,
        {
            total: 200,
            data:[
                {target: Users.smiljandj, count: 10},
                {target: Users.draganat, count: 2},
                {target: Users.milenat, count: 3},
                {target: Users.bojans, count: 50},
                {target: Users.tijanat, count: 36},
                {target: Users.ivanv, count: 60},
                {target: Users.stankob, count: 39},
            ]
        },
        {
            total: 97,
            data: [
                {target: Users.smiljandj, count: 1},
                {target: Users.bojans, count: 30},
                {target: Users.tijanat, count: 17},
                {target: Users.ivanv, count: 27},
                {target: Users.stankob, count: 22},
            ]
        },
        50,
        10000,
        4817,
        47,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Red.id,
        29.9,
        undefined,
        8.2,
        1382,
        {
            total: 114,
            data:[
                {target: Users.draganat, count: 1},
                {target: Users.boskov, count: 1},
                {target: Users.bojans, count: 29},
                {target: Users.tijanat, count: 24},
                {target: Users.ivanv, count: 31},
                {target: Users.stankob, count: 28},
            ]
        },
        {
            total: 147,
            data: [
                {target: Users.draganat, count: 1},
                {target: Users.boskov, count: 10},
                {target: Users.milenat, count: 1},
                {target: Users.bojans, count: 48},
                {target: Users.tijanat, count: 38},
                {target: Users.ivanv, count: 19},
                {target: Users.stankob, count: 30},
            ]
        },
        50,
        5700,
        7340,
        71,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.ivanv,
        Teams.Blue.id,
        30.6,
        undefined,
        5.4,
        2044,
        {
            total: 111,
            data: [
                {target: Users.smiljandj, count: 19},
                {target: Users.draganat, count: 37},
                {target: Users.boskov, count: 27},
                {target: Users.milenat, count: 23},
                {target: Users.bojans, count: 1},
                {target: Users.tijanat, count: 1},
                {target: Users.stankob, count: 3},
            ]
        },
        {
            total: 133,
            data: [
                {target: Users.smiljandj, count: 31},
                {target: Users.draganat, count: 22},
                {target: Users.boskov, count: 60},
                {target: Users.milenat, count: 15},
                {target: Users.bojans, count: 2},
                {target: Users.tijanat, count: 1},
                {target: Users.stankob, count: 2},
            ]
        },
        50,
        5550,
        6650,
        65,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.stankob,
        Teams.Blue.id,
        44,
        undefined,
        8.9,
        1478,
        {
            total: 131,
            data: [
                {target: Users.smiljandj, count: 30},
                {target: Users.draganat, count: 43},
                {target: Users.boskov, count: 22},
                {target: Users.milenat, count: 34},
                {target: Users.ivanv, count: 2},
            ]
        },
        {
            total: 114, // 116
            data: [
                // {target: Users.player0, count: 2},
                {target: Users.smiljandj, count: 28},
                {target: Users.draganat, count: 20},
                {target: Users.boskov, count: 39},
                {target: Users.milenat, count: 20},
                {target: Users.bojans, count: 4},
                {target: Users.ivanv, count: 3},
            ]
        },
        50,
        6550,
        5702,
        55,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Blue.id,
        62.4,
        undefined,
        6.8,
        2207,
        {
            total: 150,
            data: [
                {target: Users.smiljandj, count: 38},
                {target: Users.draganat, count: 43},
                {target: Users.boskov, count: 17},
                {target: Users.milenat, count: 51},
                {target: Users.ivanv, count: 1},
            ]
        },
        {
            total: 89, // 90
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.smiljandj, count: 24},
                {target: Users.draganat, count: 11},
                {target: Users.boskov, count: 36},
                {target: Users.milenat, count: 16},
                {target: Users.bojans, count: 1},
                {target: Users.ivanv, count: 1},
            ]
        },
        50,
        7500,
        4451,
        42,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.bojans,
        Teams.Blue.id,
        51.9,
        undefined,
        6.9,
        2253,
        {
            total: 156,
            data: [
                {target: Users.smiljandj, count: 48},
                {target: Users.draganat, count: 33},
                {target: Users.boskov, count: 30},
                {target: Users.milenat, count: 38},
                {target: Users.tijanat, count: 1},
                {target: Users.ivanv, count: 2},
                {target: Users.stankob, count: 4},
            ]
        },
        {
            total: 113,
            data: [
                {target: Users.smiljandj, count: 29},
                {target: Users.draganat, count: 23},
                {target: Users.boskov, count: 50},
                {target: Users.milenat, count: 10},
                {target: Users.ivanv, count: 1},
            ]
        },
        50,
        7800,
        5650,
        55,
        0,
        0,
        undefined
       )
    ]
};
