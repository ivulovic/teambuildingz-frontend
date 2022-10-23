import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '12',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '31.10.2019.',
    participants: [   
        Users.bojans,
        Users.mirak,
        Users.ivanv,
        Users.boskov, 
        Users.stankob,
        Users.smiljandj,
        Users.draganat,
        Users.tijanat
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.bojans,
            Users.mirak,
            Users.ivanv,
            Users.boskov,            
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.stankob,
            Users.smiljandj,
            Users.draganat,
            Users.tijanat
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.stankob,
        Teams.Red.id,
        18.6,
        undefined,
        5.1,
        1521,
        {
            total: 78,
            data: [
                {target: Users.tijanat, count: 1},
                {target: Users.boskov, count: 16},
                {target: Users.mirak, count: 19},
                {target: Users.bojans, count: 16},
                {target: Users.ivanv, count: 26},
            ]
        },
        {
            total: 152, // 153
            data: [
                {target: Users.draganat, count: 1},
                // {target: Users.player4, count: 1},
                {target: Users.boskov, count: 48},
                {target: Users.mirak, count: 20},
                {target: Users.bojans, count: 56},
                {target: Users.ivanv, count: 27},
            ]
        },
        50,
        3900,
        7620,
        74,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Red.id,
        56.3,
        undefined,
        13.3,
        570,
        {
            total: 76,
            data: [
                {target: Users.tijanat, count: 1},
                {target: Users.boskov, count: 21},
                {target: Users.mirak, count: 21},
                {target: Users.bojans, count: 18},
                {target: Users.ivanv, count: 15},
            ]
        },
        {
            total: 56,
            data: [
                {target: Users.boskov, count: 27},
                {target: Users.mirak, count: 9},
                {target: Users.bojans, count: 13},
                {target: Users.ivanv, count: 7},
            ]
        },
        50,
        3800,
        2800,
        27,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        22.8,
        undefined,
        6.7,
        1653,
        {
            total: 111,
            data: [
                {target: Users.stankob, count: 1},
                {target: Users.tijanat, count: 1},
                {target: Users.boskov, count: 20},
                {target: Users.mirak, count: 28},
                {target: Users.bojans, count: 25},
                {target: Users.ivanv, count: 36},
            ]
        },
        {
            total: 181, // 183
            data: [
                // {target: Users.player4, count: 2},
                {target: Users.boskov, count: 58},
                {target: Users.mirak, count: 26},
                {target: Users.bojans, count: 64},
                {target: Users.ivanv, count: 33},
            ]
        },
        50,
        5550,
        9150,
        90,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Red.id,
        29.3,
        undefined,
        7.3,
        1701,
        {
            total: 125,
            data: [
                {target: Users.boskov, count: 25},
                {target: Users.mirak, count: 40},
                {target: Users.bojans, count: 32},
                {target: Users.ivanv, count: 28},
            ]
        },
        {
            total: 162,
            data: [
                {target: Users.stankob, count: 1},
                {target: Users.draganat, count: 1},
                {target: Users.smiljandj, count: 1},
                {target: Users.boskov, count: 64},
                {target: Users.mirak, count: 15},
                {target: Users.bojans, count: 56},
                {target: Users.ivanv, count: 24},
            ]
        },
        50,
        6250,
        8100,
        80,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.bojans,
        Teams.Blue.id,
        59.3,
        undefined,
        8.1,
        2420,
        {
            total: 196,
            data: [
                {target: Users.stankob, count: 56},
                {target: Users.tijanat, count: 56},
                {target: Users.draganat, count: 64},
                {target: Users.smiljandj, count: 13},
                {target: Users.boskov, count: 2},
                {target: Users.mirak, count: 2},
                {target: Users.ivanv, count: 3},
            ]
        },
        {
            total: 102, // 127
            data: [
                // {target: Users.player0, count: 2},
                {target: Users.stankob, count: 16},
                {target: Users.tijanat, count: 32},
                {target: Users.draganat, count: 25},
                // {target: Users.player4, count: 23},
                {target: Users.smiljandj, count: 18},
                {target: Users.boskov, count: 7},
                {target: Users.mirak, count: 1},
            ]
        },
        50,
        9800,
        6291,
        61,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.mirak,
        Teams.Blue.id,
        17.2,
        undefined,
        4.2,
        1672,
        {
            total: 71,
            data: [
                {target: Users.stankob, count: 20},
                {target: Users.tijanat, count: 15},
                {target: Users.draganat, count: 26},
                {target: Users.smiljandj, count: 9},
                {target: Users.bojans, count: 1},
            ]
        },
        {
            total: 117, // 148
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.stankob, count: 19},
                {target: Users.tijanat, count: 40},
                {target: Users.draganat, count: 28},
                // {target: Users.player4, count: 30},
                {target: Users.smiljandj, count: 21},
                {target: Users.boskov, count: 4},
                {target: Users.bojans, count: 2},
            ]
        },
        50,
        3550,
        7352,
        71,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.ivanv,
        Teams.Blue.id,
        26.1,
        undefined,
        5.9,
        1652,
        {
            total: 98,
            data: [
                {target: Users.stankob, count: 27},
                {target: Users.tijanat, count: 24},
                {target: Users.draganat, count: 33},
                {target: Users.smiljandj, count: 7},
                {target: Users.boskov, count: 1},
                {target: Users.mirak, count: 3},
                {target: Users.bojans, count: 3},
            ]
        },
        {
            total: 112, // 139
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.stankob, count: 26},
                {target: Users.tijanat, count: 28},
                {target: Users.draganat, count: 36},
                // {target: Users.player4, count: 26},
                {target: Users.smiljandj, count: 15},
                {target: Users.boskov, count: 4},
                {target: Users.bojans, count: 3},
            ]
        },
        50,
        4900,
        6901,
        67,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.boskov,
        Teams.Blue.id,
        77.6,
        undefined,
        6,
        3528,
        {
            total: 212,
            data: [
                {target: Users.stankob, count: 48},
                {target: Users.tijanat, count: 64},
                {target: Users.draganat, count: 58},
                {target: Users.smiljandj, count: 27},
                {target: Users.mirak, count: 4},
                {target: Users.bojans, count: 7},
                {target: Users.ivanv, count: 4},
            ]
        },
        {
            total: 85, // 139
            data: [
                {target: Users.stankob, count: 16},
                {target: Users.tijanat, count: 25},
                {target: Users.draganat, count: 20},
                // {target: Users.player4, count: 16},
                {target: Users.smiljandj, count: 21},
                {target: Users.bojans, count: 2},
                {target: Users.ivanv, count: 1},
            ]
        },
        50,
        10600,
        5040,
        49,
        0,
        0,
        undefined,
       ),
    ]
};
