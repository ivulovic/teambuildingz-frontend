import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '8',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '04.10.2019.',
    participants: [   
        Users.stankob,
        Users.boskov,
        Users.milenat,
        Users.draganat,
        Users.tijanat,
        Users.bojans,
        Users.mirak,
        Users.terza,
        Users.milanr,
        Users.smiljandj
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.stankob,
            Users.boskov,
            Users.milenat,
            Users.draganat,
            Users.tijanat,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.bojans,
            Users.mirak,
            Users.terza,
            Users.milanr, // ???
            Users.smiljandj
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.stankob,
        Teams.Blue.id,
        41,
        undefined,
        7.8,
        1517,
        {
            total: 118,
            data: [
                {target: Users.bojans, count: 19},
                {target: Users.smiljandj, count: 27},
                {target: Users.mirak, count: 27},
                {target: Users.milanr, count: 21},
                {target: Users.terza, count: 20},
                {target: Users.draganat, count: 1},
                {target: Users.boskov, count: 1},
                {target: Users.milenat, count: 2},
            ]
        },
        {
            total: 110,
            data: [
                {target: Users.bojans, count: 39},
                {target: Users.smiljandj, count: 21},
                {target: Users.mirak, count: 10},
                {target: Users.milanr, count: 20},
                {target: Users.terza, count: 17},
                {target: Users.boskov, count: 2},
                {target: Users.milenat, count: 1},
            ]
        },
        50,
        5900,
        5500,
        55,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.boskov,
        Teams.Blue.id,
        105.7,
        undefined,
        6.9,
        3396,
        {
            total: 234,
            data: [
                {target: Users.bojans, count: 45},
                {target: Users.smiljandj, count: 50},
                {target: Users.mirak, count: 38},
                {target: Users.milanr, count: 57},
                {target: Users.terza, count: 33},
                {target: Users.stankob, count: 2},
                {target: Users.tijanat, count: 5},
                {target: Users.milenat, count: 1},
            ]
        },
        {
            total: 83,
            data: [
                {target: Users.bojans, count: 39},
                {target: Users.smiljandj, count: 15},
                {target: Users.mirak, count: 5},
                {target: Users.milanr, count: 16},
                {target: Users.terza, count: 7},
                {target: Users.stankob, count: 1},
            ]
        },
        50,
        11700,
        4150,
        40,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.milenat,
        Teams.Blue.id,
        20.5,
        undefined,
        3.4,
        2096,
        {
            total: 72,
            data: [
                {target: Users.bojans, count: 5},
                {target: Users.smiljandj, count: 17},
                {target: Users.mirak, count: 22},
                {target: Users.milanr, count: 11},
                {target: Users.terza, count: 16},
                {target: Users.stankob, count: 1},
            ]
        },
        {
            total: 124,
            data: [
                {target: Users.bojans, count: 36},
                {target: Users.smiljandj, count: 35},
                {target: Users.mirak, count: 18},
                {target: Users.milanr, count: 14},
                {target: Users.terza, count: 12},
                {target: Users.draganat, count: 3},
                {target: Users.stankob, count: 2},
                {target: Users.boskov, count: 4},
            ]
        },
        50,
        3600,
        6200,
        60,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.draganat,
        Teams.Blue.id,
        11.4,
        undefined,
        3,
        1405,
        {
            total: 42,
            data: [
                {target: Users.bojans, count: 8},
                {target: Users.smiljandj, count: 10},
                {target: Users.mirak, count: 10},
                {target: Users.milanr, count: 5},
                {target: Users.terza, count: 6},
                {target: Users.milenat, count: 3},
            ]
        },
        {
            total: 129,
            data: [
                {target: Users.bojans, count: 51},
                {target: Users.smiljandj, count: 16},
                {target: Users.mirak, count: 11},
                {target: Users.milanr, count: 27},
                {target: Users.terza, count: 22},
                {target: Users.stankob, count: 1},
                {target: Users.tijanat, count: 1},
            ]
        },
        50,
        2100,
        6430,
        61,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Blue.id,
        44.6,
        undefined,
        8.4,
        1683,
        {
            total: 142,
            data: [
                {target: Users.bojans, count: 22},
                {target: Users.smiljandj, count: 28},
                {target: Users.mirak, count: 41},
                {target: Users.milanr, count: 25},
                {target: Users.terza, count: 25},
                {target: Users.draganat, count: 1},
            ]
        },
        {
            total: 121, //123
            data: [
                // {target: Users.player0, count: 2},
                {target: Users.bojans, count: 41},
                {target: Users.smiljandj, count: 20},
                {target: Users.mirak, count: 14},
                {target: Users.milanr, count: 22},
                {target: Users.terza, count: 19},
                {target: Users.boskov, count: 5},
            ]
        },
        50,
        7100,
        6052,
        57,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.bojans,
        Teams.Red.id,
        77.3,
        undefined,
        9.4,
        2221,
        {
            total: 209,
            data: [
                {target: Users.smiljandj, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.terza, count: 1},
                {target: Users.draganat, count: 51},
                {target: Users.stankob, count: 39},
                {target: Users.tijanat, count: 41},
                {target: Users.boskov, count: 39},
                {target: Users.milenat, count: 36},
            ]
        },
        {
            total: 106,
            data: [
                {target: Users.smiljandj, count: 2},
                {target: Users.mirak, count: 3},
                {target: Users.milanr, count: 1},
                {target: Users.terza, count: 1},
                {target: Users.draganat, count: 8},
                {target: Users.stankob, count: 19},
                {target: Users.tijanat, count: 22},
                {target: Users.boskov, count: 45},
            ]
        },
        50,
        10450,
        5300,
        51,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.mirak,
        Teams.Red.id,
        15.9,
        undefined,
        3.7,
        1671,
        {
            total: 62,
            data: [
                {target: Users.bojans, count: 3},
                {target: Users.smiljandj, count: 1},
                {target: Users.draganat, count: 11},
                {target: Users.stankob, count: 10},
                {target: Users.tijanat, count: 14},
                {target: Users.boskov, count: 5},
                {target: Users.milenat, count: 18},
            ]
        },
        {
            total: 139,
            data: [
                {target: Users.smiljandj, count: 1},
                {target: Users.draganat, count: 10},
                {target: Users.stankob, count: 27},
                {target: Users.tijanat, count: 41},
                {target: Users.boskov, count: 38},
                {target: Users.milenat, count: 22},
            ]
        },
        50,
        3100,
        6940,
        67,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.terza,
        Teams.Red.id,
        29.6,
        undefined,
        5.1,
        1633,
        {
            total: 83,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.smiljandj, count: 5},
                {target: Users.draganat, count: 22},
                {target: Users.stankob, count: 17},
                {target: Users.tijanat, count: 19},
                {target: Users.boskov, count: 7},
                {target: Users.milenat, count: 12},
            ]
        },
        {
            total: 102,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.smiljandj, count: 1},
                {target: Users.draganat, count: 6},
                {target: Users.stankob, count: 20},
                {target: Users.tijanat, count: 25},
                {target: Users.boskov, count: 33},
                {target: Users.milenat, count: 16},
            ]
        },
        50,
        4150,
        5100,
        50,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.milanr,
        Teams.Red.id,
        30.7,
        undefined,
        6.2,
        1601,
        {
            total: 100,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.draganat, count: 27},
                {target: Users.stankob, count: 20},
                {target: Users.tijanat, count: 22},
                {target: Users.boskov, count: 16},
                {target: Users.milenat, count: 14},
            ]
        },
        {
            total: 120, // 121
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.draganat, count: 5},
                {target: Users.stankob, count: 21},
                {target: Users.tijanat, count: 25},
                {target: Users.boskov, count: 57},
                {target: Users.milenat, count: 11},
                // {target: Users.player71, count: 1},
            ]
        },
        50,
        5000,
        6020,
        58,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Red.id,
        31.1,
        undefined,
        8.8,
        1257,
        {
            total: 111,
            data: [
                {target: Users.bojans, count: 2},
                {target: Users.mirak, count: 1},
                {target: Users.terza, count: 1},
                {target: Users.draganat, count: 16},
                {target: Users.stankob, count: 21},
                {target: Users.tijanat, count: 20},
                {target: Users.boskov, count: 15},
                {target: Users.milenat, count: 35},
            ]
        },
        {
            total: 139,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.mirak, count: 1},
                {target: Users.terza, count: 5},
                {target: Users.draganat, count: 10},
                {target: Users.stankob, count: 27},
                {target: Users.tijanat, count: 28},
                {target: Users.boskov, count: 50},
                {target: Users.milenat, count: 17},
            ]
        },
        50,
        5550,
        6950,
        68,
        0,
        0,
        undefined
       )
    ]
};
