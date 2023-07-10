/* 
a) Elaborar um programa que leia um número. Informe se ele é par ou
ímpar. A Figura 3.7 ilustra a tela de execução do programa. Para os
exercícios, foi utilizada uma gura padrão, mas você pode substituí-la caso
tenha interesse
*/
const inParImpar = document.getElementById('inParImpar');
const outParImpar = document.getElementById('outParImpar');
const btParImpar = document.getElementById('btParImpar');

const verificaParImpar = () => {
  let value = Number(inParImpar.value);
  if (value % 2 === 0) {
    outParImpar.textContent = `O número ${value} é par.`;
  } else {
    outParImpar.textContent = `O número ${value} é impar.`;
  }
};

/*
    b) Elaborar um programa que leia a velocidade permitida em uma estrada e
    a velocidade de um condutor. Se a velocidade for inferior ou igual à
    permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
    permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
    velocidade permitida, exiba “Multa Grave”
 */
btParImpar.addEventListener('click', verificaParImpar);

const inRegularSpeed = document.getElementById('inRegularSpeed');
const inUserSpeed = document.getElementById('inUserSpeed');
const outSpeedText = document.getElementById('outSpeedText');
const btSpeed = document.getElementById('btSpeed');

const verificaVelocidade = () => {
  let regular = Number(inRegularSpeed.value);
  let uSpeed = Number(inUserSpeed.value);

  if (uSpeed < regular) {
    outSpeedText.textContent = `Situação regular.`;
    return;
  }
  if (uSpeed <= regular * 1.2) {
    outSpeedText.textContent = `Multa Leve.`;
  } else if (uSpeed > regular * 1.2) {
    outSpeedText.textContent = `Multa grave.`;
  }
};

btSpeed.addEventListener('click', verificaVelocidade);
/*
c) Elaborar um programa para simular um parquímetro, o qual leia o valor
de moedas depositado em um terminal de estacionamento rotativo. O
programa deve informar o tempo de permanência do veículo no local e o
troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao
tempo mínimo, exiba a mensagem: “Valor Insuciente”. Considerar os
valores/tempos da Tabela 3.6 (o máximo é 120 min).

*/

const inParquimetro = document.getElementById('inParquimetro');
const outParquimetroTime = document.getElementById('outParquimetroTime');
const outParquimetroTroco = document.getElementById('outParquimetroTroco');
const btParqimetro = document.getElementById('btParqimetro');

const calculaParquimetro = () => {
    const value = Number(inParquimetro.value)
    if(value >= 1 && value < 1.75){
        let regular = 1;
        outParquimetroTime.textContent = 'Tempo: 30 minutos.'
        outParquimetroTroco.textContent = `Troco: R$ ${(value - regular).toFixed(2)}`
        return
    }
    if(value >= 1.75 && value < 3){
        let regular = 1.75;
        outParquimetroTime.textContent = 'Tempo: 60 minutos.'
        outParquimetroTroco.textContent = `Troco: R$ ${(value - regular).toFixed(2)}`
        return
    }
    if(value >= 3){
        let regular = 3;
        outParquimetroTime.textContent = 'Tempo: 120 minutos.'
        outParquimetroTroco.textContent = `Troco: R$ ${(value - regular).toFixed(2)}`
        return
    }
    
}

btParqimetro.addEventListener('click', calculaParquimetro);