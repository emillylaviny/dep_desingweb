var nome  = "pedrina";
let nasc = 1991;
const viva = confirm("clique em ok, se estiver viva");

let altura;

function CalcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da função: ${idade}`);
    return idade;
}

alert(`´idade fora da função ${CalcIdade()}`)

/*CalcIdade();
console.log(`idade fora da função: ${idade}`)*/            

if (viva){
    altura = prompt("Digite sua altura: ");
}