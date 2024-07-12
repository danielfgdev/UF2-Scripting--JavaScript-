const max = 5
const min = 227
let randomNumbers = []

for (let i = 0; i < 10; i = i + 1) {
    let random = Math.random() * (max - min + 1) + min
    let randomInt = Number(random.toFixed(0))
    console.log(random.toFixed(0))
    randomNumbers.push(randomInt)
}
console.log(randomNumbers)
console.log(randomNumbers[6])
