// // /**
// //  * Compra:
// //  * Crear un programa de Javascript que pida por pantalla un producto
// //  * En base al producto introducido, el programa ha de mostrar en la consola el precio de dicho producto
// //  * 
// //  * Los productos son:
// //  * leche: 2€
// //  * café: 3€
// //  * cereales: 1.50€
// //  * 
// //  */

// let producto = prompt("Introduce un producto (leche/cafe/cereales)")

// if (producto === "leche") {
//     console.log("leche cuesta 2 €");
// } else if (producto === "cafe") {
//     console.log("cafe cuesta 3€")
// } else if (producto === "cereales")
//     console.log("cereales cuesta 1.50€")
// else {
//     console.log("no elegiste nada")
// }

const passCorrecta = "tiburonelegante"

let pass = prompt("Introduce la contraseña")
while (pass !== passCorrecta) {
    pass = prompt("Introduce la contraseña")
}

console.log('adelante,puedes pasar')
