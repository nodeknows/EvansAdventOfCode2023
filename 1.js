var puzput = document.getElementById('input').textContent;

// seperate our puzzle input per line
puzput = puzput.split('\n')
puzput.pop() // remove last item b/c it is an empty newline

let s1 = 0;
let s2 = 0;

function fnl(str, cnvrt) { // First And Last func
    let n = str.match(/\d/g);

    if (cnvrt === true) {
        var cnvrtabls = []

        str = str.replace(/1/g, 'one');
        str = str.replace(/2/g, 'two');
        str = str.replace(/3/g, 'three');
        str = str.replace(/4/g, 'four');
        str = str.replace(/5/g, 'five');
        str = str.replace(/6/g, 'six');
        str = str.replace(/7/g, 'seven');
        str = str.replace(/8/g, 'eight');
        str = str.replace(/9/g, 'nine');

        const re = /(?=(\one|two|three|four|five|six|seven|eight|nine))/g;
        n = Array.from(str.matchAll(re), x => x[1])

        for (let i = 0; i < n.length; i++) {
            n[i] = n[i].replace(/one/g, '1')
            n[i] = n[i].replace(/two/g, '2')
            n[i] = n[i].replace(/three/g, '3')
            n[i] = n[i].replace(/four/g, '4')
            n[i] = n[i].replace(/five/g, '5')
            n[i] = n[i].replace(/six/g, '6')
            n[i] = n[i].replace(/seven/g, '7')
            n[i] = n[i].replace(/eight/g, '8')
            n[i] = n[i].replace(/nine/g, '9')
        }

        console.log(n)
    }

    if (!n) return;

    if (n.length === 1) n.push(n[0]);

    switch (cnvrt) {
        case true:
            s2 += Number(n[0] + n[n.length - 1])
            //console.log(s2, n[0], n[n.length - 1])
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

/*

    function replaceAt(str, pattern, repl) {
        return [str.replace(pattern, repl), str.match(pattern)]
    }

    let a = "zzz3twone1";
    let c = "";
    var sp = a.split('');

    for (let i = 0; i != s.length-1; i++) {
        c += sp[i]
        let s = replaceAt(c, /two/g, 2)
        s = replaceAt(c, /one/g, 1)
        c = s[0]
        if (s[1]) {
            i -= s[1][0].length-1
        }
    }

    console.log(c)

    */