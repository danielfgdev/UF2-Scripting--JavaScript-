let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
console.log(semana)

for (let dia = 0; dia < semana.length; dia = dia + 1) {
    console.log(`el dia ${dia} es ${semana[dia]}`)
}