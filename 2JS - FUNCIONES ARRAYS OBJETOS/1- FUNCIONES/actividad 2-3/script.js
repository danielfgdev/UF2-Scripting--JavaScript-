// ! Saludar chico o chica

console.log("saludar");
function saludar(genero, nombre = "desconocido") {

    let distintivo = ""


    if (genero === "masculino") {
        distintivo = "Sr"
        console.log(genero)

    } else if (genero === "femenino") {
        distintivo = "Sra"
        console.log(genero);

    } if (genero === "indefinido") {
        distintivo = "Random"
        console.log(genero);
    }

    console.log(`hola  ${distintivo}  ${nombre}`)
}
saludar("masculino", "dani");
saludar("femenino", "pepa");
saludar("indefinido", "xD");

