var nasc = parseInt(prompt("Digite seu ano de nascimento: "));
let  nome = prompt("Digite seu nome: ");
const viva = true
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let idade;

if (viva){
    idade = 2026 - nasc;
    alert(`${nome} você tem ${idade} anos.`);
}else{
    alert(`Você está morta.`);
}

alert("Fim");