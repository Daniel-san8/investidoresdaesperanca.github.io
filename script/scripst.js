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

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".carousel img").length;

  prevBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    const translateValue = -index * (100 / totalSlides) + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
    currentIndex = index;
  }
});
