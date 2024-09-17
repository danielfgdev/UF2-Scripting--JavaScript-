function numConsecutivos(numMin, numMax) {
    let numeros = []

    for (let valor = numMin; valor <= numMax; valor = valor + 1) {
        numeros.push(valor)
    }
    for (let posicion = 0; posicion < numeros.length; posicion = posicion + 1) {
        console.log("valor:", numeros[posicion], "Pos:", posicion)
    }
}
numConsecutivos(5, 35);