// ! Función que determina si un número es primo

function primo(num) {

    if (num <= 1) {
        console.log(num + " no es primo");
    } else {
        let primo = true;

        for (let i = 2; i < num; i = i + 1) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log(num + " es primo");
        } else {
            console.log(num + " no es primo");
        }
    }
}
primo(2);
