// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Cargar el encabezado
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    });

  // Cargar el pie de página
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  fetch("head.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("head-container").innerHTML = data;
    });

  fetch("menu_mobile.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("menu_mobile-container").innerHTML = data;
    });

  fetch("article.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("article-container").innerHTML = data;
    });

  fetch("hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero-container").innerHTML = data;
    }); 
    fetch("action.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("action-container").innerHTML = data;
    });
});
