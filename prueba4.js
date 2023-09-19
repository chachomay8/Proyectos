const readline = require('readline');

var res,inv;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ingresa su palabra: ', (respuesta) => {
    
    res = respuesta.toLowerCase();
    res = res.replace(/ /g, '');
  
    var arr = [];

    for (let i = res.length -1; i >= 0; i--){
        arr.push(res.charAt(i));
    }

    inv = arr.join('');


    if(res == inv){
        console.log(`la palabra es un palindromo`);
    } else {
        console.log(`la palabra no es un palindromo`);
    }

    rl.close();
});
