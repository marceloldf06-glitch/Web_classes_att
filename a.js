console.log("eae mundinho achado");

var nome;
let number;
const nPI = 3;
console.log(typeof(nPI));
console.log(typeof(nome));
nome = "CheloNOW";
console.log(typeof(nome));

if (nome == "CheloNOW") {
    number = 17
} else {
    number = 20
}
console.log(number)
var peso = 77
var altura = 1.76
imc = peso/(altura * altura)
console.log(imc)
if(imc <= 18.5){
console.log("Baixo Peso")
}else if(imc <= 24.9){
console.log("Peso Normal")
}else if(imc <= 29.9){
console.log("Excesso de Peso")
}else if(imc <= 35){
console.log("Obesidade")
}else {
console.log("Obesidade Extrema")
}