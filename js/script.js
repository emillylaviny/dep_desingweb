alert("oi do interno"); 

var num = parseFloat(prompt("Digite um número: "))
if (num == 0){
    alert(`${num} é zero`);
}else if (num %2 != 0){
    alert(`${num} é impar`)
}else{
    alert(`${num} é par`)
}

alert("Fim")