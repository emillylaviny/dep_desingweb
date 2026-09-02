var nome  = "pedrina";
let nasc = 1991;
const viva = confirm("clique em ok, se estiver viva");

let altura;

function CalcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da função: ${idade}`);
    let menor
    if(idade < 18){
        menor = true;
    }else{
        menor = false;
    }
    return (idade, menor);
}

let retorno = CalcIdade()
if (retorno[1]){
    alert(`idade: ${retorno[0]}. Você é menor de idade`);
}else{
    alert(`idade: ${retorno[0]}. Você é maior de idade`);
}

if (viva){
    altura = prompt("Digite sua altura: ");
}