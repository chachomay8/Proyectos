const readline = require('readline');

var x1,x2;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿ingresa tu primer numero? ', (respuesta1) => {
    x1 = parseInt(respuesta1);

    rl.question('¿ingresa tu segundo numero? ', (respuesta2) => {
        x2 = parseInt(respuesta2);

    console.log(`la suma es = ${x1 + x2}`);

    rl.close();
    });
});
