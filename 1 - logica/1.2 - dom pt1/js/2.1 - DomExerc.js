console.log("to aqui");

/*
a) Elaborar um programa para uma Vídeo Locadora, que leia o título e a
duração de um lme em minutos. Exiba o título do lme e converta a
duração para horas e minutos, conforme destacado na Figura

 */

const inTitle = document.getElementById("inTitle");
const inDuration = document.getElementById("inDuration");
const outTitulo = document.getElementById("outTitulo");
const outDuracao = document.getElementById("outDuracao");
const btn = document.getElementById("btn");

function converterDuracao() {
  let title = inTitle.value;
  console.log(title);
  let duration = Number(inDuration.value);
  console.log(duration);
  console.log("titulo:", inTitle.value, "duração :", inDuration.value);

  outTitulo.textContent = title;
  outDuracao.textContent = `Duração ${Math.round(duration/60)}h ${duration % 60 ===0?'.': 'e ' + Math.round(duration % 60) + 'min.'} `;
}

btn.addEventListener("click", converterDuracao);