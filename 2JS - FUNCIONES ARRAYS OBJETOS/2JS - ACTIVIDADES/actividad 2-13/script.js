// ! Mostrar los numeros pares del 1 al 100

function pares(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {

            console.log(i);
        }
    }
}

pares(1, 100);
