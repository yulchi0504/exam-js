let loading = document.querySelector(".lds-spinner");
let newLoad = document.querySelector("body");
window.onload = function () {
  newLoad.classList.add("body");

  setTimeout(() => {
    if (newLoad.classList.contains("body")) {
      newLoad.style.display = "block";
    }

    loading.style.display = "none";
  }, 2000);
};
