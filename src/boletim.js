const alunos = ['André','Bia','Jonas','Laura','Rose','Sérgio'];
const numeros = [5,3,10,6,8,7];

const alunosComNotas = alunos.map((nome,index) =>({
    nome:nome,
    nota:numeros[index]
}));
   

   

console.log(alunosComNotas);

function verificaAprovados(alunosComNotas) {
    return alunosComNotas.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = verificaAprovados(alunosComNotas);
console.log(alunosAprovados);



const somaDasNotas = numeros.reduce((acumulador, nota) => acumulador + nota, 0);
const mediaDeNotas = somaDasNotas / numeros.length;

console.log(mediaDeNotas);