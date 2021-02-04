

const lista = new Array();
lista.push("ana");
lista.push("joao");
lista.push("maria");

let chave = true;
let contador = 0;
const nome = "mariaaa";


while(contador < lista.length && chave){

    if(nome == lista[contador]){
        console.log("Achou");
        chave = false;
    }       

    contador++;
}
if(chave){
    console.log("Não há elementos com este nome");
}


for(let i = 1; i < 10; i++){
    for(let j = 0; j < i; j++){
        console.log("*")
    }
}
