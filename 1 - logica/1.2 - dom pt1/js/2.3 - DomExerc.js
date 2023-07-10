console.log("oskey");

/*
c) Elaborar um programa para um restaurante que leia o preço por kg e o
consumo (em gramas) de um cliente. Exiba o valor a ser pago, conforme
ilustra a Figura 2.10.
*/

const inValor = document.getElementById('inValor')
const inConsumo =document.getElementById('inConsumo')
const outValor =document.getElementById('outValor')
const outConsumo =document.getElementById('outConsumo')
const bt =document.getElementById('bt')

const calculaConsumo = () =>{
    let consumo =inConsumo.value
    let preco = inValor.value
    let tot = Number( (consumo/1000) * preco )

    outConsumo.textContent = `Valor a pagar R$ ${(tot).toFixed(2)}`
}


bt.addEventListener('click',calculaConsumo)