const getAvatarImage = (id, gender = "male") => {
  const r = `https://avatars.dicebear.com/api/big-ears/${id}.svg?skinColor=variant02`;
  // ${gender =='female'?'&hair=straightHair':''}`;
  return r;
};

// const getAvatarImage = (id) => `https://robohash.org/${id}.png`;

export const Users = {
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
};
