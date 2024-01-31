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

/*
const pos = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
const impos = 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'

var games = [];

let sep = impos.match(/\d+(\.\d+)?\s\w+/g);
let ends = impos.match(/\d+(\.\d+)?\s\w+\;/g);

// assign properties for "end" elements present in Array: "sep";
for (let i = 0; i != ends.length; i++) {
    for (let ii = 0; ii != sep.length; ii++) {
        if (ends[i].includes(sep[ii])) {
            sep[ii] = [sep[ii]]
        }
    }
}

let cgame = 0;
let patt = /\d+/g;

for (let i = 0; i < sep.length; i++) {
    if (!games[cgame]) games[cgame] = {red: 0, green: 0, blue: 0};

    let item = sep[i];

    if (typeof sep[i] == 'object') item = sep[i][0];

    if (item.includes('red')) {
        games[cgame].red += Number(item.match(patt))
    } else if (item.includes('green')) {
        games[cgame].green += Number(item.match(patt))
    } else if (item.includes('blue')) {
        games[cgame].blue += Number(item.match(patt))
    }

    if (typeof sep[i] == 'object') cgame++;
}

console.log(games)

for (let i = 0; i < games.length; i++) {
    let game = games[i]
    if (
        (game.red > 12) ||
        (game.green > 13) ||
        (game.blue > 14)
        )
        console.log('Game: '+ i +' is impossible.', game    );
        
}

*/

/*

3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

2 green

3 blue, 4 red; 1 red, 2 green, 6 blue

1 red, 2 green, 6 blue

3 blue, 4 red;

*/

var puzput = document.getElementById('input').textContent;

// seperate our puzzle input per line
puzput = puzput.split('\n')
puzput.pop() // remove last item b/c it is an empty newline

// vars
var games = [];
var posIDs = 0;
var part = 1;

function filter(line) {
    let sep = line.match(/\d+(\.\d+)?\s\w+/g); // an array of all marbles shown
    let ends = line.match(/\d+(\.\d+)?\s\w+\;/g); // the last marbles shown of each game that ends with ;
    let id = Number(line.match(/^[^\d]*(\d+)/)[1]) // @https://stackoverflow.com/questions/7854123/regex-to-get-first-number-in-string-with-other-characters
    let sets = []

    sep.forEach(function(item, index) { // adjust sep elements so that the ends are objects instead
        ends.forEach(function(end, endindex) {
            if (end.includes(item)) {
                sep[index] = [item];
            }
        })
    })
    
    let current_set = 0;
    let patt = /\d+/g;

    if (part === 2) { // pt.2 related
        var powerSum = 0;
        sets.forEach(function(set, index) {
            set.minRed = 0, set.minGreen = 0;
            set.minBlue = 0, set.power = 0;
        })
    }

    sep.forEach(function(item, index) { // finally, separate them into sets.
        if (!sets[current_set]) sets[current_set] = {red: 0, green: 0, blue: 0};
        
        let set = sets[current_set];

        if (typeof sep[index] === 'object') item = item[0];

        if (item.includes('red')) set.red += Number(item.match(patt));
        if (item.includes('green')) set.green += Number(item.match(patt));
        if (item.includes('blue')) set.blue += Number(item.match(patt));

        if (typeof sep[index] === 'object') current_set++
    })

    let isPos = true;
    sets.forEach(function(item, index) { // find if they are impossible
        if (item.red > 12) isPos = false;
        if (item.green > 13) isPos = false;
        if (item.blue > 14) isPos = false;
    })

    if (isPos) posIDs += id; // if possible, add the ID's to imposIDs

    games[id] = sets;
}

puzput.forEach(filter)

// pt.2 
part = 2;
puzput.forEach(filter)