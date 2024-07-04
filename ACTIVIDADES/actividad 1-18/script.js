// Los multiplos de 3 "Fizz,", los multiplos de 5 "Buzz", y los multiplos de 3 y de 5 "FizzBuzz"


for (let i = 1; i <= 100; i++) {
    let nombre = ''
    if (i % 3 === 0) {
        nombre += 'Fizz'
    }
    if (i % 5 === 0) {
        nombre += 'Buzz'
    }
    if (nombre === '') {
        nombre = i;
    }
    console.log(nombre);
}






