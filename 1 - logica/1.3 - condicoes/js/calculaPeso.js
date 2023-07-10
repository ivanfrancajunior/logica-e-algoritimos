const inNome = document.getElementById("inNome");
const rbMasculino = document.getElementById("rbMasculino");
const rbFeminino = document.getElementById("rbFeminino");
const inAltura = document.getElementById("inAltura");
const outResposta = document.getElementById("outResposta");
const btResultado = document.getElementById("btCalcular");
const btLimpar = document.getElementById("btLimpar");

const calculaPeso = () => {
  let nome = inNome.value;
  let male = rbMasculino.checked;
  let female = rbFeminino.checked;
  let altura = Number(inAltura.value);

  if (nome === "" || (male == false && female == false)) {
    alert("Por favor, verifique os campos de nome e sexo.");
    inNome.focus();
    return;
  }

  if (altura == 0 || (male == false && female == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus();
    return;
  }

  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente...");
    inAltura.focus();
    return;
  }

  if (male) {
    peso = 22 * Math.pow(altura, 2);
    outResposta.style.color = "pink";
    outResposta.textContent =
      nome + ", Seu peso ideal é " + peso.toFixed(3) + " kg.";
  } else {
    peso = 21 * Math.pow(altura, 2);
    outResposta.style.color = "pink";
    outResposta.textContent =
      nome + ", Seu peso ideal é " + peso.toFixed(3) + " kg.";
  }
};

function limparCampos() {
  location.reload();
  inNome.value = "";
  inAltura.value = 0;
  rbMasculino.checked = false;
  rbFeminino.checked = false;
  document.getElementById("inNome").focus();
}

btResultado.addEventListener("click", calculaPeso);
btLimpar.addEventListener("click", limparCampos);
