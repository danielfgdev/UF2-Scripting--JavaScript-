// ! Saludar(): con y sin parámetros y parámetros por defecto

// function saludar(persona = "random") {
//     console.log("hola " + persona);
// }
// saludar("dani")
// saludar("pepe")
// saludar()


// ! Saludar nombre apellidos

// function saludar(nombre, apellidos) {
//     console.log(`hola ${nombre} ${apellidos}`)
// }

// saludar("Daniel", "Fernandez")


// ! Saludar chico o chica

// console.log("saludar");
// function saludar(genero, nombre = "desconocido") {

//     let distintivo = ""

//     if (genero === "masculino") {
//         distintivo = "Sr"
//         console.log(genero)

//     } else if (genero === "femenino") {
//         distintivo = "Sra"
//         console.log(genero);

//     } if (genero === "indefinido") {
//         distintivo = "Random"
//         console.log(genero);
//     }
//     console.log(`hola  ${distintivo}  ${nombre}`)
// }
// saludar("masculino", "dani")
// saludar("femenino", "pepe")
// saludar("indefinido", "")


// ! Funcion que devuelve el doble

// function doble(num) {
//     let resultado = num * 2
//     console.log(num * 2)
//     console.log(resultado)
// }
// doble(3)


// ! Función que recibe un lado y calcula el perímetro del cuadrado

// function perimetro(lado) {
//     let resultado = lado * 4
//     console.log(resultado)
// }
// perimetro(5)


// ! Función que reciba un radio y devuelva el área de la circunferencia

// function area(radio) {
//     console.log(3.14 * radio * radio)
// }
// area(12)


// ! Implementar una función que reciba como parámetro un número y muestre por pantalla un valor
// ! lógico indicando si es positivo o negativo

// function positivoNegativo(num) {
//     if (num > 0) {
//         console.log("positivo")
//     } else {
//         console.log("negativo")
//     }
// }
// positivoNegativo(2)
// positivoNegativo(-1)


// ! Realizar el ejercicio anterior pero la función no se encargará de mostrarlo por pantalla,
// ! sino que tan sólo ha de **retornar** el valor.

// let resultado
// function positivoNegativo(num) {
//     if (num > 0) {
//         resultado = "es positivo"
//     } else {
//         resultado = "es negativo"
//     }
//     return resultado
// }
// console.log(positivoNegativo(2))
// console.log(positivoNegativo(-2))


// ! Función que recibe una temperatura y dice
// ! si está dentro de 5 rangos: muy frio, frio, templado, calor, mucho calor

// function clima(temp) {
//     if (temp < 0) {
//         console.log("muy frio");
//     } else if (temp >= 0 && temp < 10) {
//         console.log("frio");
//     } else if (temp >= 10 && temp < 20) {
//         console.log("templado");
//     } else if (temp >= 20 && temp < 25) {
//         console.log("caliente");
//     } else {
//         console.log("muy caliente")
//     }
// }
// clima(25)


// ! Mostrar los numeros pares del 1 al 100

// function pares() {
//     for (let i = 0; i <= 100; i = i + 2) {
//         console.log(i)
//     }
// }
// pares()


// ! Mostrar los numeros impares del 1 al 100

// function impares() {
//     for (let i = 1; i <= 100; i = i + 2) {
//         console.log(i)
//     }
// }
// impares()


// ! Función que recibe un intervalo (ej: mínimo 2 máximo 20) y muestra los números
// ! pares o impares de ese intervalo, según se especifique por parámetro(ej: p -> par, i->impar)

function parametros(min, max, parImpar) {
    for (let i = min; i <= max; i = i + 1) {
        if (parImpar === "par") {
            if (i % 2 === 0) {
                console.log(i)
            }
        } else if (parImpar === "impar") {
            if (i % 2 !== 0) {
                console.log(i)
            }
        }
    }
}
parametros(0, 40, "par")
parametros(0, 40, "impar")