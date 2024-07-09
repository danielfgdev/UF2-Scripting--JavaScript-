// ! Implementar una funcion que diga si un año es bisiesto o no

function bisiesto(año) {
    if (año % 400 === 0) {
        console.log("bisiesto");
    } else if (año % 100 === 0) {
        console.log("no bisiesto");
    } else if (año % 4 === 0) {
        console.log("bisiesto");
    } else {
        console.log("no bisiesto");
    }
}

bisiesto(2000)



