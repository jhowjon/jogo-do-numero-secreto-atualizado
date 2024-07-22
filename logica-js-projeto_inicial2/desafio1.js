// 1. Criar uma função que exibe "Olá, mundo!" no console.

function exibirMensagem() {
  console.log("Olá mundo");
}
exibirMensagem();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
  console.log("Olá, " + nome + "!");
}

exibirNome("Jonathan");

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroDoNumero(numero) {
  return numero * 2;
}

let resultado = dobroDoNumero(5);
console.log(resultado);

// // 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumero(numero1, numero2, numero3) {
  let soma = numero1 + numero2 + numero3;
  let media = soma / 3;
  return media;
}

let resultadoMedia = mediaNumero(10, 20, 30);
console.log(resultadoMedia);

// 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function qualEhMaiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let maiorNumero = qualEhMaiorNumero(350, 500);
console.log(maiorNumero);

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicarPorEleMesmo(numero) {
  return numero * numero;
}

let resultadoMultiplicacao = multiplicarPorEleMesmo(50);
console.log(resultadoMultiplicacao);
