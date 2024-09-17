const array = [139, 119, 39, 241, 240, 163, 75, 46, 115, 154, 25, 159, 163, 185, 147, 34, 12, 146, 129, 209, 150, 189, 163, 105, 201, 47, 222, 192, 171, 224, 224, 201, 78, 93, 203, 171, 74, 28, 71, 16, 128, 195, 103, 105, 89, 25, 64, 62, 171, 47];

let max = 100
let min = 0

function listaNumeros(array, max, min) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < max && array[index] > min) {
            console.log(array[index]);
        }
    }
}

listaNumeros(array, max, min);
