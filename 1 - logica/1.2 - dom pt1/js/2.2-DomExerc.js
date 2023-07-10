/*
b) Elaborar um programa para uma revenda de veículos. O programa deve
ler modelo e preço do veículo. Apresentar como resposta o valor da entrada
(50%) e o saldo em 12x. A Figura 2.9 ilustra uma execução desse programa.

*/
const inVeiculo = document.getElementById("inVeiculo");
const inEntrada = document.getElementById("inEntrada");
const outVeiculo = document.getElementById("outVeiculo");
const outEntrada = document.getElementById("outEntrada");
const outSaldo = document.getElementById("outSaldo");
const btn = document.getElementById("btn");

const showPromo = () => {
  console.log("pq n pega saemrda");
  let carro = inVeiculo.value;
  let entrada = Number(inEntrada.value) * 0.5 ;
  let saldo = Math.round( entrada/12).toFixed(2)

  outVeiculo.textContent = "Promoção: " + carro;
  outEntrada.textContent = "Entrada: R$" + entrada.toFixed(2);
  outSaldo.textContent = "Saldo: 12 parcelas de R$ " + saldo
};

btn.addEventListener('click', showPromo)