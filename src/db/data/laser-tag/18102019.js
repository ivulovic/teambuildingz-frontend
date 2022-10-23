import { Teams } from "../teams";
import { Users } from "../users";
import makeStatistic from "./makeStatistic";

export const data = {
    id: '10',
    name: 'Laser Tag',
    organization: 'LaserTag',
    location: 'Kluz Zvezdara',
    date: '18.10.2019.',
    participants: [   
        Users.terza,
        Users.mikax,
        Users.smiljandj,
        Users.boskov,
        Users.predragm,
        Users.bojans,
        Users.jelenad,
        Users.tijanat
    ],
    teams: [
      {
        ...Teams.Blue,
        participants: [
            Users.terza,
            Users.mikax,
            Users.smiljandj,
            Users.boskov,
        ]
      },
      {
        ...Teams.Red,
        participants: [
            Users.predragm,
            Users.bojans,
            Users.jelenad,
            Users.tijanat
        ]
      },
    ],
    statistic: [
       makeStatistic(
        Users.terza,
        Teams.Blue.id,
        32.1,
        undefined,
        4.7,
        2045,
        {
            total: 96,
            data:[
                {target: Users.tijanat, count: 33},
                {target: Users.jelenad, count: 27},
                {target: Users.bojans, count: 18},
                {target: Users.predragm, count: 16},
                {target: Users.mikax, count: 1},
                {target: Users.smiljandj, count: 1},
            ]
        },
        {
            total: 108,
            data:[
                {target: Users.tijanat, count: 44},
                {target: Users.jelenad, count: 9},
                {target: Users.bojans, count: 34},
                {target: Users.predragm, count: 15},
                {target: Users.mikax, count: 1},
                {target: Users.smiljandj, count: 2},
                {target: Users.boskov, count: 3},
            ]
        },
        50,
        4800,
        5400,
        52,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.mikax,
        Teams.Blue.id,
        16.4,
        undefined,
        4.4,
        1585,
        {
            total: 69,
            data:[
                {target: Users.tijanat, count: 20},
                {target: Users.jelenad, count: 12},
                {target: Users.bojans, count: 21},
                {target: Users.predragm, count: 12},
                {target: Users.terza, count: 1},
                {target: Users.smiljandj, count:2},
                {target: Users.boskov, count:1},
            ]
        },
        {
            total: 151, // 152
            data:[
                // {target: Users.player0, count: 1},
                {target: Users.tijanat, count: 44},
                {target: Users.jelenad, count: 13},
                {target: Users.bojans, count: 53},
                {target: Users.predragm, count: 33},
                {target: Users.terza, count: 1},
                {target: Users.smiljandj, count: 2},
                {target: Users.boskov, count: 5},
            ]
        },
        50,
        3450,
        7557,
        73,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.smiljandj,
        Teams.Blue.id,
        52.8,
        undefined,
        11.1,
        1340,
        {
            total: 149,
            data:[
                {target: Users.tijanat, count: 45},
                {target: Users.jelenad, count: 34},
                {target: Users.bojans, count: 35},
                {target: Users.predragm, count: 29},
                {target: Users.terza, count: 2},
                {target: Users.mikax, count:2},
                {target: Users.boskov, count:2},
            ]
        },
        {
            total: 114,
            data:[
                {target: Users.tijanat, count: 29},
                {target: Users.jelenad, count: 16},
                {target: Users.bojans, count: 48},
                {target: Users.predragm, count: 16},
                {target: Users.terza, count: 1},
                {target: Users.mikax, count: 2},
                {target: Users.boskov, count: 2},
            ]
        },
        50,
        7450,
        5690,
        55,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.boskov,
        Teams.Blue.id,
        85.7,
        undefined,
        7.9,
        2685,
        {
            total: 211,
            data:[
                {target: Users.tijanat, count: 51},
                {target: Users.jelenad, count: 52},
                {target: Users.bojans, count: 41},
                {target: Users.predragm, count: 57},
                {target: Users.terza, count: 3},
                {target: Users.mikax, count: 5},
                {target: Users.smiljandj, count:2},
            ]
        },
        {
            total: 93, // 94
            data:[
                // {target: Users.player0, count: 1},
                {target: Users.tijanat, count: 27},
                {target: Users.jelenad, count: 8},
                {target: Users.bojans, count: 32},
                {target: Users.predragm, count: 23},
                {target: Users.mikax, count: 1},
                {target: Users.smiljandj, count: 2},
            ]
        },
        50,
        10550,
        4645,
        43,
        0,
        0,
        undefined
       ),
       makeStatistic(
        Users.predragm,
        Teams.Red.id,
        29.5,
        undefined,
        7.2,
        1270,
        {
            total: 92,
            data: [
                {target: Users.tijanat, count: 2},
                {target: Users.jelenad, count: 2},
                {target: Users.bojans, count: 1},
                {target: Users.terza, count: 15},
                {target: Users.mikax, count: 33},
                {target: Users.smiljandj, count: 16},
                {target: Users.boskov, count: 23},
            ]
        },
        {
            total: 118,
            data: [
                {target: Users.tijanat, count: 1},
                {target: Users.bojans, count: 3},
                {target: Users.terza, count: 16},
                {target: Users.mikax, count: 12},
                {target: Users.smiljandj, count: 29},
                {target: Users.boskov, count: 57},
            ]
        },
        50,
        4600,
        5900,
        58,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.bojans,
        Teams.Red.id,
        55.9,
        undefined,
        7.5,
        2294,
        {
            total: 172,
            data: [
                {target: Users.tijanat, count: 2},
                {target: Users.predragm, count: 3},
                {target: Users.terza, count: 34},
                {target: Users.mikax, count: 53},
                {target: Users.smiljandj, count: 48},
                {target: Users.boskov, count: 32},
            ]
        },
        {
            total: 117,
            data: [
                {target: Users.tijanat, count: 1},
                {target: Users.predragm, count: 1},
                {target: Users.terza, count: 18},
                {target: Users.mikax, count: 21},
                {target: Users.smiljandj, count: 35},
                {target: Users.boskov, count: 41},
            ]
        },
        50,
        8600,
        5850,
        56,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.jelenad,
        Teams.Red.id,
        12.8,
        undefined,
        3.5,
        1301,
        {
            total: 46,
            data: [
                {target: Users.terza, count: 9},
                {target: Users.mikax, count: 13},
                {target: Users.smiljandj, count: 16},
                {target: Users.boskov, count: 8},
            ]
        },
        {
            total: 127,
            data: [
                {target: Users.predragm, count: 2},
                {target: Users.terza, count: 27},
                {target: Users.mikax, count: 12},
                {target: Users.smiljandj, count: 34},
                {target: Users.boskov, count: 52},
            ]
        },
        50,
        2300,
        6340,
        61,
        0,
        0,
        undefined,
       ),
       makeStatistic(
        Users.tijanat,
        Teams.Red.id,
        37.7,
        undefined,
        9.7,
        1512,
        {
            total: 146,
            data: [
                {target: Users.bojans, count: 1},
                {target: Users.predragm, count: 1},
                {target: Users.terza, count: 44},
                {target: Users.mikax, count: 44},
                {target: Users.smiljandj, count: 29},
                {target: Users.boskov, count: 27},
            ]
        },
        {
            total: 153,
            data: [
                {target: Users.bojans, count: 2},
                {target: Users.predragm, count: 2},
                {target: Users.terza, count: 33},
                {target: Users.mikax, count: 20},
                {target: Users.smiljandj, count: 45},
                {target: Users.boskov, count: 51},
            ]
        },
        50,
        7300,
        7640,
        75,
        0,
        0,
        undefined,
       ),
    ]
};
