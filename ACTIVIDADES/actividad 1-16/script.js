let ultimo = 1
let penultimo = 1

for (let i = 2; i <= 300; i = i++) {

    let i = ultimo + penultimo;
    if (i > 300) break;

    console.log(i);
    penultimo = ultimo
    ultimo = i

}


