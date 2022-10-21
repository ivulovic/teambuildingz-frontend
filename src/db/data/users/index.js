const getAvatarImage = (id, gender = "male") => {
  const r = `https://avatars.dicebear.com/api/big-ears/${id}.svg?skinColor=variant02`;
  // ${gender =='female'?'&hair=straightHair':''}`;
  return r;
};

// const getAvatarImage = (id) => `https://robohash.org/${id}.png`;

export const Users = {
  unknown: {
    id: "0",
    name: "unknown",
    username: "unknown",
    image: getAvatarImage("unknown"),
  },
  ivanv: {
    id: "1",
    name: "Ivan",
    username: "ivanv",
    image: getAvatarImage("ivanv"),
  },
  milanr: {
    id: "2",
    name: "Milan",
    username: "milanr",
    image: getAvatarImage("milanr"),
  },
  lazarp: {
    id: "3",
    name: "Lazar",
    username: "lazarp",
    image: getAvatarImage("lazarp"),
  },
  mimiz: {
    id: "4",
    name: "Mimi",
    username: "mimiz",
    image: getAvatarImage("mimiz", "female"),
  },
  mirak: {
    id: "5",
    name: "Mira",
    username: "mirak",
    image: getAvatarImage("mirak", "female"),
  },
  smiljandj: {
    id: "6",
    name: "Smiki",
    username: "smiljandj",
    image: getAvatarImage("smiljandj"),
  },
  janam: {
    id: "7",
    name: "Jana",
    username: "janam",
    image: getAvatarImage("janam", "female"),
  },
  igorj: {
    id: "8",
    name: "Igor",
    username: "igorj",
    image: getAvatarImage("igorj"),
  },
  tijanat: {
    id: "9",
    name: "Tijana",
    username: "tijant",
    image: getAvatarImage("tijanat", "female"),
  },
  draganat: {
    id: "10",
    name: "Dragana",
    username: "draganat",
    image: getAvatarImage("draganat", "female"),
  },
  darkos: {
    id: "11",
    name: "Darko",
    username: "darkos",
    image: getAvatarImage("darkos"),
  },
  bojans: {
    id: "12",
    name: "Bojan",
    username: "bojans",
    image: getAvatarImage("bojans"),
  },
  milenat: {
    id: "13",
    name: "Milena",
    username: "milenat",
    image: getAvatarImage("milenat"),
  },
  miodragt: {
    id: "14",
    name: "Miodrag",
    username: "miodragt",
    image: getAvatarImage("miodragt"),
  },
  ivanm: {
    id: "15",
    name: "Ivan M.",
    username: "ivanm",
    image: getAvatarImage("ivanm"),
  },
  savax: {
    id: "16",
    name: "Sava",
    username: "savax",
    image: getAvatarImage("savax"),
  },
  markob: {
    id: "17",
    name: "Marko",
    username: "markob",
    image: getAvatarImage("markob"),
  },
  jasminai: {
    id: "18",
    name: "Jasmina",
    username: "jasminai",
    image: getAvatarImage("jasminai"),
  },
  denisInstr: {
    id: "19",
    name: "Denis",
    username: "denisInstr",
    image: getAvatarImage("denisInstr"),
  },
  tasicInstr: {
    id: "20",
    name: "Tasic",
    username: "tasicInstr",
    image: getAvatarImage("tasicInstr"),
  },
  radosx: {
    id: "21",
    name: "Rados",
    username: "radosx",
    image: getAvatarImage("radosx"),
  },
  bratislavx: {
    id: "22",
    name: "Bratislav",
    username: "bratislavx",
    image: getAvatarImage("bratislavx"),
  },
  boskox: {
    id: "23",
    name: "Bosko",
    username: "boskox",
    image: getAvatarImage("boskox"),
  },
  igors: {
    id: "24",
    name: "Igor",
    username: "igors",
    image: getAvatarImage("igors"),
  },
  aleksandarx: {
    id: "25",
    name: "Aleksandar",
    username: "aleksandarx",
    image: getAvatarImage("aleksandarx"),
  },
  milosv: {
    id: "26",
    name: "Milos",
    username: "milosv",
    image: getAvatarImage("milosv"),
  },
  hristinab: {
    id: "27",
    name: "Hristina",
    username: "hristinab",
    image: getAvatarImage("hristinab"),
  },
  ivanar: {
    id: "28",
    name: "Ivana",
    username: "ivanar",
    image: getAvatarImage("ivanar"),
  },
  nikolaCkode: {
    id: "29",
    name: "Nikola Ckode",
    username: "nikolaCkode",
    image: getAvatarImage("nikolaCkode"),
  },
  boskoz: {
    id: "30",
    name: "Bosko Z",
    username: "boskoz",
    image: getAvatarImage("boskoz"),
  },
  sanjaz: {
    id: "31",
    name: "Sanja",
    username: "sanjaz",
    image: getAvatarImage("sanjaz"),
  },
  milutinv: {
    id: "32",
    name: "Milutin",
    username: "milutinv",
    image: getAvatarImage("milutinv"),
  },
  brankob: {
    id: "33",
    name: "Branko",
    username: "brankob",
    image: getAvatarImage("brankob"),
  },
  
};
