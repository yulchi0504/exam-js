let cardAbout = document.querySelector(".card-content");
function getCard({ id, images, name, description, price, quantety }) {
  return `
    <div class="card-about">
          <div class="card-item-about">
            <img src=${images[0]} alt=${name} />
          </div>
          <div class="card-footer">
            <h3>${name}</h3>
            <p>${description}</p>
            <p class="price-text">$ ${price}</p>
            <button onclick="minusQuantety(${id})">-</button>
            <span>${quantety}</span>
            <button onclick="plusQuantety(${id})">+</button>
          </div>
    </div>
  `;
}
function getCardsPro() {
  cardAbout.innerHTML = "";
  boxcards.forEach((pro) => {
    cardAbout.innerHTML += getCard(pro);
  });
}
getCardsPro();

function plusQuantety(id) {
  cart = boxcards.map((pro) => {
    if (pro.id === id) {
      pro.quantety++;
    }
    return pro;
  });
  localStorage.setItem("boxcards", JSON.stringify(boxcards));
  getCardsPro();
}

function minusQuantety(id) {
  let product = boxcards.find((pro) => pro.id === id);
  if (product.quantety === 1) {
  }
  if (product.quantety == 1) {
    let isDelete = confirm("Do you wont delete this product?");

    if (isDelete) {
      boxcards = boxcards.filter((pro) => pro.id !== id);
    }
  } else {
    cart = boxcards.map((pro) => {
      if (pro.id === id) {
        pro.quantety--;
      }
      return pro;
    });
  }
  localStorage.setItem("boxcards", JSON.stringify(boxcards));
  getCardsPro();
}




























































































































































































































