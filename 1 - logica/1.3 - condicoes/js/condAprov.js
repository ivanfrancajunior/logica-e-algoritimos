const inNome = document.getElementById('inNome')
const inNota1= document.getElementById('inNota1')
const inNota2= document.getElementById('inNota2')
const outNota = document.getElementById('outNota')
const outMessage = document.getElementById('outMessage')
const bt = document.getElementById("bt")
const btReset = document.getElementById("btReset")
const calculaMedia = () =>{
    console.log("rlrlrl aooo!")
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)
    let aluno = inNome.value
    let media = (nota1 + nota2)/ 2

    outNota.textContent = `A média obtida foi ${media}.`
    outNota.style.textDecoration='bold'
    outNota.style.color='white'

    if(media >= 7 ){
        outMessage.textContent = `Parabéns ${aluno}, vc foi aprovado(a)!`
        outMessage.style.color='green'
    }else{
        outMessage.textContent = `Você obteve desenpenho insufuciente para ser aprovado(a).`
        outMessage.style.color='red'
        
    }
}

function limparCampos() {
    location.reload();
    inNome.value=''
    inNota1.value=0
    inNota2.value=0
    inNome.focus();

}
    
bt.addEventListener('click', calculaMedia)
btReset.addEventListener('click',limparCampos)