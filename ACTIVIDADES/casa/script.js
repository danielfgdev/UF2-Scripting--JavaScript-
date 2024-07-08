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

// let contraseña;
// const password = "1234";

// do {
//     contraseña = window.prompt('Introduce la contraseña:');
//     if (contraseña !== password) {
//         console.log("Contraseña incorrecta");
//     }
// } while (contraseña !== password);

// console.log("Contraseña correcta");

// ! While lluvia

// let clima = window.prompt("¿Hace lluvia o sol? (escribe 'lluvia' o 'sol')");

// while (clima !== "salir") {
//     if (clima === "lluvia") {
//         console.log("Quédate en casa.");
//     } else if (clima === "sol") {
//         console.log("Sal a la calle.");
//     } else {
//         console.log("Escribe 'lluvia' o 'sol'.");
//     }
//     clima = window.prompt("¿Hace lluvia o sol? (escribe 'lluvia' o 'sol')");
// }

// console.log("Programa terminado.");

// ! Contar del 20 al 40

// for (let i = 20; i <= 40; i = i + 1) {
//     console.log(i)
// }

// ! Contar del 40 al 20

// for (let i = 40; i >= 20; i = i - 1) {
//     console.log(i);
// }

// ! Contar del 10 al 20 de dos en dos

// for (let i=10;i<=20;i=i+2) {
//     console.log(i);
// }

// ! Contar del 10 al 20 de tres en tres

// for (let i = 10; i <= 20; i = i + 3) {
//     console.log(i)
// }

// ! Contar del 20 al 10 de dos en dos

// for (let i = 20; i >= 10; i = i - 2) {
//     console.log(i)
// }

// ! Contar del 20 al 10 de tres en tres

// for (let i = 20; i >= 10; i = i - 3) {
//     console.log(i)
// }

// ! Usar el let y el else if

// let color = "rojo"
// color = prompt("cual es el color")
// if (color == "rojo") {
//     console.log("el color correcto es el rojo")
// } else if (color == "azul") {
//     console.log("el color correcto es el azul")
// } else {
//     (color !== "azul", "rojo")
//     console.log("ese color no es correto")
// }
// console.log(color);

// ! Usar let y else if contraseña

let contraseña = "casa23"
let captcha = "a2a2"
contraseña = prompt("cual es la contraseña")
if (contraseña === "casa23") {
    console.log("la contraseña es correcta");
} else if (contraseña !== "casa23") {
    console.log("contraseña incorrecta");
}
captcha = prompt("cual es el captcha?")
if (captcha === "a2a2") {
    console.log("captcha correcto")
} else {
    (captcha !== "a2a2");
    console.log("captcha incorrecto")
}

// ¿porque no para si meto la contraseña mal? ------------------------------- (poner otra vez contraseña = prompt?????)

// ¿alguna forma de no poner "contraseña" a mano en los if?? --------------- ${} ?????


