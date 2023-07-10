// let nome = prompt("Qual seu nome?");
// alert(`Olá amigo ${nome}!`);

const calcula = () => {
  let num = prompt("Digite um numero?");
  if (typeof num !== "number") {
    alert("O valor digitado não é um numero!");
    return;
  }
  alert(`O dobro do numero digitado é ${num * 2}!`);
};

/*
E
P
S
*/
const calculaJantar = () => {
  let jantar = Number(prompt("Qual o valor do jantar?"));
  let taxa = jantar * 0.1;
  let total = jantar + taxa;
  alert(
    `O valor total a ser pago é R$${total.toFixed(
      2
    )} e \n a taxa do garçom é R$${taxa.toFixed(2)}!`
  );
};
