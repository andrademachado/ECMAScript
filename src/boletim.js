const alunos = ['André','Bia','Jonas','Laura','Rose','Sérgio'];
const numeros = [5,3,10,6,8,7];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        
    }   
})

console.log(alunos2);

const numeros2 = numeros.map(function(itemAtual){
    return {
        notas: itemAtual,
    
    }   
})

console.log(numeros2);


const mediaDeNotas = numeros.map(function(numeroAtual){
    
    return numeroAtual >= 6 ;
})

console.log(mediaDeNotas);

