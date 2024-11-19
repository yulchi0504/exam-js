let newTog = document.querySelector(".catalog-menu");
let toG = document.querySelector(".header-menu");

newTog.addEventListener("click", () => {
  toG.classList.toggle("hidden");
  if (toG.classList.contains("hidden")) {
    newTog.textContent = "No katalog";
  } else {
    newTog.textContent = "Katalog";
  }
});
