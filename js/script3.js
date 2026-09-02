let nome = prompt("Digite seu nome: ");
let nasc = Number(prompt("Digite seu ano de nascimento: "));
let viva = confirm("clique em ok se estiver viva. Caso contrário, cancelar");
let altura = prompt("Digite sua altura: ");
altura = Number(altura);
let sexo = prompt("Digite seu sexo: ");
let peso = prompt("Digite seu peso: ");
peso = Number(peso);
let imc = peso/altura;

console.log("nome", typeof(nome));
console.log("nasc", typeof(nas));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));

msg = `Nome: ${nome}\nano de nascimento: ${nasc}\nViva: ${viva}`;
msg = msg + `\nAltura: ${altura}\nsexo: ${sexo}\npeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);