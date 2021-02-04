console.log("--------------------------Listas de Alunos:");

const listaDeAlunos = new Array(
    "joão"
    ,"maria"
    ,"mario"
    ,"lucas"
);

listaDeAlunos.push("ana");
listaDeAlunos.push("Samira");
console.log(listaDeAlunos);
listaDeAlunos.splice(2,1); //irá remover apartir do index 2 e removerá apenas um elemneto
console.log(listaDeAlunos);
//Olhar o restante de metodos na documentação "Array JS"

//para pegar uma posicao é igual no java
console.log("Aluno: ", listaDeAlunos[3]);

console.log();