/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

    });

    function pertenceAFibonacci(numero) {
    if (numero < 0) return false; // Fibonacci não possui números negativos
    
    let a = 0;
    let b = 1;

     if (numero === a || numero === b) return true;
    
    let fib = a + b;
    
    while (fib <= numero) {
        if (fib === numero) return true;
        a = b;
        b = fib;
        fib = a + b;
    }
    
    return false;
}


    const numeroInformado = 43 

    console.log(`Número informado: ${numeroInformado}`);
    
    if (isNaN(numeroInformado)) {
        console.log('Por favor, informe um número válido.');
    } else if (pertenceAFibonacci(numeroInformado)) {
        console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
    }
    
    rl.close(); 
;