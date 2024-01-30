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

var groups = {};

let sep = pos.match(/\d+(\.\d+)?\s\w+/g);
let ends = pos.match(/\d+(\.\d+)?\s\w+\;/g);

// assign properties for "end" elements present in Array: "sep";
for (let i = 0; i != ends.length; i++) {
    for (let ii = 0; ii != sep.length; ii++) {
        if (ends[i].includes(sep[ii])) {
            seps[ii] = [seps[i], true]
        }
    }
}

let cGroup = 1;
let cIndex = 0;

do {
    if (!groups[cGroup]) groups[cGroup] = {red: 0, green: 0, blue: 0};
    for (let i = 0; i != sep.length; i++) {
        if (sep[i][1]) cGroup++;
    }
} while (cIndex != sep.length-1);

/*

3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

2 green

3 blue, 4 red; 1 red, 2 green, 6 blue

1 red, 2 green, 6 blue

3 blue, 4 red;

*/