let k = {
  val: -1,
  k_messages: [
    "STRIKEOUT, looking, fastball outside corner",
    "STRIKEOUT, swinging, curveball in the dirt, batter tagged out by catcher",
    "STRIKEOUT, swinging, high fastball",
    "STRIKEOUT, looking, changeup low",
  ],
  po: 2,
};

let w = {
  val: 1.04,
  message: "Base on balls",
};

let fielding_one = {
  12: {
    val: 0,
    message: "Out at 1st",
    po: 3,
    ass: 6,
  },
  13: k,
  14: {
    val: 0.04,
    message: "Base on balls",
    zz: {
      val: 0.02,
      message: "2 balls",
    },
  },
  15: {
    val: 0,
    message: "Fly out",
    po: 7,
  },
  16: {
    val: 0,
    message: "Fly out",
    po: 8,
  },
  17: {
    val: 0,
    message: "Fly out",
    po: 9,
  },
  18: {
    val: 1.1,
    message: "1st on error",
    e: 6,
  },
  19: {
    val: 1.1,
    message: "1st on error",
    e: 5,
    "*": {
      val: 0,
      message: "Out at 1st",
      ass: 6,
      po: 3,
    },
  },
  20: {
    val: 1.1,
    message: "1st on error",
    e: 4,
  },
  21: {
    val: 1,
    message: "SINGLE, down the right field line",
  },
  22: {
    val: 0,
    message: "Out at 1st",
    po: 1,
    ass: 3,
  },
  23: {
    val: 1.1,
    message: "1st on error",
    e: 7,
  },
  24: {
    val: 0,
    message: "Out at 1st",
    ass: 6,
    po: 3,
    k,
  },
  25: {
    val: 0,
    message: "Out at 1st",
    ass: 4,
    po: 3,
    x: k,
  },
  26: {
    val: 0,
    message: "Out at 1st",
    ass: 4,
    po: 3,
  },
  27: {
    val: 0,
    message: "Out at 1st",
    ass: 6,
    po: 3,
    x: k,
  },
  28: {
    val: 0,
    message: "Out at 1st",
    ass: 5,
    po: 3,
    k,
  },
  29: {
    val: 0,
    message: "Out at 1st",
    ass: 1,
    po: 3,
    x: k,
  },
  30: {
    val: 0,
    message: "Fly out",
    po: 7,
    k,
  },
  31: {
    val: 0,
    message: "Fly Out",
    po: 8,
  },
  32: {
    val: 0,
    message: "Fly out",
    po: 9,
    k,
  },
  33: {
    val: 0,
    message: "Pop fly out",
    po: 4,
    y: k,
  },
  34: {
    val: 0,
    message: "Pop fly out",
    po: 5,
    y: k,
  },
  35: {
    val: 0,
    message: "Foul out",
    po: 2,
  },
  36: {
    val: 0.01,
    message: "Ball",
    w,
  },
  37: {
    val: 0.1,
    message: "Strike",
    w,
  },
  38: {
    val: 0.01,
    message: "Ball",
  },
  39: {
    val: 0.1,
    message: "Strike",
    w,
  },
  40: {
    val: 0.1,
    message: "Foul",
    w,
  },
  41: {
    val: 1.1,
    message: "1st on error",
    e: 5,
  },
  42: {
    val: 1.04,
    message: "Hit by pitcher, batter takes 1st",
  },
};

module.exports = {
  k,
  w,
  fielding_one,
};
