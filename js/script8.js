let op;
do{
    menu = "Escolha uma opção\n";
    menu = menu + "1.somar\n";
    menu = menu + "2.subtrair\n";
    menu = menu + "3.multiplicar\n";
    menu = menu + "4.dividir\n";
    menu = menu + "5.sair\n";
    op = prompt({menu});
}while(op!="5");