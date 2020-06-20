let batting = [
  {
    id: 18,
    img: "https://vintagecardprices.com/pics/400/21/66388.jpg",
    team_id: "bosa",
    first_name: "Franklin",
    middle_name: "Leal",
    nick_name: "Sully",
    last_name: "Sullivan",
    height: "6-6",
    weight: 215,
    born: "01/23/30",
    born_in: "Hollywood, CA",
    bats: "r",
    throws: "r",
    stats: {
      yr: 1957,
      g: 31,
      gs: 30,
      ip: 240,
      w: 14,
      l: 11,
      sv: 0,
      era: 2.73,
      bb: 48,
      so: 127,
      hr: 16
    },
    table: [
      {
        11: 7,
        12: 25,
        13: 13,
        14: 30,
        15: 9,
        16: 28,
        21: 13,
        22: 8,
        23: 12,
        24: 13,
        25: 21,
        26: 13,
        31: 23,
        32: 26,
        33: 8,
        34: 31,
        35: 13,
        36: 33,
        41: 27,
        42: 13,
        43: 29,
        44: 8,
        45: 14,
        46: 13,
        51: 36,
        52: 27,
        53: 13,
        54: 32,
        55: 9,
        56: 34,
        61: 13,
        62: 13,
        63: 32,
        64: 13,
        65: 35,
        66: 6
      }
    ]
  }
];

let roll = sides => Math.ceil(Math.random() * sides)

let result = roll(6).toString() + roll(6).toString()

let outcome = batting[0].table[0][result]




module.exports = outcome
