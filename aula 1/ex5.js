<<<<<<< HEAD
const readline = require('readline');

let pares = 0;
let impares = 0;    

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o número ${i}: `));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);
=======
const readline = require('readline');

let pares = 0;
let impares = 0;    

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o número ${i}: `));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);
>>>>>>> ed0d96df9b74752ccb56e9cd519b966e4395047a
