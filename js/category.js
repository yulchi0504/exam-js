let allProducts = document.querySelector(".all-products");
let searchProduct = document.querySelector(".search-pro");

function getAllProductsCard({ id, name, description: desc, price, images }) {
  return `
  <div class="card">
  
    <div class="card--body">
      <img src=${images[0]} alt=${name} />
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
products.forEach((product) => {
  allProducts.innerHTML += getAllProductsCard(product);
});

searchProduct.addEventListener("keyup", function () {
  let search = this.value;
  let searchProduct = product.filter((product) =>
    product.name.includes(search)
  );
  console.log(searchProduct);
});
