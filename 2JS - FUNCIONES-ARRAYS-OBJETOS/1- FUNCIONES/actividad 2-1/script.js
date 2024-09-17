// ! Saludar(): con y sin parámetros y parámetros por defecto

function saludar(persona = 'random') {
    console.log('Hola' + persona)
}

saludar("Rodri")
saludar("Dani")
saludar()