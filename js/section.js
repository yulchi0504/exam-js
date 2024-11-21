let discountRow = document.querySelector(".discount-row");
let newProductsRow = document.querySelector(".newProducts-row");
let popularProductsRow = document.querySelector(".popular-row");

function getProducts(product) {
  let productCard = document.createElement("div");
  productCard.className = "product-card";

  let productCardBody = document.createElement("div");
  productCardBody.className = "product-card__body";

  let productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;
  productCardBody.appendChild(productImg);

  let productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card__footer";

  let productTitle = document.createElement("h3");
  productTitle.innerHTML = ` ${product.name} `;

  let productDesc = document.createElement("p");
  productDesc.className = "text-product-name";
  productDesc.innerHTML = `${product.description}`;

  let productPrice = document.createElement("p");
  productPrice.className = "price-product";
  productPrice.innerHTML = ` Price: ${product.price} $`;

  let productBtn = document.createElement("button");
  productBtn.innerHTML = `<b> В корзину</b>`;

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productDesc);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

let discountProducts = products.filter((pro) => pro.discount).slice(-4);
discountProducts.map((discount) => {
  let card = getProducts(discount);
  discountRow.appendChild(card);
});

let newProducts = products.slice(-4);

newProducts.map((newPro) => {
  let card = getProducts(newPro);
  newProductsRow.appendChild(card);
});

let popularProducts = products
  .toSorted((a, b) => a.rating - b.rating)
  .slice(-4);
popularProducts.map((popular) => {
  let card = getProducts(popular);
  popularProductsRow.appendChild(card);
});
