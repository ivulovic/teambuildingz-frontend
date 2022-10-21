import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '2',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Beograd, Stari Kluz',
    date: '12.07.2018.',
    participants: [
        Users.jasminai,
        Users.denisInstr,
        Users.radosx,
        Users.bratislavx,
        Users.terza,
        Users.boskov,
        Users.bojans,
        Users.ivanm,
        Users.milenat,
        Users.tasicInstr,
        Users.tijanat,
        Users.igors
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.jasminai,
            Users.denisInstr,
            Users.radosx,
            Users.bratislavx,
            Users.terza,
            Users.boskov,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.bojans,
            Users.ivanm,
            Users.milenat,
            Users.tasicInstr,
            Users.tijanat,
            Users.igors
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.jasminai,
            Teams.Blue.id,
            13.9,
            undefined,
            4.6,
            1232,
            {
                total: 57,
                data: [
                    { target: Users.bojans, count: 7 },
                    { target: Users.ivanm, count: 6 },
                    { target: Users.tijanat, count: 5 },
                    { target: Users.igors, count: 15 },
                    { target: Users.tasicInstr, count: 3 },
                    { target: Users.milenat, count: 5 },
                    { target: Users.denisInstr, count: 13 },
                    { target: Users.terza, count: 3 },
                ]
            },
            {
                total: 147,// 148
                data: [
                    // { target: Users.player0, count: 1 },
                    { target: Users.bojans, count: 23 },
                    { target: Users.ivanm, count: 16},
                    { target: Users.tijanat, count: 34},
                    { target: Users.igors, count: 28},
                    { target: Users.tasicInstr, count: 19},
                    { target: Users.milenat, count: 10},
                    { target: Users.boskov, count: 7},
                ]
            },
            50,
            2850,
            7341,
            72,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.bojans,
            Teams.Red.id,
            71.6,
            undefined,
            10.1,
            1914,
            {
                total: 193,
                data: [
                    {target: Users.ivanm, count: 2},
                    {target: Users.igors, count: 3},
                    {target: Users.milenat, count: 5},
                    {target: Users.boskov, count: 25},
                    {target: Users.jasminai, count: 23},
                    {target: Users.radosx, count: 28},
                    {target: Users.denisInstr, count: 54},
                    {target: Users.bratislavx, count: 28},
                ]
            },
            {
                total: 107,
                data: [
                    {target: Users.ivanm, count: 1},
                    {target: Users.tijanat, count: 1},
                    {target: Users.igors, count: 3},
                    {target: Users.milenat, count: 1},
                    {target: Users.boskov, count: 32},
                    {target: Users.jasminai, count: 7},
                    {target: Users.radosx, count: 14},
                    {target: Users.denisInstr, count: 14},
                ]
            },
            50,
            9650,
            5340,
            52,
            0,
            0,
            undefined,
        ),
        makeStatistic(
            Users.denisInstr,
            Teams.Blue.id,
            29,
            undefined,
            5.4,
            3814,
            {
                total: 206,
                data: [
                    {target: Users.bojans, count: 27},
                    {target: Users.ivanm, count: 35},
                    {target: Users.tijanat, count: 32},
                    {target: Users.igors, count: 30},
                    {target: Users.tasicInstr, count: 10},
                    {target: Users.milenat, count: 66},
                    {target: Users.jasminai, count: 2},
                    {target: Users.radosx, count: 1},
                ]
            },
            {
                total: 261,
                data: [
                    {target: Users.bojans, count: 54},
                    {target: Users.ivanm, count: 30},
                    {target: Users.tijanat, count: 55},
                    {target: Users.igors, count: 30},
                    {target: Users.tasicInstr, count: 12},
                    {target: Users.milenat, count: 42},
                    {target: Users.boskov, count: 14},
                    {target: Users.jasminai, count: 13},
                ]
            },
            50,
            10300,
            13020,
            124,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.ivanm,
            Teams.Red.id,
            23.4,
            undefined,
            7.2,
            1421,
            {
                total: 102,
                data: [
                    {target: Users.bojans, count: 1},
                    {target: Users.tijanat, count: 1},
                    {target: Users.milenat, count: 4},
                    {target: Users.boskov, count: 9},
                    {target: Users.jasminai, count: 16},
                    {target: Users.radosx, count: 18},
                    {target: Users.denisInstr, count: 30},
                    {target: Users.bratislavx, count: 17},
                ]
            },
            {
                total: 164,// 165
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.bojans, count: 2},
                    {target: Users.tijanat, count: 5},
                    {target: Users.igors, count: 1},
                    {target: Users.milenat, count: 2},
                    {target: Users.boskov, count: 56},
                    {target: Users.jasminai, count: 6},
                    {target: Users.radosx, count: 29},
                ]
            },
            50,
            5100,
            8177,
            80,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.milenat,
            Teams.Red.id,
            13,
            undefined,
            3.3,
            2839,
            {
                total: 95,
                data: [
                    {target: Users.bojans, count: 1},
                    {target: Users.ivanm, count: 2},
                    {target: Users.tijanat, count: 1},
                    {target: Users.igors, count: 1},
                    {target: Users.tasicInstr, count: 2},
                    {target: Users.boskov, count: 9},
                    {target: Users.jasminai, count: 10},
                    {target: Users.radosx, count: 3},
                ]
            },
            {
                total: 258,// 259
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.bojans, count: 5},
                    {target: Users.ivanm, count: 4},
                    {target: Users.tijanat, count: 3},
                    {target: Users.igors, count: 4},
                    {target: Users.boskov, count: 46},
                    {target: Users.jasminai, count: 5},
                    {target: Users.radosx, count: 56},
                ]
            },
            50,
            4750,
            12832,
            123,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.radosx,
            Teams.Blue.id,
            43.1,
            undefined,
            10.1,
            1410,
            {
                total: 143,
                data: [
                    {target: Users.bojans, count: 14},
                    {target: Users.ivanm, count: 29},
                    {target: Users.tijanat, count: 13},
                    {target: Users.igors, count: 19},
                    {target: Users.tasicInstr, count: 4},
                    {target: Users.milenat, count: 56},
                    {target: Users.jasminai, count: 1},
                    {target: Users.denisInstr, count: 2},
                ]
            },
            {
                total: 130,// 132
                data: [
                    // {target: Users.player0, count: 2},
                    {target: Users.bojans, count: 28},
                    {target: Users.ivanm, count: 18},
                    {target: Users.tijanat, count: 24},
                    {target: Users.igors, count: 20},
                    {target: Users.tasicInstr, count: 29},
                    {target: Users.milenat, count: 3},
                    {target: Users.boskov, count: 5},
                ]
            },
            50,
            7150,
            6503,
            58,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.tasicInstr,
            Teams.Red.id,
            130.2,
            undefined,
            8.2,
            1276,
            {
                total: 104,
                data: [
                    {target: Users.boskov, count: 15},
                    {target: Users.jasminai, count: 19},
                    {target: Users.radosx, count: 29},
                    {target: Users.denisInstr, count: 12},
                    {target: Users.bratislavx, count: 14},
                    {target: Users.terza, count: 15},
                ]
            },
            {
                total: 30,
                data: [
                    {target: Users.igors, count: 2},
                    {target: Users.milenat, count: 2},
                    {target: Users.boskov, count: 6},
                    {target: Users.jasminai, count: 3},
                    {target: Users.radosx, count: 4},
                    {target: Users.denisInstr, count: 10},
                    {target: Users.bratislavx, count: 2},
                    {target: Users.terza, count: 1},
                ]
            },
            50,
            5200,
            1500,
            14,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bratislavx,
            Teams.Blue.id,
            30.4,
            undefined,
            4.5,
            2277,
            {
                total: 102,
                data: [
                    {target: Users.bojans, count: 10},
                    {target: Users.ivanm, count: 10},
                    {target: Users.tijanat, count: 17},
                    {target: Users.igors, count: 22},
                    {target: Users.tasicInstr, count: 2},
                    {target: Users.milenat, count: 31},
                    {target: Users.jasminai, count: 2},
                    {target: Users.radosx, count: 1},
                ]
            },
            {
                total: 121,
                data: [
                    {target: Users.bojans, count: 28},
                    {target: Users.ivanm, count: 17},
                    {target: Users.tijanat, count: 24},
                    {target: Users.igors, count: 15},
                    {target: Users.tasicInstr, count: 14},
                    {target: Users.milenat, count: 11},
                    {target: Users.boskov, count: 6},
                    {target: Users.radosx, count: 3},
                ]
            },
            50,
            5100,
            6050,
            57,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.tijanat,
            Teams.Red.id,
            71.1,
            undefined,
            13.7,
            1575,
            {
                total: 216,
                data: [
                    {target: Users.bojans, count: 1},
                    {target: Users.ivanm, count: 5},
                    {target: Users.igors, count: 4},
                    {target: Users.milenat, count: 3},
                    {target: Users.boskov, count: 26},
                    {target: Users.jasminai, count: 34},
                    {target: Users.radosx, count: 24},
                    {target: Users.denisInstr, count: 55},
                ]
            },
            {
                total: 128,
                data: [
                    {target: Users.ivanm, count: 1},
                    {target: Users.igors, count: 2},
                    {target: Users.milenat, count: 1},
                    {target: Users.boskov, count: 43},
                    {target: Users.jasminai, count: 5},
                    {target: Users.radosx, count: 13},
                    {target: Users.denisInstr, count: 32},
                    {target: Users.bratislavx, count: 17},
                ]
            },
            50,
            10800,
            6400,
            63,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.terza,
            Teams.Blue.id,
            32.1,
            undefined,
            7.6,
            1341,
            {
                total: 102,
                data: [
                    {target: Users.bojans, count: 11},
                    {target: Users.ivanm, count: 17},
                    {target: Users.tijanat, count: 14},
                    {target: Users.igors, count: 14},
                    {target: Users.tasicInstr, count: 1},
                    {target: Users.milenat, count: 36},
                    {target: Users.jasminai, count: 5},
                    {target: Users.radosx, count: 1},
                ]
            },
            {
                total: 121,
                data: [
                    {target: Users.bojans, count: 25},
                    {target: Users.ivanm, count: 6},
                    {target: Users.tijanat, count: 40},
                    {target: Users.igors, count: 12},
                    {target: Users.tasicInstr, count: 15},
                    {target: Users.milenat, count: 13},
                    {target: Users.boskov, count: 1},
                    {target: Users.jasminai, count: 3},
                ]
            },
            50,
            5100,
            6020,
            55,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.boskov,
            Teams.Blue.id,
            98.7,
            undefined,
            6.6,
            3723,
            {
                total: 246,
                data: [
                    {target: Users.bojans, count: 32},
                    {target: Users.ivanm, count: 56},
                    {target: Users.tijanat, count: 43},
                    {target: Users.igors, count: 29},
                    {target: Users.tasicInstr, count: 6},
                    {target: Users.milenat, count: 46},
                    {target: Users.jasminai, count: 7},
                    {target: Users.radosx, count: 5},
                ]
            },
            {
                total: 92,//93
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.bojans, count: 25},
                    {target: Users.ivanm, count: 9},
                    {target: Users.tijanat, count: 26},
                    {target: Users.igors, count: 8},
                    {target: Users.tasicInstr, count: 15},
                    {target: Users.milenat, count: 9},
                ]
            },
            50,
            12300,
            4610,
            43,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.igors,
            Teams.Red.id,
            35.7,
            undefined,
            9.2,
            1363,
            {
                total: 125,
                data:[
                    {target: Users.bojans, count: 3},
                    {target: Users.ivanm, count: 1},
                    {target: Users.tijanat, count: 2},
                    {target: Users.tasicInstr, count: 2},
                    {target: Users.milenat, count: 4},
                    {target: Users.boskov, count: 8},
                    {target: Users.jasminai, count: 28},
                    {target: Users.radosx, count: 20},
                ]
            },
            {
                total: 137,
                data:[
                    {target: Users.bojans, count: 3},
                    {target: Users.tijanat, count: 4},
                    {target: Users.milenat, count: 1},
                    {target: Users.boskov, count: 29},
                    {target: Users.jasminai, count: 15},
                    {target: Users.radosx, count: 19},
                    {target: Users.denisInstr, count: 30},
                    {target: Users.bratislavx, count: 22},
                ]
            },
            50,
            6250,
            6850,
            68,
            0,
            0,
            undefined
        )
    ]
};
