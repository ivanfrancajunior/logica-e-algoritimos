const name = document.getElementById("nome");

const btn = document.getElementById("btn");
const text = document.getElementById("paragrafo");

text.textContent = "Este paragrafo é um foi gerado via JavaScript!";

const falaOi = () => {
  alert(`Olá, ${nome.value}!`);
};
btn.addEventListener("click", function () {
  falaOi();
});
