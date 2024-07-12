let numerosPares = [];
let numerosImpares = [];

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 === 0) {
        numerosPares.push(i);
    } else {
        numerosImpares.push(i);
    }
}

console.log("Numeros impares:", numerosImpares);
console.log("Numeros pares:", numerosPares);
