function calcularMeida(nota1, nota2, nota3, nota4) {
  let media = nota1 + nota2 + nota3 + nota4 / 4;
  return media;
}

function verificarAprovaca(media) {
  return media >= 5 ? "Aprovado" : "Reprovado";
}

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
