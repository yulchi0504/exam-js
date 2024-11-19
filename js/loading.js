window.onload = function () {
  let loading = document.querySelector(".lds-spinner");
  setTimeout(() => {
    loading.style.display = "none"; 
  }, 2000); 
};
