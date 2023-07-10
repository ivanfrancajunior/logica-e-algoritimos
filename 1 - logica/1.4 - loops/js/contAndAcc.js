var numContas = 0;
var valTotal = 0;
var resposta = '';

function registrarConta() {
  const inDescricao = document.getElementById('inDescricao');
  const inValor = document.getElementById('inValor');
  const outListaContas = document.getElementById('outListaContas');
  const outTotal = document.getElementById('outTotal');

  let descricao = inDescricao.value;
  let valor = Number(inValor.value);

  if (descricao === '' || valor === 0 || isNaN(valor)) {
    alert('Informe os dados corretamente...');
    inDescricao.focus();
    return;
  }

  numContas++;
  valTotal += valor;

  resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`;

  outListaContas.textContent = `${resposta}----------------------`;
  outTotal.textContent = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(
    2
  )}`;

  inDescricao.value = '';
  inValor.value = '';
  inDescricao.focus();
}
btRegistrar.addEventListener('click', registrarConta);

const inNumeroP = document.getElementById('inNumeroP');
const outResposta = document.getElementById('outResposta');

const verificaPrimo = () => {
  let divisores = 0;

  for (i = 2; i <= inNumeroP.value; i++) {
    if (inNumeroP.value % i == 0) {
      divisores++;
    }
  }
  if (divisores == 2) {
    outResposta.textContent = inNumeroP.value + ' É primo!';
  } else {
    outResposta.textContent = inNumeroP.value + ' Não é primo.';
  }
};

const btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificaPrimo);
