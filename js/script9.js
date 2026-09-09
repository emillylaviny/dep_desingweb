let vezes = Number(prompt("Digite o númeor de vezes: "))
for(let i = 1; i<=vezes; i++){
    if (vezes>100){
        alert("Número de vezes deve ser inferior ou igual a 100");
        break
    }
    alert(`contei ${i} vez`);
    if (i%2!=0){
        continue
    }
    alert(`${i} é par`)
}