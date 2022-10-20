import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '1',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Beograd, Stari Kluz',
    date: '05.07.2018.',
    participants: [
        Users.milenat,
        Users.miodragt,
        Users.smiljandj,
        Users.ivanm,
        Users.savax,
        Users.tijanat,
        Users.markob,
        Users.bojans
    ],
    teams: [
      {
        ...Teams.Red,
        participants: [
          Users.milenat,
          Users.ivanm,
          Users.tijanat,
          Users.bojans,
        ]
      },
      {
        ...Teams.Blue,
        participants: [
          Users.miodragt,
          Users.smiljandj,
          Users.savax,
          Users.markob,
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.milenat,
            Teams.Red.id,
            35.3,
            undefined,
            3,
            1513,
            {
                total: 46,
                data: [
                    { target: Users.bojans, count: 1 },
                    { target: Users.smiljandj, count: 12 },
                    { target: Users.markob, count: 12 },
                    { target: Users.savax, count: 13 },
                    { target: Users.miodragt, count: 8 },
                ]
            },
            {
                total: 45,
                data: [
                    { target: Users.bojans, count: 4 },
                    { target: Users.tijanat, count: 2 },
                    { target: Users.smiljandj, count: 12 },
                    { target: Users.markob, count: 11 },
                    { target: Users.savax, count: 8 },
                    { target: Users.miodragt, count: 8 },
                ]
            },
            50,
            2300,
            2300,
            19,
            0,
            0,
            undefined,
        ),

        makeStatistic(
            Users.miodragt,
            Teams.Blue.id,
            30.6,
            undefined,
            5.5,
            1224,
            {
                total: 67,
                data: [
                    { target: Users.bojans, count: 17 },
                    { target: Users.ivanm, count: 19 },
                    { target: Users.milenat, count: 8 },
                    { target: Users.tijanat, count: 22 },
                    { target: Users.savax, count: 1 },
                ]
            },
            {
                total: 80,
                data: [
                    { target: Users.bojans, count: 30 },
                    { target: Users.ivanm, count: 22 },
                    { target: Users.milenat, count: 8 },
                    { target: Users.tijanat, count: 18 },
                    { target: Users.smiljandj, count: 1 },
                    { target: Users.savax, count: 1 },
                ]
            },
            50,
            3350,
            3990,
            34,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.smiljandj,
            Teams.Blue.id,
            26,
            undefined,
            4.9,
            1359,
            {
                total: 66,
                data: [
                    {target: Users.bojans, count: 18},
                    {target: Users.ivanm, count: 16},
                    {target: Users.milenat, count: 12},
                    {target: Users.tijanat, count: 18},
                    {target: Users.markob, count: 1},
                    {target: Users.miodragt, count: 1},
                ]
            },
            {
                total: 90, // 92 i didnt count player0
                data: [
                    // {target: Users.player0, count: 2},
                    {target: Users.bojans, count: 30},
                    {target: Users.ivanm, count: 22},
                    {target: Users.milenat, count: 12},
                    {target: Users.tijanat, count: 12},
                ]
            },
            50,
            3300,
            4503,
            43,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.ivanm,
            Teams.Red.id,
            59.9,
            undefined,
            6.3,
            1445,
            {
                total: 91,
                data: [
                    { target: Users.bojans, count: 1 },
                    { target: Users.tijanat, count: 2 },
                    { target: Users.smiljandj, count: 22 },
                    { target: Users.markob, count: 24 },
                    { target: Users.savax, count: 20 },
                    { target: Users.miodragt, count: 22 },
                ]
            },
            {
                total: 56,
                data: [
                    { target: Users.bojans, count: 1 },
                    { target: Users.tijanat, count: 1 },
                    { target: Users.smiljandj, count: 16 },
                    { target: Users.markob, count: 14 },
                    { target: Users.savax, count: 5 },
                    { target: Users.miodragt, count: 19 },
                ]
            },
            50,
            4550,
            2800,
            26,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.savax,
            Teams.Blue.id,
            12.3,
            undefined,
            3.4,
            1331,
            {
                total: 45,
                data: [
                    {target: Users.bojans, count: 12},
                    {target: Users.ivanm, count: 5},
                    {target: Users.milenat, count: 8},
                    {target: Users.tijanat, count: 17},
                    {target: Users.markob, count: 2},
                    {target: Users.miodragt, count: 1},
                ]
            },
            {
                total: 128,// 129
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.bojans, count: 54},
                    {target: Users.ivanm, count: 20},
                    {target: Users.milenat, count: 13},
                    {target: Users.tijanat, count: 37},
                    {target: Users.markob, count: 3},
                    {target: Users.miodragt, count: 1},
                ]
            },
            50,
            2250,
            6401,
            62,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.tijanat,
            Teams.Red.id,
            56.4,
            undefined,
            8.1,
            1428,
            {
                total: 115,
                data: [
                    {target: Users.bojans, count: 4},
                    {target: Users.ivanm, count: 1},
                    {target: Users.milenat, count: 2},
                    {target: Users.smiljandj, count: 26},
                    {target: Users.markob, count: 27},
                    {target: Users.savax, count: 37},
                    {target: Users.miodragt, count: 18},
                ]
            },
            {
                total: 78,
                data: [
                    {target: Users.bojans, count: 1},
                    {target: Users.ivanm, count: 2},
                    {target: Users.smiljandj, count: 18},
                    {target: Users.markob, count: 18},
                    {target: Users.savax, count: 17},
                    {target: Users.miodragt, count: 22},
                ]
            },
            50,
            5750,
            3950,
            33,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.markob,
            Teams.Blue.id,
            22.3,
            undefined,
            5.8,
            1095,
            {
                total: 63,
                data: [
                    {target: Users.bojans, count: 17},
                    {target: Users.ivanm, count: 14},
                    {target: Users.milenat, count: 11},
                    {target: Users.tijanat, count: 18},
                    {target: Users.savax, count: 3},
                ]
            },
            {
                total: 103,//104
                data: [
                    {target: Users.bojans, count: 37},
                    {target: Users.ivanm, count: 24},
                    {target: Users.milenat, count: 12},
                    {target: Users.tijanat, count: 27},
                    {target: Users.smiljandj, count: 1},
                    {target: Users.savax, count: 2},
                    // {target: Users.player71, count: 1},
                ]
            },
            50,
            3150,
            5220,
            49,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bojans,
            Teams.Red.id,
            89.9,
            undefined,
            11,
            1433,
            {
                total: 157,
                data: [
                    {target: Users.ivanm, count: 1},
                    {target: Users.milenat, count: 4},
                    {target: Users.tijanat, count: 1},
                    {target: Users.smiljandj, count: 30},
                    {target: Users.markob, count: 37},
                    {target: Users.savax, count: 54},
                    {target: Users.miodragt, count: 30},
                ]
            },
            {
                total: 70,
                data: [
                    {target: Users.ivanm, count: 1},
                    {target: Users.milenat, count: 1},
                    {target: Users.tijanat, count: 4},
                    {target: Users.smiljandj, count: 18},
                    {target: Users.markob, count: 17},
                    {target: Users.savax, count: 12},
                    {target: Users.miodragt, count: 17},
                ]
            },
            50,
            7850,
            3540,
            34,
            0,
            0,
            undefined
        )
    ]
};
