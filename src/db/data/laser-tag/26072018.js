import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '4',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Beograd, Stari Kluz',
    date: '26.07.2018.',
    participants: [
            Users.hristinab,
            Users.milosv,
            Users.bratislavx,
            Users.radosx,
            Users.boskox, 
            Users.tijanat,
            Users.ivanar,
            Users.mirak,
            Users.bojans,
            Users.igors       
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.hristinab,
            Users.milosv,
            Users.bratislavx,
            Users.radosx,
            Users.boskox
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.tijanat,
            Users.ivanar,
            Users.mirak,
            Users.bojans,
            Users.igors
        ]
      },
    ],
    statistic:[
        makeStatistic(
            Users.hristinab,
            Teams.Blue.id,
            16,
            undefined,
            5.3,
            738,
            {
                total: 39,
                data: [
                    {target: Users.bojans, count: 8},
                    {target: Users.tijanat, count: 5},
                    {target: Users.ivanar, count: 11},
                    {target: Users.mirak, count: 6},
                    {target: Users.igors, count: 9},
                ]
            },
            {
                total: 89,
                data: [
                    {target: Users.bojans, count: 29},
                    {target: Users.tijanat, count: 33},
                    {target: Users.ivanar, count: 8},
                    {target: Users.mirak, count: 6},
                    {target: Users.igors, count: 13},
                ]
            },
            50,
            1950,
            4450,
            44,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.milosv,
            Teams.Blue.id,
            63.9,
            undefined,
            17.3,
            699,
            {
                total: 121,
                data: [
                    {target: Users.bojans, count: 20},
                    {target: Users.tijanat, count: 30},
                    {target: Users.ivanar, count: 18},
                    {target: Users.mirak, count: 29},
                    {target: Users.igors, count: 24},
                ]
            },
            {
                total: 84,
                data: [
                    {target: Users.bojans, count: 31},
                    {target: Users.tijanat, count: 24},
                    {target: Users.ivanar, count: 6},
                    {target: Users.mirak, count: 7},
                    {target: Users.igors, count: 16},
                ]
            },
            50,
            6050,
            4200,
            41,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bratislavx,
            Teams.Blue.id,
            43.8,
            undefined,
            4.8,
            2250,
            {
                total: 109,
                data: [
                    {target: Users.bojans, count: 23},
                    {target: Users.tijanat, count: 18},
                    {target: Users.ivanar, count: 20},
                    {target: Users.mirak, count: 23},
                    {target: Users.igors, count: 25},
                ]
            },
            {
                total: 89, // 90
                data: [
                    {target: Users.bojans, count: 26},
                    {target: Users.tijanat, count: 30},
                    {target: Users.ivanar, count: 16},
                    {target: Users.mirak, count: 5},
                    {target: Users.igors, count: 12},
                    // {target: Users.unknown, count: 1},
                ]
            },
            50,
            5450,
            4470,
            44,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.radosx,
            Teams.Blue.id,
            30,
            undefined,
            5.2,
            1699,
            {
                total: 88,
                data: [
                    {target: Users.bojans, count: 12},
                    {target: Users.tijanat, count: 20},
                    {target: Users.ivanar, count: 12},
                    {target: Users.mirak, count: 15},
                    {target: Users.igors, count: 29},
                ]
            },
            {
                total: 106,//107
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.bojans, count: 38},
                    {target: Users.tijanat, count: 28},
                    {target: Users.ivanar, count: 18},
                    {target: Users.mirak, count: 6},
                    {target: Users.igors, count: 16},
                ]
            },
            50,
            4400,
            5301,
            50,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.boskox,
            Teams.Blue.id,
            48.1,
            undefined,
            5.7,
            2377,
            {
                total: 136,
                data: [
                    {target: Users.bojans, count: 29},
                    {target: Users.tijanat, count: 30},
                    {target: Users.ivanar, count: 20},
                    {target: Users.mirak, count: 22},
                    {target: Users.igors, count: 35},
                ]
            },
            {
                total: 104,
                data: [
                    {target: Users.bojans, count: 47},
                    {target: Users.tijanat, count: 29},
                    {target: Users.ivanar, count: 10},
                    {target: Users.mirak, count: 7},
                    {target: Users.igors, count: 11},
                ]
            },
            50,
            6800,
            5200,
            50,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.tijanat,
            Teams.Red.id,
            53.8,
            undefined,
            7.9,
            1827,
            {
                total: 145,
                data: [
                    {target: Users.igorj, count: 1},
                    {target: Users.radosx, count: 28},
                    {target: Users.boskox, count: 29},
                    {target: Users.bratislavx, count: 30},
                    {target: Users.milosv, count: 24},
                    {target: Users.hristinab, count: 33},
                ]
            },
            {
                total: 103,
                data: [
                    {target: Users.radosx, count: 20},
                    {target: Users.boskox, count: 30},
                    {target: Users.bratislavx, count: 18},
                    {target: Users.milosv, count: 30},
                    {target: Users.hristinab, count: 5},
                ]
            },
            50,
            7250,
            5150,
            50,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.ivanar,
            Teams.Red.id,
            26.3,
            undefined,
            5.7,
            1025,
            {
                total: 58,
                data: [
                    {target: Users.radosx, count: 18},
                    {target: Users.boskox, count: 10},
                    {target: Users.bratislavx, count: 16},
                    {target: Users.milosv, count: 6},
                    {target: Users.hristinab, count: 8},
                ]
            },
            {
                total: 81,
                data: [
                    {target: Users.radosx, count: 12},
                    {target: Users.boskox, count: 20},
                    {target: Users.bratislavx, count: 20},
                    {target: Users.milosv, count: 18},
                    {target: Users.hristinab, count: 11},
                ]
            },
            50,
            2900,
            4050,
            39,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.mirak,
            Teams.Red.id,
            11.5,
            undefined,
            3.3,
            929,
            {
                total: 31,
                data: [
                    {target: Users.radosx, count: 6},
                    {target: Users.boskox, count: 7},
                    {target: Users.bratislavx, count: 5},
                    {target: Users.milosv, count: 7},
                    {target: Users.hristinab, count: 6},
                ]
            },
            {
                total: 95,
                data: [
                    {target: Users.radosx, count: 15},
                    {target: Users.boskox, count: 22},
                    {target: Users.bratislavx, count: 23},
                    {target: Users.milosv, count: 29},
                    {target: Users.hristinab, count: 6},
                ]
            },
            50,
            1550,
            4750,
            46,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.bojans,
            Teams.Red.id,
            73.5,
            undefined,
            10,
            1710,
            {
                total: 171,
                data: [
                    {target: Users.radosx, count: 38},
                    {target: Users.boskox, count: 47},
                    {target: Users.bratislavx, count: 26},
                    {target: Users.milosv, count: 31},
                    {target: Users.hristinab, count: 29},
                ]
            },
            {
                total: 92,
                data: [
                    {target: Users.radosx, count: 12},
                    {target: Users.boskox, count: 29},
                    {target: Users.bratislavx, count: 23},
                    {target: Users.milosv, count: 20},
                    {target: Users.hristinab, count: 8},
                ]
            },
            50,
            8550,
            4590,
            44,
            0,
            0,
            undefined
        ),
        makeStatistic(
            Users.igors,
            Teams.Red.id,
            20.9,
            undefined,
            7.5,
            902,
            {
                total: 68,
                data: [
                    {target: Users.radosx, count: 16},
                    {target: Users.boskox, count: 11},
                    {target: Users.bratislavx, count: 12},
                    {target: Users.milosv, count: 16},
                    {target: Users.hristinab, count: 13},
                ]
            },
            {
                total: 123, // 124
                data: [
                    // {target: Users.player0, count: 1},
                    {target: Users.tijanat, count: 1},
                    {target: Users.radosx, count: 29},
                    {target: Users.boskox, count: 35},
                    {target: Users.bratislavx, count: 25},
                    {target: Users.milosv, count: 24},
                    {target: Users.hristinab, count: 9},
                ]
            },
            50,
            3400,
            6170,
            60,
            0,
            0,
            undefined
        )
    ]
};
