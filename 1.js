var puzput = document.getElementById('input').textContent;

// seperate our puzzle input per line
puzput = puzput.split('\n')
puzput.pop() // remove last item b/c it is an empty newline

let s1 = 0;
let s2 = 0;

function fnl(str, cnvrt) { // First And Last func
    const n = str.match(/\d/g);

    if (!n) return;

    if (cnvrt === true) {
        var cnvrtabls = []
        const re = /(?=(one|two|three|four|five|six|seven|eight|nine))/g;
        cnvrtabls = Array.from(str.matchAll(re), x => x[1])
        console.log(str)
        console.log(cnvrtabls)
    }

    if (n.length === 1) n.push(n[0]);

    /*

function replaceAt(str, pattern, repl) {
    return [str.replace(pattern, repl), str.match(pattern)]
}

let a = "zzz3twone1";
let c = "";

a.split('').forEach(char => {
    c += char
    let s = replaceAt(c, /one|two/g, 2)
    c = s[0]
    if (s[1]) {
        console.log(s[1])
    }
})

console.log(c)

    */

    switch (cnvrt) {
        case true:
            s2 += Number(n[0] + n[n.length - 1])
            break;

        default:
            s1 += Number(n[0] + n[n.length - 1])
            break;
    }

}

puzput.forEach(fnl)
console.log('Part 1 Solution: ' + s1)

puzput.forEach(function (puz) {
    fnl(puz, true)
})

console.log('Part 2 Solution: ' + s2)