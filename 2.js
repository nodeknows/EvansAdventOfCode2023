const pos = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
const impos = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'

// 12 red cubes, 13 green cubes, and 14 blue cubes

// sets are separated by ;

// add up id's (later)

let id = pos.match(/\d+\:/g)[0]

console.log(id)
console.log(id.slice(0, -1))

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