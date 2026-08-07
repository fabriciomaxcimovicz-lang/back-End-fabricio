<<<<<<< HEAD
const alunos = [
  { nome: "murilo", nota: 8.2 },
  { nome: "gideão", nota: 6.3 },
  { nome: "vitor", nota: 7.8 },
  { nome: "fabricio", nota: 10.0 },
  { nome: "Victor", nota: 5.7 }
];

const boletim = alunos.map(aluno => ({
  ...aluno,
  situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));


const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");

const mediaGeral = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;

console.log("Boletim da Turma:");
console.log(boletim);
console.log(`\nTotal de aprovados: ${aprovados.length}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
=======
const alunos = [
  { nome: "murilo", nota: 8.2 },
  { nome: "gideão", nota: 6.3 },
  { nome: "vitor", nota: 7.8 },
  { nome: "fabricio", nota: 10.0 },
  { nome: "Victor", nota: 5.7 }
];

const boletim = alunos.map(aluno => ({
  ...aluno,
  situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));


const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");

const mediaGeral = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;

console.log("Boletim da Turma:");
console.log(boletim);
console.log(`\nTotal de aprovados: ${aprovados.length}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
>>>>>>> 0a2f9005833ea6c0c913aefa65ccbf3936195341
