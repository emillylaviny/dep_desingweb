let nasc = prompt("Digite seu ano de nascimento: ");
nasc = Number(nasc);

idade = 2026 - nasc;

let fds = confirm("Clique em ok se hoje é final de semana.")

alert(`Você é maior de idade: ${idade >= 18}`);
alert(`Hoje é final de semana: ${fds}`);
alert(`Pode beber: ${idade >= 18 && fds}`);