import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '13',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '06.11.2019.',
    participants: [   
        Users.ivanv,
        Users.jelenad,
        Users.tijanat,
        Users.bojans,
        Users.milenat,
        Users.milanr,
        Users.ivanm,
        Users.stankob,
        Users.draganat,
        Users.boskov,
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.ivanv,
            Users.jelenad,
            Users.tijanat,
            Users.bojans,
            Users.milenat,
        ]
      },
      {
        ...Teams.Red,
        participants: [
          Users.milanr,
          Users.ivanm,
          Users.stankob,
          Users.draganat,
          Users.boskov,
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.ivanv,
        Teams.Blue.id,
        31.9,
        undefined,
        5.8,
        1998,
        {
            total: 115,
            data: [
                {target: Users.boskov, count: 13},
                {target: Users.stankob, count: 26},
                {target: Users.draganat, count: 32},
                {target: Users.ivanm, count: 23},
                {target: Users.milanr, count: 18},
                {target: Users.milenat, count: 1},
                {target: Users.bojans, count: 2},
            ]
        },
        {
            total: 133,
            data: [
                {target: Users.boskov, count: 38},
                {target: Users.stankob, count: 36},
                {target: Users.draganat, count: 22},
                {target: Users.ivanm, count: 20},
                {target: Users.milanr, count: 17},
            ]
        },
        50,
        5750,
        6650,
        66,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.jelenad,
        Teams.Blue.id,
        17.6,
        undefined,
        3.1,
        1913,
        {
            total: 59,
            data: [
                {target: Users.boskov, count: 9},
                {target: Users.stankob, count: 5},
                {target: Users.draganat, count: 10},
                {target: Users.ivanm, count: 16},
                {target: Users.milanr, count: 17},
                {target: Users.tijanat, count: 1},
                {target: Users.bojans, count: 1},
            ]
        },
        {
            total: 117, // 118
            data: [
                // {target: Users.player0, count: 1},
                {target: Users.boskov, count: 37},
                {target: Users.stankob, count: 24},
                {target: Users.draganat, count: 25},
                {target: Users.ivanm, count: 11},
                {target: Users.milanr, count: 16},
                {target: Users.milenat, count: 2},
                {target: Users.bojans, count: 2},
            ]
        },
        50,
        2950,
        5841,
        56,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Blue.id,
        68.7,
        undefined,
        8.9,
        1959,
        {
            total: 175,
            data: [
                {target: Users.boskov, count: 28},
                {target: Users.stankob, count: 39},
                {target: Users.draganat, count: 41},
                {target: Users.ivanm, count: 27},
                {target: Users.milanr, count: 39},
                {target: Users.milenat, count: 1},
            ]
        },
        {
            total: 99,
            data: [
                {target: Users.boskov, count: 24},
                {target: Users.stankob, count: 23},
                {target: Users.draganat, count: 20},
                {target: Users.ivanm, count: 4},
                {target: Users.milanr, count: 24},
                {target: Users.milenat, count: 1},
                {target: Users.jelenad, count: 1},
                {target: Users.bojans, count: 2},
            ]
        },
        50,
        8750,
        4950,
        48,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.bojans,
        Teams.Blue.id,
        109.8,
        undefined,
        8.7,
        2333,
        {
            total: 202,
            data: [
                {target: Users.boskov, count: 39},
                {target: Users.stankob, count: 39},
                {target: Users.draganat, count: 36},
                {target: Users.ivanm, count: 42},
                {target: Users.milanr, count: 40},
                {target: Users.milenat, count: 2},
                {target: Users.jelenad, count: 2},
                {target: Users.tijanat, count: 2},
            ]
        },
        {
            total: 71,
            data: [
                {target: Users.boskov, count: 27},
                {target: Users.stankob, count: 21},
                {target: Users.draganat, count: 10},
                {target: Users.ivanm, count: 2},
                {target: Users.milanr, count: 7},
                {target: Users.milenat, count: 1},
                {target: Users.jelenad, count: 1},
                {target: Users.ivanv, count: 2},
            ]
        },
        50,
        10100,
        3550,
        33,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.milenat,
        Teams.Blue.id,
        19.5,
        undefined,
        3.6,
        1983,
        {
            total: 72,
            data: [
                {target: Users.boskov, count: 10},
                {target: Users.stankob, count: 13},
                {target: Users.draganat, count: 22},
                {target: Users.ivanm, count: 9},
                {target: Users.milanr, count: 14},
                {target: Users.jelenad, count: 2},
                {target: Users.tijanat, count: 1},
                {target: Users.bojans, count: 1},
            ]
        },
        {
            total: 125, // 131
            data: [
                // {target: Users.player0, count: 6},
                {target: Users.boskov, count: 24},
                {target: Users.stankob, count: 38},
                {target: Users.draganat, count: 25},
                {target: Users.ivanm, count: 10},
                {target: Users.milanr, count: 24},
                {target: Users.tijanat, count: 1},
                {target: Users.bojans, count: 2},
            ]
        },
        50,
        3600,
        6319,
        58,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.milanr,
        Teams.Red.id,
        24.6,
        undefined,
        5.1,
        1737,
        {
            total: 89,
            data: [
                {target: Users.ivanm, count: 1},
                {target: Users.milenat, count: 24},
                {target: Users.jelenad, count: 16},
                {target: Users.tijanat, count: 24},
                {target: Users.bojans, count: 7},
                {target: Users.ivanv, count: 17},
            ]
        },
        {
            total: 132,
            data: [
                {target: Users.boskov, count: 3},
                {target: Users.draganat, count: 1},
                {target: Users.milenat, count: 14},
                {target: Users.jelenad, count: 17},
                {target: Users.tijanat, count: 39},
                {target: Users.bojans, count: 40},
                {target: Users.ivanv, count: 18},
            ]
        },
        50,
        4450,
        6590,
        64,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.ivanm,
        Teams.Red.id,
        14.6,
        undefined,
        6.8,
        695,
        {
            total: 47,
            data: [
                {target: Users.milenat, count: 10},
                {target: Users.jelenad, count: 11},
                {target: Users.tijanat, count: 4},
                {target: Users.bojans, count: 2},
                {target: Users.ivanv, count: 20},
            ]
        },
        {
            total: 121,
            data: [
                {target: Users.boskov, count: 1},
                {target: Users.stankob, count: 1},
                {target: Users.draganat, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.milenat, count: 9},
                {target: Users.jelenad, count: 16},
                {target: Users.tijanat, count: 27},
                {target: Users.bojans, count: 42},
            ]
        },
        50,
        2350,
        6050,
        59,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.stankob,
        Teams.Red.id,
        44.2,
        undefined,
        8.9,
        1616,
        {
            total: 144,
            data: [
                {target: Users.draganat, count: 1},
                {target: Users.ivanm, count: 1},
                {target: Users.milenat, count: 38},
                {target: Users.jelenad, count: 24},
                {target: Users.tijanat, count: 23},
                {target: Users.bojans, count: 21},
                {target: Users.ivanv, count: 36},
            ]
        },
        {
            total: 125, // 127
            data: [
                // {target: Users.player0, count: 2},
                {target: Users.boskov, count: 2},
                {target: Users.draganat, count: 1},
                {target: Users.milenat, count: 13},
                {target: Users.jelenad, count: 5},
                {target: Users.tijanat, count: 39},
                {target: Users.bojans, count: 39},
                {target: Users.ivanv, count: 26},
            ]
        },
        50,
        7200,
        6247,
        61,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.draganat,
        Teams.Red.id,
        27.6,
        undefined,
        5.7,
        1888,
        {
            total: 107,
            data: [
                {target: Users.boskov, count: 2},
                {target: Users.stankob, count: 1},
                {target: Users.ivanm, count: 1},
                {target: Users.milanr, count: 1},
                {target: Users.milenat, count: 25},
                {target: Users.jelenad, count: 25},
                {target: Users.tijanat, count: 20},
                {target: Users.bojans, count: 10},
            ]
        },
        {
            total: 143,
            data: [
                {target: Users.boskov, count: 1},
                {target: Users.stankob, count: 1},
                {target: Users.milenat, count: 22},
                {target: Users.jelenad, count: 10},
                {target: Users.tijanat, count: 41},
                {target: Users.bojans, count: 36},
                {target: Users.ivanv, count: 32},
            ]
        },
        50,
        5350,
        7140,
        69,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.boskov,
        Teams.Red.id,
        56.1,
        undefined,
        4.7,
        3375,
        {
            total: 157,
            data: [
                {target: Users.stankob, count: 2},
                {target: Users.draganat, count: 1},
                {target: Users.ivanm, count: 1},
                {target: Users.milanr, count: 3},
                {target: Users.milenat, count: 24},
                {target: Users.jelenad, count: 37},
                {target: Users.tijanat, count: 24},
                {target: Users.bojans, count: 27},
            ]
        },
        {
            total: 101,
            data: [
                {target: Users.draganat, count: 2},
                {target: Users.milenat, count: 10},
                {target: Users.jelenad, count: 9},
                {target: Users.tijanat, count: 28},
                {target: Users.bojans, count: 39},
                {target: Users.ivanv, count: 13},
            ]
        },
        50,
        7850,
        5040,
        49,
        0,
        0,
        undefined,
       )
    ]
};
