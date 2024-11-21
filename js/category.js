let allProducts = document.querySelector(".all-products");
let searchInput = document.querySelector(".search-pro");

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

function getProducts(data = products) {
  allProducts.innerHTML = "";
  data.forEach((product) => {
    allProducts.innerHTML += getAllProductsCard(product);
  });
}

getProducts();

searchInput.addEventListener("keyup", function () {
  let search = this.value.toLowerCase(); 
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getProducts(filteredProducts); 
});
