const inNumero = document.getElementById('inNumero');
const btDecrescer = document.getElementById('btDecrescer');
const outResposta = document.getElementById('outResposta');

const decrescer = () => {
  let num = Number(inNumero.value);
  if (num == 0 || isNaN(num)) {
    alert('Informe um número válido...');
    inNumero.focus();
    return;
  }
  let resposta = '';
  for (let i = num; i >= 1; i--) {
    resposta = resposta + ' ' + i;
  }
  outResposta.textContent = resposta;
};
btDecrescer.addEventListener('click', decrescer);
