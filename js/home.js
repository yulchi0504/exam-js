document.addEventListener("DOMContentLoaded", function () {
  let allProducts = document.querySelector(".all-products");

  function getAllProductsCard({ id, name, description: desc, price, images }) {
    return `
      <div class="card">
        <div class="card--body">
          <img src="${images[0]}" alt="${name}" />
        </div>
        <div class="card--footer">
          <h2>${name}</h2>
          <p class="card--footer__desc">${desc}</p>
          <p class="card--footer__price">${price}$</p>
          <button class="card--footer__btn">В корзину</button>
        </div>
      </div>
    `;
  }

  const lastFourProducts = products.slice(-4);

  lastFourProducts.forEach((product) => {
    allProducts.innerHTML += getAllProductsCard(product);
  });
});
