<<<<<<< HEAD
const input = require('readline-sync')

let soma = 0

for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question(`Digite a nota ${i}: `));
    soma += nota;
}
let media = soma / 5;
console.log("Media: " + media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}   
=======
const input = require('readline-sync')

let soma = 0

for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question(`Digite a nota ${i}: `));
    soma += nota;
}
let media = soma / 5;
console.log("Media: " + media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}   
>>>>>>> ed0d96df9b74752ccb56e9cd519b966e4395047a
