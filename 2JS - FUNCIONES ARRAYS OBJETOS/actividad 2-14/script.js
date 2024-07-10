// ! Función que recibe un intervalo (ej: mínimo 2 máximo 20) y muestra los números
// ! pares o impares de ese intervalo, según se especifique por parámetro(ej: p -> par, i->impar)

function parametros(min, max, parImpar) {

    for (let i = min; i <= max; i++) {

        if (parImpar === 'p') {
            if (i % 2 === 0) {
                console.log(i);
            }

        } else if (parImpar === 'i') {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}

parametros(2, 20, 'p')
parametros(2, 20, 'i')
