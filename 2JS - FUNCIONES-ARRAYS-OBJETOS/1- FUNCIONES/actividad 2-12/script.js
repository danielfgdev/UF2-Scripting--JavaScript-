// ! Función que recibe una temperatura y dice
// ! si está dentro de 5 rangos: muy frio, frio, templado, calor, mucho calor

function temperatura(a) {
    if (a < 0) {
        console.log("muy frio");
    } else if (a >= 0 && a < 10) {
        console.log("frio");
    } else if (a >= 10 && a < 20) {
        console.log("templado");
    } else if (a >= 20 && a < 25) {
        console.log("caliente");
    } else {
        console.log("muy caliente")
    }
}

temperatura()


