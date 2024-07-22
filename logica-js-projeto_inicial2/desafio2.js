// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

let altura = 1.8;
let peso = 110;

let imc = calculoImc(altura, peso);

console.log(`O IMC de Jonathan é ${imc.toFixed(2)} `);

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
}

let resultado = 1;

// desisti kkkkkk

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoDolarParaReal(valorDolar) {
  let cotacaoDolar = 4.8;
  let valorReal = valorDolar * cotacaoDolar;
  return valorReal;
}

let valorDolar = 50;
const valorEmReais = conversaoDolarParaReal(valorDolar);
console.log(`$${valorDolar} é equivalente a R$${valorEmReais.toFixed(2)}`);

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaEPerimetro(alturaa, largura) {
  let area = alturaa * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`A área da sala é: ${area} metro quadrados`);
  console.log(`O perímetro da sala é: ${perimetro} metro`);
}

let alturaa = 5;
let largura = 10;

calcularAreaEPerimetro(alturaa, largura);

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCircular(raio) {
  const pi = 3.14;

  const area = pi * raio * raio;

  const perimetroo = 2 * pi * raio;

  console.log(`A área da sala circular é: ${area} metros quadrados`);
  console.log(`O perímetro da saka circular é ${perimetroo.toFixed(3)} metros`);
}

const raio = 5;
calcularAreaEPerimetroCircular(raio);

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exemplo de uso
const numero = 7; // número para a tabuada

mostrarTabuada(numero);
