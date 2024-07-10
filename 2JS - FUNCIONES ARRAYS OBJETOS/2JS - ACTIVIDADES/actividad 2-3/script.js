// ! Saludar chico o chica

console.log("saludar");
function saludar(genero, nombre = "desconocido") {

    genero = ""


    if (genero == "masculino") {
        genero = "Sr"
        console.log(genero)

    } else if (genero == "femenino") {
        genero = "Sra"
        console.log(genero);

    } if (genero == "indefinido") {
        genero = "Random"
        console.log(genero);
    }

    console.log(`hola  ${genero}  ${nombre}`)
}
saludar("masculino", "dani");
saludar("femenino", "pepa");
saludar("indefinido", "xD");

