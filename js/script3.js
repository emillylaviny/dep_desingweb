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