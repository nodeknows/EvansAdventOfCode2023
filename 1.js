const numpattern = /\d+/;

let sum = [];
let realSum = [];

let initial, last;

function getFirstAndLast(str, real) {
    for (let i = 0; i != str.length; i++ ) {
        switch (str[i].match(numpattern) == true) {
            case true: 
                if (!initial) {
                    initial = str[i]
                }
                last = str[i]
                console.log(last)
        }
    }

    switch(real) {
        case true:
            realSum.push(initial + last)
            break;

        default: 
            sum.push(initial + last)
            console.log(sum)
            break;
    }

    initial, last = null, null
}

function getSum(input, real) {
    input = input.split('\n')
    input.pop() // necessary b/c splitting by \n gives us an extra line at the end.

    switch (real) {
        case true: 
            for (let i = 0; i != input.length; i++) {
                getFirstAndLast(convertToReal(input[i]), true)
            }
            realSum = realSum.reduce((partialSum, a) => Number(partialSum) + Number(a));
            return realSum;
            
        default:
            for (let i = 0; i != input.length; i++) {
                getFirstAndLast(input[i])
            }
            sum = sum.reduce((partialSum, a) => Number(partialSum) + Number(a));
            return sum;
    }
}

function convertToReal(str) {
    str = str.replaceAll('one', '1');
    str = str.replaceAll('two', '2');
    str = str.replaceAll('three', '3');
    str = str.replaceAll('four', '4');
    str = str.replaceAll('five', '5');
    str = str.replaceAll('six', '6');
    str = str.replaceAll('seven', '7');
    str = str.replaceAll('eight', '8');
    str = str.replaceAll('nine', '9');
    return str;
}

const puzzleinput = document.getElementById('input').textContent;

console.log('Part 1: Final Sum: '+ getSum(puzzleinput))


console.log('Part 2: Final Sum: '+ getSum(puzzleinput, true))