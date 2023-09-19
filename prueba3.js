const readline = require('readline');

var res;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ingresa su numero: ', (respuesta) => {
    res = parseFloat(respuesta);

    if (isNaN(res)){
        console.log('lo que ingreso no es un numero');
    } else {

    if (res % 2){
        console.log(`su numero: ${res} es impar`);
    } else {
        console.log(`su numero: ${res} es par`);
    }
}
    rl.close();
});
