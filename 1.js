const numpattern = /\d+/;

let sum = [];
let realSum = [];

let temp = [];
let initial = false;
let last = false;

function firstNlast(str, real) {
    if (str.length == 0) return;
    for (let i= 0; i != str.length; i++ ) {
        if(str[i].match(numpattern)) {
            if (initial == false) { // if there is no initial value set 
                initial = str[i];
            } else if (last == false) { // if there is no last value set
                last = true
            } else if (last == true && temp.length == 2) { // if there is a last value set, remove it and add the new one
                temp.pop()
            };
            temp.push(str[i])
        };
    }
    
    if (temp.length == 1) temp.push(initial);
    
    initial = false
    last = false
   
    temp = temp.reduce((partialSum, a) => partialSum + a); // @https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

    switch(real) {
        case true:
            realSum.push(temp)
            break;

        default: 
            sum.push(temp)
            break;
    }

    temp = [];
}

function convertToReal(str) {
    str = str.replace('one', '1');
    str = str.replace('two', '2');
    str = str.replace('three', '3');
    str = str.replace('four', '4');
    str = str.replace('five', '5');
    str = str.replace('six', '6');
    str = str.replace('seven', '7');
    str = str.replace('eight', '8');
    str = str.replace('nine', '9');
    return str;
}

const puzzleinput = document.getElementById('input').textContent;

const linebreak = puzzleinput.split("\n")

linebreak.pop // gives us an extra blank line by accident.

for (let i = 0; i != linebreak.length; i++) {
    firstNlast(linebreak[i])
}

sum = sum.reduce((partialSum, a) => Number(partialSum) + Number(a));

console.log('Part 1: Final Sum: '+sum)


for (let i = 0; i != linebreak.length; i++) {
    firstNlast(convertToReal(linebreak[i]), true)
}

realSum = realSum.reduce((partialSum, a) => Number(partialSum) + Number(a));

console.log(realSum)