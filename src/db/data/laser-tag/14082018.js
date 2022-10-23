import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '5',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '14.08.2018.',
    participants: [   
            Users.bojans,
            Users.hristinab,
            Users.tijanat,
            Users.boskoz,
            Users.milutinv,
            Users.milenat,
            Users.nikolaCkode,
            Users.mirak,
            Users.sanjaz,
            Users.brankob,
            Users.terza,
            Users.milosv
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.bojans,
            Users.hristinab,
            Users.tijanat,
            Users.boskoz,
            Users.milutinv,
            Users.milenat,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.nikolaCkode,
            Users.mirak,
            Users.sanjaz,
            Users.brankob,
            Users.terza,
            Users.milosv
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.nikolaCkode,
            Teams.Red.id,
            35,
            undefined,
            5.9,
            1334,
            {
                total: 79,
                data: [
                    {target: Users.mirak, count: 2},
                    {target: Users.terza, count: 2},
                    {target: Users.milosv, count: 1},
                    {target: Users.bojans, count: 13},
                    {target: Users.hristinab, count: 15},
                    {target: Users.boskoz, count: 11},
                    {target: Users.tijanat, count: 7},
                    {target: Users.milutinv, count: 11},
                ]
            },
            {
                total: 83,
                data: [
                    {target: Users.sanjaz, count: 2},
                    {target: Users.brankob, count: 2},
                    {target: Users.bojans, count: 9},
                    {target: Users.hristinab, count: 11},
                    {target: Users.boskoz, count: 18},
                    {target: Users.tijanat, count: 25},
                    {target: Users.milutinv, count: 12},
                    {target: Users.milenat, count: 4},
                ]
            },
            50,
            3950,
            4150,
            37,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.mirak,
            Teams.Red.id,
            14.4,
            undefined,
            4.7,
            633,
            {
                total: 30,
                data: [
                    {target: Users.sanjaz, count: 1},
                    {target: Users.bojans, count: 5},
                    {target: Users.hristinab, count: 7},
                    {target: Users.boskoz, count: 2},
                    {target: Users.tijanat, count: 4},
                    {target: Users.milutinv, count: 8},
                    {target: Users.milenat, count: 3},
                ]
            },
            {
                total: 83,
                data: [
                    {target: Users.nikolaCkode, count: 2},
                    {target: Users.brankob, count: 1},
                    {target: Users.bojans, count: 16},
                    {target: Users.hristinab, count: 9},
                    {target: Users.boskoz, count: 12},
                    {target: Users.tijanat, count: 15},
                    {target: Users.milutinv, count: 15},
                    {target: Users.milenat, count: 5},
                ]
            },
            50,
            1500,
            3750,
            37,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.sanjaz,
            Teams.Red.id,
            5.4,
            undefined,
            2,
            1221,
            {
                total: 22,
                data: [
                    {target: Users.nikolaCkode, count: 2},
                    {target: Users.terza, count: 2},
                    {target: Users.bojans, count: 3},
                    {target: Users.hristinab, count: 4},
                    {target: Users.boskoz, count: 1},
                    {target: Users.tijanat, count: 6},
                    {target: Users.milutinv, count: 3},
                    {target: Users.milenat, count: 1},
                ]
            },
            {
                total: 139,
                data: [
                    {target: Users.mirak, count: 1},
                    {target: Users.brankob, count: 3},
                    {target: Users.terza, count: 2},
                    {target: Users.milosv, count: 1},
                    {target: Users.bojans, count: 30},
                    {target: Users.hristinab, count: 14},
                    {target: Users.boskoz, count: 21},
                    {target: Users.tijanat, count: 35},
                ]
            },
            50,
            1100,
            6880,
            62,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.brankob,
            Teams.Red.id,
            42.5,
            undefined,
            4.7,
            2229,
            {
                total: 105,
                data: [
                    {target: Users.nikolaCkode, count: 2},
                    {target: Users.mirak, count: 1},
                    {target: Users.sanjaz, count: 3},
                    {target: Users.milosv, count: 1},
                    {target: Users.bojans, count: 17},
                    {target: Users.hristinab, count: 25},
                    {target: Users.boskoz, count: 21},
                    {target: Users.tijanat, count: 12},
                ]
            },
            {
                total: 89,
                data: [
                    {target: Users.milosv, count: 1},
                    {target: Users.bojans, count: 21},
                    {target: Users.hristinab, count: 12},
                    {target: Users.boskoz, count: 14},
                    {target: Users.tijanat, count: 19},
                    {target: Users.milutinv, count: 15},
                    {target: Users.milenat, count: 7},
                ]
            },
            50,
            5250,
            4450,
            42,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.terza,
            Teams.Red.id,
            18.7,
            undefined,
            5.6,
            1066,
            {
                total: 60,
                data: [
                    {target: Users.sanjaz, count: 2},
                    {target: Users.bojans, count: 8},
                    {target: Users.hristinab, count: 19},
                    {target: Users.boskoz, count: 2},
                    {target: Users.tijanat, count: 10},
                    {target: Users.milutinv, count: 8},
                    {target: Users.milenat, count: 11},
                ]
            },
            {
                total: 118,
                data: [
                    {target: Users.nikolaCkode, count: 2},
                    {target: Users.sanjaz, count: 2},
                    {target: Users.bojans, count: 21},
                    {target: Users.hristinab, count: 11},
                    {target: Users.boskoz, count: 19},
                    {target: Users.tijanat, count: 36},
                    {target: Users.milutinv, count: 9},
                    {target: Users.milenat, count: 18},
                ]
            },
            50,
            3000,
            5900,
            58,
            0,
            0,
            undefined
        ),

        makeStatistic(
            Users.milosv,
            Teams.Red.id,
            35,
            undefined,
            12.3,
            828,
            {
                total: 102,
                data: [
                    {target: Users.sanjaz, count: 1},
                    {target: Users.brankob, count: 81},
                    {target: Users.bojans, count: 20},
                    {target: Users.hristinab, count: 11},
                    {target: Users.boskoz, count: 7},
                    {target: Users.tijanat, count: 25},
                    {target: Users.milutinv, count: 16},
                    {target: Users.milenat, count: 21},
                ]
            },
            {
                total: 118,
                data: [
                    {target: Users.nikolaCkode, count: 1},
                    {target: Users.brankob, count: 1},
                    {target: Users.bojans, count: 24},
                    {target: Users.hristinab, count: 12},
                    {target: Users.boskoz, count: 14},
                    {target: Users.tijanat, count: 36},
                    {target: Users.milutinv, count: 17},
                    {target: Users.milenat, count: 15},
                ]
            },
            50,
            5100,
            6000,
            59,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bojans,
            Teams.Blue.id,
            63,
            undefined,
            7.9,
            1576,
            {
                total: 124,
                data: [
                    {target: Users.nikolaCkode, count: 9},
                    {target: Users.mirak, count: 16},
                    {target: Users.sanjaz, count: 30},
                    {target: Users.brankob, count: 21},
                    {target: Users.terza, count: 21},
                    {target: Users.milosv, count: 24},
                    {target: Users.hristinab, count: 1},
                    {target: Users.tijanat, count: 1},
                ]
            },
            {
                total: 74, // 75
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.nikolaCkode, count: 13},
                    {target: Users.mirak, count: 5},
                    {target: Users.sanjaz, count: 3},
                    {target: Users.brankob, count: 17},
                    {target: Users.terza, count: 8},
                    {target: Users.milosv, count: 20},
                    {target: Users.hristinab, count: 3},
                ]
            },
            50,
            6200,
            3700,
            36,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.hristinab,
            Teams.Blue.id,
            31.7,
            undefined,
            4.5,
            1654,
            {
                total: 75,
                data: [
                    {target: Users.nikolaCkode, count: 11},
                    {target: Users.mirak, count: 9},
                    {target: Users.sanjaz, count: 14},
                    {target: Users.brankob, count: 12},
                    {target: Users.terza, count: 11},
                    {target: Users.milosv, count: 12},
                    {target: Users.bojans, count: 3},
                    {target: Users.tijanat, count: 2},
                ]
            },
            {
                total: 84, // 85
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.nikolaCkode, count: 15},
                    {target: Users.mirak, count: 7},
                    {target: Users.sanjaz, count: 4},
                    {target: Users.brankob, count: 25},
                    {target: Users.terza, count: 19},
                    {target: Users.milosv, count: 11},
                    {target: Users.bojans, count: 1},
                ]
            },
            50,
            3750,
            4202,
            40,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.tijanat,
            Teams.Blue.id,
            95.2,
            undefined,
            8.8,
            1923,
            {
                total: 170,
                data: [
                    {target: Users.nikolaCkode, count: 25},
                    {target: Users.mirak, count: 15},
                    {target: Users.sanjaz, count: 35},
                    {target: Users.brankob, count: 19},
                    {target: Users.terza, count: 36},
                    {target: Users.milosv, count: 36},
                    {target: Users.bojans, count: 1},
                    {target: Users.tijanat, count: 1},
                ]
            },
            {
                total: 68, // 69
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.nikolaCkode, count: 7},
                    {target: Users.mirak, count: 4},
                    {target: Users.sanjaz, count: 6},
                    {target: Users.brankob, count: 12},
                    {target: Users.terza, count: 10},
                    {target: Users.milosv, count: 25},
                    {target: Users.bojans, count: 1},
                ]
            },
            50,
            8500,
            3401,
            32,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.boskoz,
            Teams.Blue.id,
            86.5,
            undefined,
            9.7,
            1026,
            {
                total: 100,
                data: [
                    {target: Users.nikolaCkode, count: 18},
                    {target: Users.mirak, count: 12},
                    {target: Users.sanjaz, count: 21},
                    {target: Users.brankob, count: 14},
                    {target: Users.terza, count: 19},
                    {target: Users.milosv, count: 14},
                    {target: Users.bojans, count: 2},
                ]
            },
            {
                total: 45,
                data: [
                    {target: Users.nikolaCkode, count: 11},
                    {target: Users.mirak, count: 2},
                    {target: Users.sanjaz, count: 1},
                    {target: Users.brankob, count: 21},
                    {target: Users.terza, count: 2},
                    {target: Users.milosv, count: 7},
                    {target: Users.milenat, count: 1},
                ]
            },
            50,
            5000,
            2250,
            21,
            0,
            0,
            undefined
        ),

        makeStatistic(
            Users.milutinv,
            Teams.Blue.id,
            48.3,
            undefined,
            5.6,
            1540,
            {
                total: 86,
                data: [
                    {target: Users.nikolaCkode, count: 12},
                    {target: Users.mirak, count: 15},
                    {target: Users.sanjaz, count: 16},
                    {target: Users.brankob, count: 15},
                    {target: Users.terza, count: 9},
                    {target: Users.milosv, count: 17},
                    {target: Users.bojans, count: 1},
                    {target: Users.hristinab, count: 1},
                ]
            },
            {
                total: 65,
                data: [
                    {target: Users.nikolaCkode, count: 11},
                    {target: Users.mirak, count: 8},
                    {target: Users.sanjaz, count: 3},
                    {target: Users.brankob, count: 13},
                    {target: Users.terza, count: 8},
                    {target: Users.milosv, count: 16},
                    {target: Users.bojans, count: 1},
                    {target: Users.hristinab, count: 1},
                ]
            },
            50,
            4300,
            3250,
            30,
            0,
            0,
            undefined
        ),

        makeStatistic(
            Users.milenat,
            Teams.Blue.id,
            39,
            undefined,
            5,
            1347,
            {
                total: 68,
                data: [
                    {target: Users.nikolaCkode, count: 4},
                    {target: Users.mirak, count: 5},
                    {target: Users.sanjaz, count: 14},
                    {target: Users.brankob, count: 7},
                    {target: Users.terza, count: 18},
                    {target: Users.milosv, count: 15},
                    {target: Users.bojans, count: 1},
                    {target: Users.boskoz, count: 1},
                ]
            },
            {
                total: 63,
                data: [
                    {target: Users.nikolaCkode, count: 17},
                    {target: Users.mirak, count: 3},
                    {target: Users.sanjaz, count: 1},
                    {target: Users.brankob, count: 10},
                    {target: Users.terza, count: 11},
                    {target: Users.milosv, count: 21},
                ]
            },
            50,
            3400,
            3150,
            29,
            0,
            0,
            undefined
        )
    ]
};
