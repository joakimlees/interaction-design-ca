import { products } from "./jacketsArray.js";
import { getProduct } from "./getProducts.js";

const detailsContainer = document.querySelector(".main-golden-age");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");

const findId = products.filter((product) => {
  return product.id === jacketId;
});

const jacket = findId[0];

detailsContainer.innerHTML = `

<div>
<div class="product-wrapper">
  <div class="image-container">
    <img src="${jacket.image}" />
  </div>
  <div class="product-text">
    <h2>${jacket.brand}</h2>
    <h3>${jacket.name}</h3>
    <p>${jacket.type}<p>
    <p>${jacket.model}</p>
    <p class="price-tag">${jacket.price}</p>
    <form>
    <label for=${jacket.color[0]}>${jacket.color[0]}<label>
    <input type="radio" id="${jacket.color[0]}" value="${jacket.color[0]}" name="color" checked="checked">
    <label for=${jacket.color[1]}>${jacket.color[1]}<label>
    <input type="radio" id="${jacket.color[1]}" value="${jacket.color[1]}" name="color">
    <label for=${jacket.color[2]}>${jacket.color[2]}<label>
    <input type="radio" id="${jacket.color[2]}" value="${jacket.color[2]}" name="color">
    <label for="size-select">Select size:</label>
    <select name="size-select" id="size-select">
      <option value="${jacket.size[0]}" selected="selected">${jacket.size[0]}</option>
      <option value="${jacket.size[1]}">${jacket.size[1]}</option>
      <option value="${jacket.size[2]}">${jacket.size[2]}</option>
    </select>
    <button class="add-cart-btn" data-image="${jacket.image}" data-brand="${jacket.brand}" data-name="${jacket.name}" data-price="${jacket.price}" data-color="${jacket.color[0]}" data-size="${jacket.size[0]}">add to local storage</button>
    </form>
  </div>
</div>
</a>
</div>`;

const addCartButton = document.querySelector(".add-cart-btn");

const colorSelects = document.querySelectorAll("input[name='color']");
for (let i = 0; i < colorSelects.length; i++) {
  colorSelects[i].addEventListener("click", onColorSelect);
}

function onColorSelect(event) {
  addCartButton.dataset.color = event.target.value;
}

const sizeSelects = document.querySelectorAll("select[name='size-select'] option");
for (let i = 0; i < sizeSelects.length; i++) {
  sizeSelects[i].addEventListener("click", onSizeSelect);
}

function onSizeSelect(event) {
  addCartButton.dataset.size = event.target.value;
}

addCartButton.addEventListener("click", orderDetails);

function orderDetails(event) {
  event.preventDefault();

  const color = this.dataset.color;
  const size = this.dataset.size;
  const brand = this.dataset.brand;
  const name = this.dataset.name;
  const price = this.dataset.price;
  const image = this.dataset.image;

  const currentProd = getProduct();
  const storedProdDetails = { brand: brand, name: name, size: size, color: color, price: price, image: image };

  currentProd.push(storedProdDetails);

  saveProducts(currentProd);
}

function saveProducts(storedProducts) {
  localStorage.setItem("products", JSON.stringify(storedProducts));
}
