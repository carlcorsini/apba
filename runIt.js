let { a, b, c, d } = require('./empty_batting_pitching');
let { fielding_one } = require('./empty_batting_fielding');
let { bip, player } = require('./57_red_sox');

let hesOut = (inBip, fielding) => {
  console.log(fielding[inBip].message);
  console.log(fielding[inBip]);

  console.log(`${game.outs} Outs`);
  console.log('*****************');
};

let sideRetired = (inBip, fielding) => {
  console.log(fielding[inBip].message);
  console.log(fielding[inBip]);

  console.log(`${game.outs} Outs`);
  console.log('Side retired');
  game.outs = 0;
  game.inning += 0.5;
  console.log('*****************');
};

let sideRetiredK = (inBip, fielding) => {
  console.log(fielding[inBip].k_messages[Math.floor(Math.random() * 4)]);

  console.log(`${game.outs} Outs`);
  console.log('Side retired');
  game.outs = 0;
  game.inning += 0.5;
  console.log('*****************');
};

let struckHimOut = (inBip, fielding) => {
  console.log(fielding[inBip].k_messages[Math.floor(Math.random() * 4)]);

  console.log(`${game.outs} Outs`);
  console.log('*****************');
};

let rip = (inBip, batting) => {
  console.log(batting[inBip].message);
  console.log(batting[inBip]);
  console.log(`${game.outs} outs.`);
  console.log('*****************');
};

let game = {
  inning: 1,
  outs: 0,
  strikes: 0,
  balls: 0,
  bases: {
    1: '',
    2: '',
    3: '',
  },
};

console.log(`what came out was a ${bip}`);

let runIt = (bip, fielding, batting) => {
  let outcome = {};
  if (bip < 11) {
    outcome.val = batting[bip].val;
    outcome.message = batting[bip].message;
  } else {
    outcome.val = fielding[bip].val;
    outcome.message = fielding[bip].val;
  }
  if (fielding[bip].val === 0.01) {
    rip(bip);
  }

  if (outcome.val <= 0) {
    game.outs++;

    if (game.outs === 3 && outcome === -1) {
      sideRetiredK(bip, fielding);
    } else if (game.outs === 3 && outcome !== -1) {
      sideRetired(bip, fielding);
    } else if (game.outs < 2 && outcome === -1) {
      struckHimOut(bip, fielding);
    } else {
      hesOut(bip, fielding);
    }
  }
};

runIt(bip, fielding_one);
runIt(22, fielding_one);
runIt(35, fielding_one);
