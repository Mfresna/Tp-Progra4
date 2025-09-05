function operacion(a, b, tipo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (tipo) {
                case 'suma':
                    resolve(a + b);
                    break;
                case 'resta':
                    resolve(a - b);
                    break;
                case 'multiplicacion':
                    resolve(a * b);
                    break;
                case 'division':
                    if (b === 0) {
                        reject('Error: división por cero');
                    } else {
                        resolve(a / b);
                    }
                    break;
                default:
                    reject('Operación no válida');
            }
        }, 1000);
    });
}

async function operacionCompleja(num1, num2) {
    try {
        let suma = await operacion(num1, num2, "suma");
        console.log(`Suma: ${num1} + ${num2} = ${suma}`);

        let multiplicacion = await operacion(suma, 2, "multiplicacion");
        console.log(`Multiplicación: ${suma} * 2 = ${multiplicacion}`);

        let resta = await operacion(multiplicacion, 4, "resta");
        console.log(`Resta: ${multiplicacion} - 4 = ${resta}`);

        let division = await operacion(resta, 3, "division");
        console.log(`División: ${resta} / 3 = ${division}`);

        console.log("Resultado final:", division);
        return division;

    } catch (error) {
        console.error("Error en operación:", error);
    }
}

// Ejecutar
operacionCompleja(10, 5).then(m => console.log(m))
