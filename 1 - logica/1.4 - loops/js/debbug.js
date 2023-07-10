function preencherEstrelas() {
    const inNumero = document.getElementById("inNumero");
    const outEspacos = document.getElementById("outEspacos");
    const num = Number(inNumero.value);
  
    if (num == 0 || isNaN(num)) {
      alert("Número Inválido...");
      inNumero.focus();
      return;
    }
  
    let estrelas = "";
  
    for (let i = 1; i <= num; i++) {
      if (i % 2 != 0) {
        estrelas += "*";
      } else {
        estrelas += "-";
      }
    }
  
    outEspacos.textContent = estrelas;
}

const btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);