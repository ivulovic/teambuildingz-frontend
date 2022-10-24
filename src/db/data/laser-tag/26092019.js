import { Activities } from "../activities";
import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '7',
    activity: Activities.LaserTag,
    date: '26.09.2019.',
    participants: [   
        Users.ivanv, // ivanm
        Users.tijanat,
        Users.bojans,
        Users.anam,
        Users.mirak, 
        Users.milenat,
        Users.draganat,
        Users.stankob,
        Users.boskov,
        Users.smiljandj
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.ivanv,
            Users.tijanat,
            Users.bojans,
            Users.anam,
            Users.mirak,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.milenat,
            Users.draganat,
            Users.stankob,
            Users.boskov,
            Users.smiljandj
        ]
      },
    ],
    statistic:[
       makeStatistic(
        Users.ivanv,
        Teams.Blue.id,
        9,
        undefined,
        4.8,
        624,
        {
            total: 30,
            data: [
                {target: Users.draganat, count: 8},
                {target: Users.boskov, count: 5},
                {target: Users.milenat, count: 4},
                {target: Users.smiljandj, count: 6},
                {target: Users.stankob, count: 6},
                {target: Users.mirak, count: 1},
            ]
        },
        {
            total: 121,
            data: [
                {target: Users.draganat, count: 11},
                {target: Users.boskov, count: 52},
                {target: Users.milenat, count: 15},
                {target: Users.smiljandj, count: 24},
                {target: Users.stankob, count: 16},
                {target: Users.anam, count: 1},
                {target: Users.tijanat, count: 2},
            ]
        },
        50,
        1500,
        6040,
        58,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Blue.id,
        58.9,
        undefined,
        9.7,
        1619,
        {
            total: 157,
            data: [
                {target: Users.draganat, count: 41},
                {target: Users.boskov, count: 25},
                {target: Users.milenat, count: 41},
                {target: Users.smiljandj, count: 27},
                {target: Users.stankob, count: 20},
                {target: Users.ivanv, count: 2},
                {target: Users.mirak, count: 1},
            ]
        },
        {
            total: 104, // 105
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.draganat, count: 5},
                {target: Users.boskov, count: 32},
                {target: Users.milenat, count: 28},
                {target: Users.smiljandj, count: 25},
                {target: Users.stankob, count: 14},
            ]
        },
        50,
        7850,
        5210,
        48,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.bojans,
        Teams.Blue.id,
        49.5,
        undefined,
        8.9,
        1413,
        {
            total: 126,
            data: [
                {target: Users.draganat, count: 27},
                {target: Users.boskov, count: 25},
                {target: Users.milenat, count: 22},
                {target: Users.smiljandj, count: 30},
                {target: Users.stankob, count: 21},
                {target: Users.anam, count: 1},
            ]
        },
        {
            total: 97, // 99
            data: [
                // {target: Users.player0, count: 2},
                {target: Users.draganat, count: 3},
                {target: Users.boskov, count: 35},
                {target: Users.milenat, count: 11},
                {target: Users.smiljandj, count: 26},
                {target: Users.stankob, count: 17},
                {target: Users.anam, count: 2},
                {target: Users.mirak, count: 3},
            ]
        },
        50,
        6300,
        4852,
        48,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.anam,
        Teams.Blue.id,
        14.6,
        undefined,
        4.5,
        907,
        {
            total: 41,
            data: [
                {target: Users.draganat, count: 6},
                {target: Users.boskov, count: 1},
                {target: Users.milenat, count: 6},
                {target: Users.smiljandj, count: 12},
                {target: Users.stankob, count: 13},
                {target: Users.bojans, count: 2},
                {target: Users.ivanv, count: 1},
            ]
        },
        {
            total: 100, // 101
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.draganat, count: 8},
                {target: Users.boskov, count: 26},
                {target: Users.milenat, count: 17},
                {target: Users.smiljandj, count: 25},
                {target: Users.stankob, count: 23},
                {target: Users.bojans, count: 1},
            ]
        },
        50,
        2050,
        5001,
        48,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.mirak,
        Teams.Blue.id,
        22.8,
        undefined,
        6.4,
        1259,
        {
            total: 80,
            data: [
                {target: Users.draganat, count: 16},
                {target: Users.boskov, count: 11},
                {target: Users.milenat, count: 15},
                {target: Users.smiljandj, count: 15},
                {target: Users.stankob, count: 20},
                {target: Users.bojans, count: 3},
            ]
        },
        {
            total: 131,
            data: [
                {target: Users.draganat, count: 14},
                {target: Users.boskov, count: 31},
                {target: Users.milenat, count: 17},
                {target: Users.smiljandj, count: 41},
                {target: Users.stankob, count: 26},
                {target: Users.ivanv, count: 1},
                {target: Users.tijanat, count: 1},
            ]
        },
        50,
        4000,
        6550,
        63,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.milenat,
        Teams.Red.id,
        33.3,
        undefined,
        4.4,
        2058,
        {
            total: 90,
            data: [
                {target: Users.draganat, count: 2},
                {target: Users.bojans, count: 11},
                {target: Users.ivanv, count: 15},
                {target: Users.anam, count: 17},
                {target: Users.tijanat, count: 28},
                {target: Users.mirak, count: 17},
            ]
        },
        {
            total: 97,
            data: [
                {target: Users.draganat, count: 3},
                {target: Users.boskov, count: 3},
                {target: Users.smiljandj, count: 1},
                {target: Users.stankob, count: 2},
                {target: Users.bojans, count: 22},
                {target: Users.ivanv, count: 4},
                {target: Users.anam, count: 6},
                {target: Users.tijanat, count: 41},
            ]
        },
        50,
        4500,
        4850,
        45,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        15.5,
        undefined,
        4.6,
        2250,
        {
            total: 45,
            data: [
                {target: Users.milenat, count: 3},
                {target: Users.smiljandj, count: 1},
                {target: Users.bojans, count: 3},
                {target: Users.ivanv, count: 11},
                {target: Users.anam, count: 8},
                {target: Users.tijanat, count: 5},
                {target: Users.mirak, count: 14},
            ]
        },
        {
            total: 105,
            data: [
                {target: Users.boskov, count: 2},
                {target: Users.milenat, count: 2},
                {target: Users.smiljandj, count: 1},
                {target: Users.stankob, count: 2},
                {target: Users.bojans, count: 27},
                {target: Users.ivanv, count: 8},
                {target: Users.anam, count: 8},
                {target: Users.tijanat, count: 41},
            ]
        },
        50,
        2250,
        5250,
        48,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.stankob,
        Teams.Red.id,
        45.8,
        undefined,
        7.8,
        1293,
        {
            total: 101,
            data: [
                {target: Users.draganat, count: 2},
                {target: Users.boskov, count: 1},
                {target: Users.milenat, count: 2},
                {target: Users.bojans, count: 17},
                {target: Users.ivanv, count: 16},
                {target: Users.anam, count: 23},
                {target: Users.tijanat, count: 14},
                {target: Users.mirak, count: 26},
            ]
        },
        {
            total: 84,
            data: [
                {target: Users.boskov, count: 4},
                {target: Users.bojans, count: 21},
                {target: Users.ivanv, count: 6},
                {target: Users.anam, count: 13},
                {target: Users.tijanat, count: 20},
                {target: Users.mirak, count: 20},
            ]
        },
        50,
        5050,
        4200,
        41,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.boskov,
        Teams.Red.id,
        102.1,
        undefined,
        5.6,
        3371,
        {
            total: 190,
            data: [
                {target: Users.draganat, count: 2},
                {target: Users.milenat, count: 3},
                {target: Users.smiljandj, count: 5},
                {target: Users.stankob, count: 4},
                {target: Users.bojans, count: 35},
                {target: Users.ivanv, count: 52},
                {target: Users.anam, count: 26},
                {target: Users.tijanat, count: 32},
            ]
        },
        {
            total: 68,
            data: [
                {target: Users.stankob, count: 1},
                {target: Users.bojans, count: 25},
                {target: Users.ivanv, count: 5},
                {target: Users.anam, count: 1},
                {target: Users.tijanat, count: 25},
                {target: Users.mirak, count: 11},
            ]
        },
        50,
        9500,
        3400,
        30,
        0,
        0,
        undefined,
       ),

       makeStatistic(
        Users.smiljandj,
        Teams.Red.id,
        58.3,
        undefined,
        9.3,
        1541,
        {
            total: 143,
            data: [
                {target: Users.draganat, count: 1},
                {target: Users.milenat, count: 1},
                {target: Users.bojans, count: 26},
                {target: Users.ivanv, count: 24},
                {target: Users.anam, count: 25},
                {target: Users.tijanat, count: 25},
                {target: Users.mirak, count: 41},
            ]
        },
        {
            total: 96,
            data: [
                {target: Users.draganat, count: 1},
                {target: Users.boskov, count: 5},
                {target: Users.bojans, count: 30},
                {target: Users.ivanv, count: 6},
                {target: Users.anam, count: 12},
                {target: Users.tijanat, count: 27},
                {target: Users.mirak, count: 15},
            ]
        },
        50,
        7150,
        4800,
        46,
        0,
        0,
        undefined,
       )
    ]
};
