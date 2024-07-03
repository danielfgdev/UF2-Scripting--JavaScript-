
let resultado = 1
let texto = '5!='
for (let i = 1; i <= 5; i++) {
    // console.log(i);
    resultado = resultado * i;

    // console.log('paso ' + i + ' : ' + resultado);
    let nexo
    if (i === 5) {
        nexo = '='
    } else {
        nexo = 'x'
    }

    texto = texto + i + nexo


}
console.log(texto + resultado);
