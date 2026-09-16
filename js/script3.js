let saudacao_a = function(){
    alert(`Olá fulano, seja bem-vindo`);
}

let saudacao_b = function(nome){
    alert(`Olá ${nome}, seja bem-vindo`);
}

let saudacao_c = function(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem-vindo`)
}

let saudacao_d = function(nome="Desconhecido"){
    return `olá ${nome}, seja bem-vindo`;
}

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_a();
})

const btn_b = document.getElementById("btn_b");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("Digite seu nome:");
    saudacao_b(nome);
})

const btn_cp = document.getElementById("btn_cp");
cp.addEventListener("click", function(e){
    e.preventDefault();
    nome = prompt("Digite seu nome:");
    saudacao_c(nome);
})

const btn_cn = document.getElementById("btn_cn");
c.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("Digite seu nome:");
    saudacao_c(nome);
})

const btn_dn = document.getElementById("btn_dn");
btn_dn.addEventListener("click", function(e){
    e.preventDefault();
    alert(saudacao_d());
})
