/*
let posid = pos.match(/\d+\:/g)[0]

console.log(posid.slice(0, -1))

console.log(pos.match(/\d+ blue/g))
console.log(pos.match(/\d+ red/g))
console.log(pos.match(/\d+ green/g))

console.log(pos.split(' '))

const b = pos.split(' ')

console.log('id: '+b[1].slice(0, -1))
console.log('id: '+b[1].slice(0, -1))

const address = '100 Queen St W, Toronto, ON M5H 2N2';
const civicNumber = address

console.log(civicNumber)
*/

/*

KEY:

index 1 is the id.

; at the end means end of game.

# before "blue," "red," or "green," is the amount that is shown in that game.

"blue", "red", or "green" WITHOUT the comma means it's the end of the sequence.

Possible: 12 red cubes, 13 green cubes, and 14 blue cubes.

*/

const pos = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
const impos = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'

var g = {};
let reg = /\: (.*)/;

let extraction = pos.match(reg)[1]

var g1 = {
    red_count: 0,
    green_count: 0,
    blue_count: 0,
};

var g2 = JSON.parse(JSON.stringify(group1)), g3 = JSON.parse(JSON.stringify(group1));; // make copies of g1

console.log(group3.red_count)

/*

3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

2 green

3 blue, 4 red; 1 red, 2 green, 6 blue

1 red, 2 green, 6 blue

3 blue, 4 red;

*/