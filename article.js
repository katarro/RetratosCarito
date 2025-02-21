// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Cargar el hero
    fetch("hero.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("hero-container").innerHTML = data;
      });
  });
  