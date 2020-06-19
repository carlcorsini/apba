let { a, b, c, d } = require("./empty_batting_pitching");
let { fielding_one } = require("./empty_batting_pitching");
let outcome = require("./empty_batting_pitching");

if (outcome > 11) {
    console.log(fielding_one[outcome])
} else {
    console.log(b[Number(outcome)])
}