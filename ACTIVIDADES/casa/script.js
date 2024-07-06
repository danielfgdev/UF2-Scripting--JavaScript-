// ! Contar de 10 hacia alante
// for (let i = 0; i <= 10; i=i+1) {
//     console.log(i);
// }

// ! Contar de 10 hacia atras
// for (let i = 10; i >= 0; i=i-1) {
//     console.log(i);
// }

// ! Contar hasta 100 mostrando solo los numeros pares
// for (let i = 0; i <= 100; i=i+2) {
//     console.log(i);
// }

// ! Contar hasta 100 mostrando solo los numeros impares
// for (let i=1;i<100; i=i+2){
//     console.log(i);
// }

// ! Usar el while

// let contador = 1;
// while (contador < 5) {
//     console.log(contador)
//     contador++
// }


// ! While contraseña

let contraseña;
const password = "1234";

do {
    contraseña = window.prompt('Introduce la contraseña:');
    if (contraseña !== password) {
        console.log("Contraseña incorrecta");
    }
} while (contraseña !== password);

console.log("Contraseña correcta");