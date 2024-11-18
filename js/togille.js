let newTog = document.querySelector(".catalog-menu");
let toG = document.querySelector(".header-menu");

newTog.addEventListener("click", () => {
  toG.classList.toggle("hidden");
  if (toG.classList.contains("hidden")) {
    newTog.textContent = "Katalog";
  } else {
    newTog.textContent = "No katalog";
  }
});