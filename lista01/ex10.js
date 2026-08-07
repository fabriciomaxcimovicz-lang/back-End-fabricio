<<<<<<< HEAD
const readline = require ("readline-sync");
function contarLetra(texto, letra){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            contador++;
        }
    }
    return contador;
}
let texto = readline.question("Digite o texto: ");
let letra = readline.question("Digite a letra que deseja contar: ");

console.log(`A letra ${letra} aparece ${contarLetra(texto, letra)} vezes`);
=======
const readline = require ("readline-sync");
function contarLetra(texto, letra){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            contador++;
        }
    }
    return contador;
}
let texto = readline.question("Digite o texto: ");
let letra = readline.question("Digite a letra que deseja contar: ");

console.log(`A letra ${letra} aparece ${contarLetra(texto, letra)} vezes`);
>>>>>>> 0a2f9005833ea6c0c913aefa65ccbf3936195341
