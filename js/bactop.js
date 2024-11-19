const backtop = document.querySelector(".backtop");

window.onscroll = () => {
  backtop.style.display = window.scrollY > 200 ? "block" : "none";
};
