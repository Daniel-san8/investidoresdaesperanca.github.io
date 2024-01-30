document.addEventListener("DOMContentLoaded", function () {
  var menuHamburguer = document.querySelector(".menu-hamburguer");
  var menuNavegacao = document.querySelector(".menu-navegacao");
  let botao = document.querySelector(".botao-cabecalho");

  menuHamburguer.addEventListener("click", function () {
    menuNavegacao.style.display =
      menuNavegacao.style.display === "block" ? "none" : "block";
    botao.style.display = botao.style.display === "none" ? "block" : "none";
  });
});
