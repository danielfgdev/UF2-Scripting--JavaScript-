// ! Realizar el ejercicio anterior pero la función no se encargará de mostrarlo por pantalla, 
// ! sino que tan sólo ha de **retornar** el valor. 

function posNeg(numero) {
    let resultado
    if (numero > 0) {
        resultado = 'es positivo';
    } else {
        resultado = 'es negativo';
    }
    return resultado
}



console.log(posNeg(-1))
console.log(posNeg(16))