import { Activities } from "../activities";
import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '11',
    activity: Activities.LaserTag,
    date: '24.10.2019.',
    participants: [   
        Users.terza,
        Users.boskov,
        Users.stankob,
        Users.anam,
        Users.smiljandj,
        Users.draganat,
        Users.mirak,
        Users.bojans,
        Users.ivanv,
        Users.tijanat,
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.terza,
            Users.boskov,
            Users.stankob,
            Users.anam,
            Users.smiljandj,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.draganat,
            Users.mirak,
            Users.bojans,
            Users.ivanv,
            Users.tijanat,
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        18,
        undefined,
        5.6,
        1660,
        {
            total: 93,
            data: [
                {target: Users.mirak, count: 5},
                {target: Users.stankob, count: 29},
                {target: Users.anam, count: 20},
                {target: Users.terza, count: 17},
                {target: Users.smiljandj, count: 18},
                {target: Users.boskov, count: 4},
            ]
        },
        {
            total: 188, // 190
            data: [
                {target: Users.bojans, count: 1},
                // {target: Users.player7, count: 1},
                // {target: Users.player71, count: 1},
                {target: Users.stankob, count: 47},
                {target: Users.anam, count: 10},
                {target: Users.terza, count: 29},
                {target: Users.smiljandj, count: 41},
                {target: Users.boskov, count: 60},
            ]
        },
        50,
        4650,
        9470,
        94,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.mirak,
        Teams.Red.id,
        31.8,
        undefined,
        7.5,
        1815,
        {
            total: 136,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.ivanv, count: 1},
                {target: Users.stankob, count: 31},
                {target: Users.anam, count: 36},
                {target: Users.terza, count: 26},
                {target: Users.smiljandj, count: 34},
                {target: Users.boskov, count: 7},
            ]
        },
        {
            total: 160, // 163 
            data: [
                {target: Users.draganat, count: 5},
                {target: Users.tijanat, count: 2},
                {target: Users.bojans, count: 2},
                // {target: Users.player7, count: 3},
                {target: Users.stankob, count: 28},
                {target: Users.anam, count: 12},
                {target: Users.terza, count: 19},
                {target: Users.smiljandj, count: 61},
            ]
        },
        50,
        6800,
        8140,
        80,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.bojans,
        Teams.Red.id,
        73.2,
        undefined,
        9,
        2556,
        {
            total: 229,
            data: [
                {target: Users.draganat, count: 1},
                {target: Users.tijanat, count: 2},
                {target: Users.mirak, count: 2},
                {target: Users.stankob, count: 38},
                {target: Users.anam, count: 45},
                {target: Users.terza, count: 47},
                {target: Users.smiljandj, count: 51},
                {target: Users.boskov, count: 43},
            ]
        },
        {
            total: 121, // 122 
            data: [
                {target: Users.ivanv, count: 3},
                {target: Users.mirak, count: 1},
                // {target: Users.player7, count: 1},
                {target: Users.stankob, count: 21},
                {target: Users.anam, count: 9},
                {target: Users.terza, count: 10},
                {target: Users.smiljandj, count: 31},
                {target: Users.boskov, count: 46},
            ]
        },
        50,
        11450,
        6090,
        56,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.ivanv,
        Teams.Red.id,
        21.9,
        undefined,
        3.1,
        2661,
        {
            total: 83,
            data: [
                {target: Users.tijanat, count: 2},
                {target: Users.bojans, count: 3},
                {target: Users.stankob, count: 15},
                {target: Users.anam, count: 16},
                {target: Users.terza, count: 24},
                {target: Users.smiljandj, count: 14},
                {target: Users.boskov, count: 9},
            ]
        },
        {
            total: 132, // 133 
            data: [
                {target: Users.tijanat, count: 2},
                {target: Users.mirak, count: 1},
                // {target: Users.player7, count: 1},
                {target: Users.stankob, count: 32},
                {target: Users.anam, count: 17},
                {target: Users.terza, count: 17},
                {target: Users.smiljandj, count: 17},
                {target: Users.boskov, count: 46},
            ]
        },
        50,
        4150,
        6650,
        63,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Red.id,
        39.6,
        undefined,
        9.4,
        1686,
        {
            total: 158,
            data: [
                {target: Users.ivanv, count: 2},
                {target: Users.mirak, count: 2},
                {target: Users.stankob, count: 36},
                {target: Users.anam, count:32},
                {target: Users.terza, count: 31},
                {target: Users.smiljandj, count: 35},
                {target: Users.boskov, count: 20},
            ]
        },
        {
            total: 153, // 157 
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.bojans, count: 2},
                {target: Users.ivanv, count: 2},
                // {target: Users.player7, count: 3},
                {target: Users.stankob, count: 20},
                {target: Users.anam, count: 10},
                {target: Users.terza, count: 20},
                {target: Users.smiljandj, count: 56},
            ]
        },
        50,
        7900,
        7791,
        75,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.terza,
        Teams.Blue.id,
        24.9,
        undefined,
        5.2,
        1925,
        {
            total: 100,
            data: [
                {target: Users.draganat, count: 29},
                {target: Users.tijanat, count: 20},
                {target: Users.bojans, count: 10},
                {target: Users.ivanv, count: 17},
                {target: Users.mirak, count: 19},
                {target: Users.stankob, count: 1},
                {target: Users.anam, count: 1},
                {target: Users.smiljandj, count: 2},
            ]
        },
        {
            total: 147,
            data: [
                {target: Users.draganat, count: 17},
                {target: Users.tijanat, count: 31},
                {target: Users.bojans, count: 47},
                {target: Users.ivanv, count: 24},
                {target: Users.mirak, count: 26},
                {target: Users.smiljandj, count: 1},
                {target: Users.boskov, count: 1},
            ]
        },
        50,
        5000,
        7350,
        71,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.boskov,
        Teams.Blue.id,
        101.7,
        undefined,
        6.5,
        3600,
        {
            total: 235,
            data: [
                {target: Users.draganat, count: 60},
                {target: Users.tijanat, count: 43},
                {target: Users.bojans, count: 46},
                {target: Users.ivanv, count: 46},
                {target: Users.mirak, count: 31},
                {target: Users.stankob, count: 4},
                {target: Users.anam, count: 2},
                {target: Users.terza, count: 1},
            ]
        },
        {
            total: 85, // 86
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.draganat, count: 4},
                {target: Users.tijanat, count: 20},
                {target: Users.bojans, count: 43},
                {target: Users.ivanv, count: 9},
                {target: Users.mirak, count: 7},
                {target: Users.terza, count: 1},
                {target: Users.smiljandj, count: 1},
            ]
        },
        50,
        11750,
        4254,
        39,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.stankob,
        Teams.Blue.id,
        35.7,
        undefined,
        7.6,
        1938,
        {
            total: 148,
            data: [
                {target: Users.draganat, count: 47},
                {target: Users.tijanat, count: 20},
                {target: Users.bojans, count: 21},
                {target: Users.ivanv, count: 32},
                {target: Users.mirak, count: 28},
            ]
        },
        {
            total: 158,
            data: [
                {target: Users.draganat, count: 29},
                {target: Users.tijanat, count: 36},
                {target: Users.bojans, count: 38},
                {target: Users.ivanv, count: 15},
                {target: Users.mirak, count: 31},
                {target: Users.anam, count: 1},
                {target: Users.terza, count: 1},
                {target: Users.smiljandj, count: 3},
            ]
        },
        50,
        7400,
        7890,
        78,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.anam,
        Teams.Blue.id,
        13.8,
        undefined,
        4.1,
        1451,
        {
            total: 59,
            data: [
                {target: Users.draganat, count: 10},
                {target: Users.tijanat, count: 10},
                {target: Users.bojans, count: 9},
                {target: Users.ivanv, count: 17},
                {target: Users.mirak, count: 12},
                {target: Users.stankob, count: 1},
            ]
        },
        {
            total: 153,
            data: [
                {target: Users.draganat, count: 20},
                {target: Users.tijanat, count: 32},
                {target: Users.bojans, count: 45},
                {target: Users.ivanv, count: 16},
                {target: Users.mirak, count: 36},
                {target: Users.terza, count: 1},
                {target: Users.smiljandj, count: 1},
                {target: Users.boskov, count: 2},
            ]
        },
        50,
        2950,
        7650,
        75,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Blue.id,
        54.6,
        undefined,
        10.7,
        1984,
        {
            total: 212,
            data: [
                {target: Users.draganat, count: 41},
                {target: Users.tijanat, count: 56},
                {target: Users.bojans, count: 31},
                {target: Users.ivanv, count: 17},
                {target: Users.mirak, count: 61},
                {target: Users.stankob, count: 3},
                {target: Users.anam, count: 1},
                {target: Users.terza, count: 1},
            ]
        },
        {
            total: 156,
            data: [
                {target: Users.draganat, count: 18},
                {target: Users.tijanat, count: 35},
                {target: Users.bojans, count: 51},
                {target: Users.ivanv, count: 14},
                {target: Users.mirak, count: 34},
                {target: Users.terza, count: 2},
                {target: Users.boskov, count: 2},
            ]
        },
        50,
        10600,
        7800,
        76,
        0,
        0,
        undefined
       )
    ]
};
