// ! Saludar(): con y sin parámetros y parámetros por defecto

function saludo(persona = 'random') {
    console.log('Hola ' + persona)
}

saludar("Rodri")
saludar("Dani")
saludar()