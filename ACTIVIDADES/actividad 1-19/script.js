let num = window.prompt('Introduce un numero');
if (num == 13) {
    console.log('Mala suerte');
} else {

    console.log('numeros impares');
    for (let i = 1; i <= num; i = i + 1) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    console.log('multiplos de tres');
    for (let i = 1; i <= num; i = i + 1) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
