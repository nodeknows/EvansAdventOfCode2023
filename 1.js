const numpattern = /\d+/;

let sum = [];

let temp = [];
let initial = false;
let last = false;

function firstNlast(str) {
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
    sum.push(temp)
    temp = []
}

const puzzleinput = document.getElementById('input').textContent;

const linebreak = puzzleinput.split("\n")

linebreak.pop // gives us an extra blank line by accident.

for (let i = 0; i != linebreak.length; i++) {
    firstNlast(linebreak[i])
}

console.log("Sum Table: ", sum)

sum = sum.reduce((partialSum, a) => Number(partialSum) + Number(a));

console.log('Final Sum (Answer): '+sum)