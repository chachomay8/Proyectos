const readline = require('readline');

var x1,x2,x3;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ingresa su operacion: (suma, resta, division, multi):  ', (respuesta1) => {
    respuesta1.toString();
    x1 = respuesta1;

    rl.question('ingresa tu primer numero; ', (respuesta2) => {
        x2 = parseFloat(respuesta2);

        rl.question(':ingresa tu segundo numero: ', (respuesta3) => {
            x3 = parseFloat(respuesta3);

            if (x1 === 'suma'){
                console.log(`la suma es = ${x2 + x3}`);
            } else
            if (x1 === 'resta'){
                console.log(`la resta es = ${x2 - x3}`);
            } else 
            if (x1 === 'division'){
                console.log(`la division es = ${x2 / x3}`);
            } else 
            if (x1 === 'multi'){
                console.log(`la multiplicacion es = ${x2 * x3}`);
            } else {
                console.log(`la operacion es incorrecta`);
            }


    rl.close();
        });
    });
});
