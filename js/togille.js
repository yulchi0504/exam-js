let newTog = document.querySelector(".catalog-humb");
let toG = document.querySelector(".header-menu");

newTog.addEventListener("click", () => {
  toG.classList.toggle("hidden");
  if (toG.classList.contains("hidden")) {
    newTog.innerHTML = '<img src="./img/close.svg" alt="Close">';
  } else {
    newTog.textContent = '<img src="./img/menu.svg" alt="Close">';
  }
});
