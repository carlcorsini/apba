let { a, b, c, d } = require('./empty_batting_pitching');
let { fielding_one } = require('./empty_batting_fielding');
let outcome = require('./57_red_sox');

let bases = {
    1: '',
    2: '',
    3: '',    
}

console.log(`what came out was a ${outcome}`)

if (Number(outcome) > 11) {
  if (fielding_one[outcome].val === -1) {
    console.log(
      fielding_one[outcome].k_messages[Math.floor(Math.random() * 4)],
    );
  } else {
    console.log(fielding_one[outcome].message);
    console.log(fielding_one[outcome]);
  }
} else {
  console.log(b[outcome].message);
  console.log(b[outcome]);
}
