const inNome = document.getElementById("inNome");
const inPreco = document.getElementById("inPreco");
const bt = document.getElementById("bt");
const outName = document.getElementById("outName");
const outPreco = document.getElementById("outPreco");

const calculaPromo = () => {
  console.log("rl rl rl aooo! ");

  let prod = inNome.value;
  let preco = Number(inPreco.value);
  outName.textContent = prod;
  outPreco.textContent = 'Promoção - Leve 2 por apenas R$ '+ parseInt(preco * 2) +",00.";
};
calculaPromo();

bt.addEventListener('click', calculaPromo)