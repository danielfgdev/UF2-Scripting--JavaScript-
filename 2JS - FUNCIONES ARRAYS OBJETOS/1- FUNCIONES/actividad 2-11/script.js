// ! Función que recibe un precio (numero real)
// ! y muestra por pantalla "El importe es X euros con XX céntimos"

// function precio(a, b) {

//     console.log(`el precio es de ${a} euros con ${b} centimos`)
// }
// precio(22, 20)

function precio(importe) {

    let calderilla = importe * 100
    let centimos = calderilla % 100
    let euros = (calderilla - centimos) / 100

    console.log(`el importe es ${euros}€ con ${centimos}cts`)

}

precio(12.99)