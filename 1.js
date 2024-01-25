var puzput = document.getElementById('input').textContent;

// seperate our puzzle input per line
puzput = puzput.split('\n')
puzput.pop() // remove last item b/c it is an empty newline

let s1 = 0;

function fnl(str, cnvrt) { // First And Last func

    if (cnvrt) {
        str.match(/one|two|three|four|five|six|seven|eight|nine/g)
    }

    const n = str.match(/\d/g);

    if (!n) return;

    if (n.length === 1) n.push(n[0]);

    s1 += Number(n[0]+n[n.length-1])
}

puzput.forEach(fnl)

