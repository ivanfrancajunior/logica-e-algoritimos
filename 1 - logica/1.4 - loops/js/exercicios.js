/*
a) Elaborar um programa que leia o nome de uma fruta e um número. O
programa deve repetir a exibição do nome da fruta, de acordo com o número
informado. Utilize o “*” para separar os nomes. A Figura 4.15 ilustra a
execução do programa.
 */

const inFruta = document.getElementById('inFruta');
const inQuantidade = document.getElementById('inQuantidade');
const outFruta = document.getElementById('outFruta');
const btRepetir = document.getElementById('btRepetir');

const retepeteFruta = () => {
  const nomeFruta = inFruta.value;
  const qtt = Number(inQuantidade.value);

  for (let i = 0; i <= qtt; i++) {
    outFruta.textContent += nomeFruta + '*';
  }
};

btRepetir.addEventListener('click', retepeteFruta);
/*
b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
após o primeiro ano. Elaborar um programa que leia o número inicial de
chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
da fazenda. Validar a entrada para que o número inicial de chinchilas seja
maior ou igual a 2 (um casal). 
*/

const inChinchilas = document.getElementById('inChinchilas');
const inAno = document.getElementById('inAno');
const outChinchilas = document.getElementById('outChinchilas');
const btCriaChinchilas = document.getElementById('btCriaChinchilas');

const criaChinchilas = () => {
  const chinchilas = Number(inChinchilas.value);
  const ano = Number(inAno.value);

  if (chinchilas < 2) {
    alert('Informe um número maior ou igual a 2...');
  }

  let numeroChinchilas = chinchilas;

  for (let i = 1; i <= ano; i++) {
    if (i === 1) {
      outChinchilas.textContent += `${i}º Ano: ${numeroChinchilas} chinchilas, \n`;
    } else if (i === 2) {
      numeroChinchilas *= 3;
      outChinchilas.textContent += `${i}º Ano: ${numeroChinchilas} chinchilas, \n`;
    } else {
      numeroChinchilas *= 3;
      outChinchilas.textContent += `${i}º Ano: ${numeroChinchilas} chinchilas, \n`;
    }
  }

  // Limpa os campos de entrada
  inChinchilas.value = '';
  inAno.value = '';
};

btCriaChinchilas.addEventListener('click', criaChinchilas);
/*
c) Elaborar um programa que leia um número e verique se ele é ou não
perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
divisores inteiros (exceto o próprio número). O programa deve exibir os
divisores do número e a soma deles.
*/

const inPerfeito = document.getElementById('inPerfeito');
const outPerfeito = document.getElementById('outPerfeito');
const btPerfeito = document.getElementById('btPerfeito');

const verificaPerfeito = ( ) =>{
  const value = Number(inPerfeito.value);
  let soma = 0;
  for(let i = 0; i < value; i++){
    if(value % i === 0){
      soma += i;
    }
  }
  if(soma === value){
    outPerfeito.textContent = value + " é perfeito!";
  }else{
    outPerfeito.textContent = value + " não é perfeito :( ";
  }
}
btPerfeito.addEventListener('click', verificaPerfeito);