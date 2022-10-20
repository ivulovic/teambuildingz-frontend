import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '3',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Beograd, Stari Kluz',
    date: '12.07.2018.',
    participants: [
            Users.unknown,
            Users.milenat,
            Users.bojans,
            Users.miodragt,
            Users.milosv,
            Users.tijanat,
            Users.jasminai,
            Users.aleksandarx, // aca maca? :)
            Users.smiljandj,
            Users.boskox            
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.unknown,
            Users.milenat,
            Users.bojans,
            Users.miodragt,
            Users.milosv,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.tijanat,
            Users.jasminai,
            Users.aleksandarx, // aca maca? :)
            Users.smiljandj,
            Users.boskox
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.tijanat,
            Teams.Red.id,
            78.4,
            undefined,
            9.7,
            1399,
            {
                total: 136,
                data: [
                    {target: Users.jasminai, count: 2},
                    {target: Users.smiljandj, count: 1},
                    {target: Users.boskox, count: 2},
                    {target: Users.bojans, count: 23},
                    {target: Users.milenat, count: 28},
                    {target: Users.unknown, count: 27},
                    {target: Users.miodragt, count: 32},
                    {target: Users.milosv, count: 21},
                ]
            },
            {
                total: 68,
                data: [
                    {target: Users.aleksandarx, count: 2},
                    {target: Users.smiljandj, count: 1},
                    {target: Users.bojans, count: 25},
                    {target: Users.milenat, count: 14},
                    {target: Users.unknown, count: 7},
                    {target: Users.miodragt, count: 5},
                    {target: Users.milosv, count: 14},
                ]
            },
            50,
            6800,
            3400,
            32,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.jasminai,
            Teams.Red.id,
            9.3,
            undefined,
            5.6,
            532,
            {
                total: 30,
                data: [
                    {target: Users.boskox, count: 1},
                    {target: Users.bojans, count: 3},
                    {target: Users.milenat, count: 7},
                    {target: Users.unknown, count: 9},
                    {target: Users.miodragt, count: 5},
                    {target: Users.milosv, count: 5},
                ]
            },
            {
                total: 118,
                data: [
                    {target: Users.aleksandarx, count: 1},
                    {target: Users.tijanat, count: 2},
                    {target: Users.smiljandj, count: 3},
                    {target: Users.boskox, count: 10},
                    {target: Users.bojans, count: 27},
                    {target: Users.milenat, count: 16},
                    {target: Users.unknown, count: 19},
                    {target: Users.miodragt, count: 15},
                ]
            },
            50,
            1500,
            5890,
            56,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.unknown,
            Teams.Blue.id,
            25,
            undefined,
            5.7,
            1236,
            {
                total: 70,
                data: [
                    {target: Users.aleksandarx, count: 14},
                    {target: Users.jasminai, count: 19},
                    {target: Users.tijanat, count: 7},
                    {target: Users.smiljandj, count: 15},
                    {target: Users.boskox, count: 13},
                    {target: Users.bojans, count: 1},
                    {target: Users.milosv, count: 1},
                ]
            },
            {
                total: 103,
                data: [
                    {target: Users.aleksandarx, count: 10},
                    {target: Users.jasminai, count: 9},
                    {target: Users.tijanat, count: 27},
                    {target: Users.smiljandj, count: 22},
                    {target: Users.boskox, count: 33},
                    {target: Users.milosv, count: 2},
                ]
            },
            50,
            3500,
            5130,
            48,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.milenat,
            Teams.Blue.id,
            29.4,
            undefined,
            4.9,
            1415,
            {
                total: 69,
                data: [
                    {target: Users.aleksandarx, count: 14},
                    {target: Users.jasminai, count: 16},
                    {target: Users.tijanat, count: 14},
                    {target: Users.smiljandj, count: 12},
                    {target: Users.boskox, count: 13},
                ]
            },
            {
                total: 83, // 85
                data: [
                    {target: Users.player0, count: 2},
                    {target: Users.aleksandarx, count: 2},
                    {target: Users.jasminai, count: 7},
                    {target: Users.tijanat, count: 28},
                    {target: Users.smiljandj, count: 23},
                    {target: Users.boskox, count: 21},
                    {target: Users.bojan, count: 1},
                    {target: Users.milosv, count: 1},
                ]
            },
            50,
            3450,
            4153,
            40,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bojans,
            Teams.Blue.id,
            62.8,
            undefined,
            8.6,
            1663,
            {
                total: 143,
                data: [
                    {target: Users.aleksandarx, count: 25},
                    {target: Users.jasminai, count: 27},
                    {target: Users.tijanat, count: 25},
                    {target: Users.smiljandj, count: 33},
                    {target: Users.boskox, count: 30},
                    {target: Users.milenat, count: 1},
                    {target: Users.miodragt, count: 1},
                    {target: Users.milosv, count: 1},
                ]
            },
            {
                total: 87, //88
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.aleksandarx, count: 4},
                    {target: Users.jasminai, count: 3},
                    {target: Users.tijanat, count: 23},
                    {target: Users.smiljandj, count: 25},
                    {target: Users.boskox, count: 30},
                    {target: Users.unknown, count: 1},
                    {target: Users.miodragt, count: 1},
                ]
            },
            50,
            7150,
            4351,
            42,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.aleksandarx,
            Teams.Red.id,
            15.4,
            undefined,
            2.6,
            1528,
            {
                total: 39,
                data: [
                    {target: Users.jasminai, count: 1},
                    {target: Users.tijanat, count: 2},
                    {target: Users.boskox, count: 1},
                    {target: Users.bojans, count: 4},
                    {target: Users.milenat, count: 2},
                    {target: Users.unknown, count: 10},
                    {target: Users.miodragt, count: 14},
                    {target: Users.milosv, count: 5},
                ]
            },
            {
                total: 88,
                data: [
                    {target: Users.smiljandj, count: 1},
                    {target: Users.boskox, count: 1},
                    {target: Users.bojans, count: 25},
                    {target: Users.milenat, count: 14},
                    {target: Users.unknown, count: 14},
                    {target: Users.miodragt, count: 7},
                    {target: Users.milosv, count: 26},
                ]
            },
            50,
            1950,
            4400,
            42,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.miodragt,
            Teams.Blue.id,
            14.9,
            undefined,
            6.4,
            749,
            {
                total: 48,
                data: [
                    {target: Users.aleksandarx, count: 7},
                    {target: Users.jasminai, count: 15},
                    {target: Users.tijanat, count: 5},
                    {target: Users.smiljandj, count: 9},
                    {target: Users.boskox, count: 10},
                    {target: Users.bojans, count: 1},
                    {target: Users.milosv, count: 1},
                ]
            },
            {
                total: 119, //120
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.aleksandarx, count: 14},
                    {target: Users.jasminai, count: 5},
                    {target: Users.tijanat, count: 32},
                    {target: Users.smiljandj, count: 39},
                    {target: Users.boskox, count: 25},
                    {target: Users.bojans, count: 1},
                    {target: Users.milosv, count: 1},
                ]
            },
            50,
            2400,
            5891,
            55,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.milosv,
            Teams.Blue.id,
            44.1,
            undefined,
            15.5,
            711,
            {
                total: 110,
                data: [
                    {target: Users.aleksandarx, count: 26},
                    {target: Users.jasminai, count: 25},
                    {target: Users.tijanat, count: 14},
                    {target: Users.smiljandj, count: 23},
                    {target: Users.boskox, count: 18},
                    {target: Users.milenat, count: 1},
                    {target: Users.unknown, count: 2},
                    {target: Users.miodragt, count: 1},
                ]
            },
            {
                total: 106,//108
                data: [
                    // {target: Users.player0, count: 2},
                    {target: Users.aleksandarx, count: 5},
                    {target: Users.jasminai, count: 5},
                    {target: Users.tijanat, count: 21},
                    {target: Users.smiljandj, count: 37},
                    {target: Users.boskox, count: 35},
                    {target: Users.bojans, count: 1},
                    {target: Users.unknown, count: 1},
                ]
            },
            50,
            5500,
            5302,
            52,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.smiljandj,
            Teams.Red.id,
            65.1,
            undefined,
            11,
            1385,
            {
                total: 152,
                data: [
                    {target: Users.aleksandarx, count: 1},
                    {target: Users.jasminai, count: 3},
                    {target: Users.tijanat, count: 1},
                    {target: Users.boskox, count: 1},
                    {target: Users.bojans, count: 25},
                    {target: Users.milenat, count: 23},
                    {target: Users.unknown, count: 22},
                    {target: Users.miodragt, count: 39},
                ]
            },
            {
                total: 93,//94
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.tijanat, count: 1},
                    {target: Users.bojans, count: 33},
                    {target: Users.milenat, count: 12},
                    {target: Users.unknown, count: 15},
                    {target: Users.miodragt, count: 9},
                    {target: Users.milosv, count: 23},
                ]
            },
            50,
            7600,
            4690,
            44,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.boskox,
            Teams.Red.id,
            64.2,
            undefined,
            5.9,
            2613,
            {
                total: 155,
                data: [
                    {target: Users.aleksandarx, count: 1},
                    {target: Users.jasminai, count: 10},
                    {target: Users.bojans, count: 30},
                    {target: Users.milenat, count: 21},
                    {target: Users.unknown, count: 33},
                    {target: Users.miodragt, count: 25},
                    {target: Users.milosv, count: 35},
                ]
            },
            {
                total: 89,
                data: [
                    {target: Users.aleksandarx, count: 1},
                    {target: Users.jasminai, count: 1},
                    {target: Users.tijanat, count: 2},
                    {target: Users.smiljandj, count: 1},
                    {target: Users.bojans, count: 30},
                    {target: Users.milenat, count: 13},
                    {target: Users.unknown, count: 13},
                    {target: Users.miodragt, count: 10},
                ]
            },
            50,
            7750,
            4450,
            43,
            0,
            0,
            undefined
        )
    ]
};
