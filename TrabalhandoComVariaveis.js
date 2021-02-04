console.log("Trabalhando com variaveis");

//const são constantes, uma vez atribuidas sempre serão aquele valor, imutaveis
//São obrigadas a serem inicializadas
const primeiroNome  = "Jocy";
const sobrenome = "Gonçalves";
const idadeStr = "27";
const idade = 27;

//let são variaveis normais, uma vez atribuidas podem serem mudadas para qualquer tipo, mutaveis
let contator = 0;

//sempre tentar optar com const no JavaScript
//const nomeCompleto = primeiroNome + sobrenome;
const nomeCompleto = (primeiroNome + " "+ sobrenome);


//Utiliza o parse para converter um valor
console.log("Convertendo o valor 27 e diminuindo por 7: " + (parseInt(27)-7));


console.log(primeiroNome, sobrenome, idade, idadeStr);
console.log(`Meu nome completo é ${nomeCompleto}`); //Utilizando Expresion Language (EX)

