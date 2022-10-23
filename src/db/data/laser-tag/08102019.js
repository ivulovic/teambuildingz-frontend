import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '9',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '08.10.2019.',
    participants: [   
        Users.bojans,
        Users.smiljandj,
        Users.ivanv,
        Users.stankob,
        Users.terza,
        Users.draganat,
        Users.tijanat,
        Users.milanr,
        Users.milanr,
        Users.mirak,
        Users.boskov,
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.bojans,
            Users.smiljandj,
            Users.ivanv,
            Users.stankob,
            Users.terza,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.draganat,
            Users.tijanat,
            Users.milanr,
            Users.milanr,
            Users.mirak,
            Users.boskov,
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        20.1,
        undefined,
        4.9,
        1492,
        {
            total: 73,
            data: [
                {target: Users.mirak, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.bojans, count: 6},
                {target: Users.stankob, count: 19},
                {target: Users.ivanv, count: 14},
                {target: Users.terza, count: 11},
                {target: Users.smiljandj, count: 21},
            ]
        },
        {
            total: 132,
            data: [
                {target: Users.boskov, count: 2},
                {target: Users.mirak, count: 3},
                {target: Users.tijanat, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.bojans, count: 38},
                {target: Users.stankob, count: 31},
                {target: Users.ivanv, count: 3},
                {target: Users.terza, count: 18},
            ]
        },
        50,
        3650,
        6625,
        65,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Red.id,
        49.7,
        undefined,
        10.6,
        1357,
        {
            total: 144,
            data: [
                {target: Users.mirak, count: 1},
                {target: Users.milanr, count: 3},
                {target: Users.bojans, count: 1},
                {target: Users.bojans, count: 24},
                {target: Users.stankob, count: 34},
                {target: Users.ivanv, count: 19},
                {target: Users.terza, count: 25},
                {target: Users.smiljandj, count: 37},
            ]
        },
        {
            total: 116,
            data: [
                {target: Users.boskov, count: 3},
                {target: Users.mirak, count: 1},
                {target: Users.bojans, count: 35},
                {target: Users.stankob, count: 15},
                {target: Users.ivanv, count: 13},
                {target: Users.terza, count: 21},
                {target: Users.smiljandj, count: 28},
            ]
        },
        50,
        7200,
        5800,
        57,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.milanr,
        Teams.Red.id,
        26.2,
        undefined,
        6.4,
        1404,
        {
            total: 90,
            data: [
                {target: Users.boskov, count: 2},
                {target: Users.draganat, count: 1},
                {target: Users.bojans, count: 17},
                {target: Users.stankob, count: 24},
                {target: Users.ivanv, count: 11},
                {target: Users.terza, count: 17},
                {target: Users.smiljandj, count: 18},
            ]
        },
        {
            total: 116,
            data: [
                {target: Users.boskov, count: 2},
                {target: Users.mirak, count: 1},
                {target: Users.tijanat, count: 3},
                {target: Users.draganat, count: 1},
                {target: Users.bojans, count: 50},
                {target: Users.stankob, count: 17},
                {target: Users.ivanv, count: 14},
                {target: Users.terza, count: 16},
            ]
        },
        50,
        4500,
        6400,
        60,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.mirak,
        Teams.Red.id,
        22.1,
        undefined,
        5.3,
        1557,
        {
            total: 82,
            data: [
                {target: Users.tijanat, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.draganat, count: 3},
                {target: Users.bojans, count: 16},
                {target: Users.stankob, count: 14},
                {target: Users.ivanv, count: 8},
                {target: Users.terza, count: 8},
                {target: Users.smiljandj, count: 31},
            ]
        },
        {
            total: 136,
            data: [
                {target: Users.boskov, count: 3},
                {target: Users.tijanat, count: 1},
                {target: Users.draganat, count: 1},
                {target: Users.bojans, count: 29},
                {target: Users.stankob, count: 29},
                {target: Users.ivanv, count: 9},
                {target: Users.terza, count: 22},
                {target: Users.smiljandj, count: 42},
            ]
        },
        50,
        4100,
        6780,
        67,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.boskov,
        Teams.Red.id,
        128.4,
        undefined,
        7.7,
        3603,
        {
            total: 277,
            data: [
                {target: Users.mirak, count: 3},
                {target: Users.tijanat, count: 3},
                {target: Users.milanr, count: 2},
                {target: Users.draganat, count: 2},
                {target: Users.bojans, count: 34},
                {target: Users.stankob, count: 67},
                {target: Users.ivanv, count: 63},
                {target: Users.terza, count: 50},
            ]
        },
        {
            total: 82,
            data: [
                {target: Users.milanr, count: 2},
                {target: Users.bojans, count: 34},
                {target: Users.stankob, count: 13},
                {target: Users.ivanv, count: 9},
                {target: Users.terza, count: 5},
                {target: Users.smiljandj, count: 19},
            ]
        },
        50,
        13850,
        4090,
        39,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.bojans,
        Teams.Blue.id,
        69.6,
        undefined,
        7.5,
        2507,
        {
            total: 187,
            data: [
                {target: Users.boskov, count: 34},
                {target: Users.mirak, count: 29},
                {target: Users.tijanat, count: 35},
                {target: Users.milanr, count: 50},
                {target: Users.draganat, count: 38},
                {target: Users.ivanv, count: 1},
            ]
        },
        {
            total: 101, // 102
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.boskov, count: 34},
                {target: Users.mirak, count: 16},
                {target: Users.tijanat, count: 24},
                {target: Users.milanr, count: 17},
                {target: Users.draganat, count: 6},
                {target: Users.stankob, count: 1},
                {target: Users.ivanv, count: 2},
            ]
        },
        50,
        9350,
        5052,
        49,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Blue.id,
        35.4,
        undefined,
        9.1,
        1637,
        {
            total: 149,
            data: [
                {target: Users.boskov, count: 19},
                {target: Users.mirak, count: 42},
                {target: Users.tijanat, count: 28},
                {target: Users.milanr, count: 24},
                {target: Users.draganat, count: 35},
                {target: Users.bojans, count: 1},
            ]
        },
        {
            total: 164, // 165
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.boskov, count: 53},
                {target: Users.mirak, count: 31},
                {target: Users.tijanat, count: 37},
                {target: Users.milanr, count: 18},
                {target: Users.draganat, count: 21},
                {target: Users.stankob, count: 1},
                {target: Users.ivanv, count: 2},
            ]
        },
        50,
        7450,
        8201,
        82,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.ivanv,
        Teams.Blue.id,
        15.5,
        undefined,
        3.1,
        1690,
        {
            total: 52,
            data: [
                {target: Users.boskov, count: 9},
                {target: Users.mirak, count: 9},
                {target: Users.tijanat, count: 13},
                {target: Users.milanr, count: 14},
                {target: Users.draganat, count: 3},
                {target: Users.bojans, count: 2},
                {target: Users.smiljandj, count: 2},
            ]
        },
        {
            total: 118,
            data: [
                {target: Users.boskov, count: 63},
                {target: Users.mirak, count: 8},
                {target: Users.tijanat, count: 19},
                {target: Users.milanr, count: 11},
                {target: Users.draganat, count: 14},
                {target: Users.bojans, count: 1},
                {target: Users.stankob, count: 1},
                {target: Users.terza, count: 1},
            ]
        },
        50,
        2600,
        5900,
        58,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.stankob,
        Teams.Blue.id,
        25.8,
        undefined,
        7.3,
        1478,
        {
            total: 108,
            data: [
                {target: Users.boskov, count: 13},
                {target: Users.mirak, count: 29},
                {target: Users.tijanat, count: 15},
                {target: Users.milanr, count: 17},
                {target: Users.draganat, count: 31},
                {target: Users.bojans, count: 1},
                {target: Users.ivanv, count: 1},
                {target: Users.smiljandj, count: 1},
            ]
        },
        {
            total: 159,
            data: [
                {target: Users.boskov, count: 67},
                {target: Users.mirak, count: 14},
                {target: Users.tijanat, count: 34},
                {target: Users.milanr, count: 24},
                {target: Users.draganat, count: 19},
                {target: Users.terza, count: 1},
            ]
        },
        50,
        5400,
        7950,
        79,
        0,
        0,
        undefined,
       ),

       makeStatistic(
        Users.terza,
        Teams.Blue.id,
        27,
        undefined,
        3.9,
        2170,
        {
            total: 85,
            data: [
                {target: Users.boskov, count: 5},
                {target: Users.mirak, count: 22},
                {target: Users.tijanat, count: 21},
                {target: Users.milanr, count: 16},
                {target: Users.draganat, count: 18},
                {target: Users.stankob, count: 1},
                {target: Users.ivanv, count: 1},
                {target: Users.smiljandj, count: 1},
            ]
        },
        {
            total: 111, // 112
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.boskov, count: 50},
                {target: Users.mirak, count: 8},
                {target: Users.tijanat, count: 25},
                {target: Users.milanr, count: 17},
                {target: Users.draganat, count: 11},
            ]
        },
        50,
        4250,
        5551,
        55,
        0,
        0,
        undefined,
       )
    ]
};
