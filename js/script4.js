let atual = 1;
const foto = document.getElementById("foto");

function carregaFoto(i=1){
    if(i>=1 && i<=6){
        foto.setAttribute("src", `./img/foto${i}.jpg`);
    }else{
        console.log(`Foto ${i} não exsite`);
    }
}

function proximo(){
    if(atuaç<6){
        atual = atual + 1;
    }
    carregaFoto(atual);
}

function anterior(){
    if(atual>1){
        atual = atual - 1;
    }
    carregaFoto(atual);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", function(e){
    e.preventDefault();
    anterior();
})

const ant = document.getElementById("ant");
ant.addEventListener("click", function(e){
    e.preventDefault();
    anterior();
})

const combobox = document.getElementById("combobox");
combobox.addEventListener("change", function(e){
    e.preventDefault();
    atual = combobox.value;
    carregaFoto(atual);
})

const opacidade = document.getElementById("opacidade");
opacidade.addEventListener("input", function(e){
    e.preventDefault();
    let n = opacidade.value;
    foto.setAttribute("style", `opaciny ${n}`);
});

const li3 = document.getElementById("li1");
li1.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 2;
    carregaFoto(atual);
})

*/ fazer isso nos outros elementos tbm /