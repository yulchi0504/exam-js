let allProducts = document.querySelector(".all-products");
let searchInput = document.querySelector(".search-pro");
let cardLength = document.querySelector(".card-new-length");

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
      <button onClick="addCard(${id})" class="card--footer__btn">В корзину</button>
    </div>
  </div>
  `;
}

function getProducts(data = products) {
  allProducts.innerHTML = "";
  data.forEach((product) => {
    allProducts.innerHTML += getAllProductsCard(product);
  });
  cardLength.innerText = data.length;
}

getProducts();

searchInput.addEventListener("keyup", function () {
  let search = this.value.toLowerCase(); // Katta-kichik harflarni hisobga olmaslik uchun
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getProducts(filteredProducts);
});

function addCard(id) {
  let product = products.find((pro) => pro.id === id);
  let check = cards.find((pro) => pro.id === id);

  if (check) {
     cards = cards.map((pro) => {
      if (pro.id === id) {
        pro.quantety++;
      }
      return pro;
    });
  } else {
    product.quantety = 1;
    cards.push(product);
  }

  setCard(product);
  console.log(cards);
  
}
