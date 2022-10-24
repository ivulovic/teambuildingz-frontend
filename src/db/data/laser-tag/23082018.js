import { Activities } from "../activities";
import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '6',
    activity: Activities.LaserTag,
    date: '23.08.2018.',
    participants: [   
        Users.milenat,
        Users.milosv,
        Users.boskoz,
        Users.jasminai,
        Users.mirak,
        Users.tijanat,
        Users.bojans,
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.milenat,
            Users.milosv,
            Users.boskoz,
            Users.jasminai
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.mirak,
            Users.tijanat,
            Users.bojans,
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.mirak,
            Teams.Red.id,
            36.6,
            undefined,
            7.9,
            1409,
            {
                total: 111,
                data: [
                    {target: Users.tijanat, count: 1},
                    {target: Users.jasminai, count: 45},
                    {target: Users.milosv, count: 34},
                    {target: Users.bojans, count: 2},
                    {target: Users.boskoz, count: 20},
                    {target: Users.milenat, count: 9},
                ]
            },
            {
                total: 116,
                data: [
                    {target: Users.tijanat, count: 2},
                    {target: Users.jasminai, count: 11},
                    {target: Users.milosv, count: 43},
                    {target: Users.bojans, count: 1},
                    {target: Users.boskoz, count: 35},
                    {target: Users.milenat, count: 24},
                ]
            },
            50,
            5550,
            5800,
            56,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.tijanat,
            Teams.Red.id,
            48.5,
            undefined,
            9.3,
            1508,
            {
                total: 140,
                data: [
                    {target: Users.mirak, count: 2},
                    {target: Users.jasminai, count: 37},
                    {target: Users.milosv, count: 36},
                    {target: Users.bojans, count: 2},
                    {target: Users.boskoz, count: 25},
                    {target: Users.milenat, count: 38},
                ]
            },
            {
                total: 113,
                data: [
                    {target: Users.mirak, count: 1},
                    {target: Users.jasminai, count: 4},
                    {target: Users.milosv, count: 33},
                    {target: Users.boskoz, count: 31},
                    {target: Users.milenat, count: 44},
                ]
            },
            50,
            7000,
            5650,
            54,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.bojans,
            Teams.Red.id,
            49.7,
            undefined,
            9.8,
            1281,
            {
                total: 126,
                data: [
                    {target: Users.mirak, count: 1},
                    {target: Users.jasminai, count: 41},
                    {target: Users.milosv, count: 24},
                    {target: Users.boskoz, count: 28},
                    {target: Users.milenat, count: 32},
                ]
            },
            {
                total: 100,
                data: [
                    {target: Users.tijanat, count: 2},
                    {target: Users.mirak, count: 2},
                    {target: Users.jasminai, count: 7},
                    {target: Users.milosv, count: 24},
                    {target: Users.boskoz, count: 40},
                    {target: Users.milenat, count: 25},
                ]
            },
            50,
            6300,
            5000,
            48,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.milenat,
            Teams.Blue.id,
            46,
            undefined,
            7.9,
            1256,
            {
                total: 99,
                data: [
                    { target: Users.tijanat, count: 44 },
                    { target: Users.mirak, count: 24 },
                    { target: Users.jasminai, count: 1 },
                    { target: Users.milosv, count: 2 },
                    { target: Users.bojans, count: 25 },
                    { target: Users.boskoz, count: 3 },
                ]
            },
            {
                total: 80, // 82
                data: [
                    // { target: Users.player0, count: 2 },
                    { target: Users.tijanat, count: 38 },
                    { target: Users.mirak, count: 9 },
                    { target: Users.jasminai, count: 1 },
                    { target: Users.bojans, count: 32 },
                ]
            },
            50,
            4950,
            4003,
            38,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.milosv,
            Teams.Blue.id,
            43.6,
            undefined,
            13.4,
            752,
            {
                total: 101,
                data: [
                    { target: Users.tijanat, count: 33 },
                    { target: Users.mirak, count: 43 },
                    { target: Users.jasminai, count: 1 },
                    { target: Users.bojans, count: 24 },
                ]
            },
            {
                total: 96, // 97
                data: [
                    // { target: Users.player0, count: 1 },
                    { target: Users.tijanat, count: 36 },
                    { target: Users.mirak, count: 34 },
                    { target: Users.bojans, count: 24 },
                    { target: Users.milenat, count: 2 },
                ]
            },
            50,
            5050,
            4801,
            47,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.boskoz,
            Teams.Blue.id,
            57.4,
            undefined,
            13.4,
            792,
            {
                total: 106,
                data: [
                    { target: Users.tijanat, count: 31 },
                    { target: Users.mirak, count: 35 },
                    { target: Users.bojans, count: 40 },
                ]
            },
            {
                total: 76, // 77
                data: [
                    // { target: Users.player0, count: 1 },
                    { target: Users.tijanat, count: 25 },
                    { target: Users.mirak, count: 20 },
                    { target: Users.bojans, count: 28 },
                    { target: Users.milenat, count: 3 },
                ]
            },
            50,
            5300,
            3802,
            36,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.jasminai,
            Teams.Blue.id,
            6.7,
            undefined,
            4.7,
            488,
            {
                total: 23,
                data: [
                    { target: Users.tijanat, count: 4 },
                    { target: Users.mirak, count: 11 },
                    { target: Users.bojans, count: 7 },
                    { target: Users.milenat, count: 1 },
                ]
            },
            {
                total: 125,
                data: [
                    { target: Users.tijanat, count: 37 },
                    { target: Users.mirak, count: 45 },
                    { target: Users.milosv, count: 1 },
                    { target: Users.bojans, count: 41 },
                    { target: Users.milenat, count: 1 },
                ]
            },
            50,
            5300,
            3802,
            36,
            0,
            0,
            undefined
        )
    ]
};
