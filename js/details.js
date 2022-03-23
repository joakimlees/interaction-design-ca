import { products } from "./components/jacketsArray.js";

const detailsContainer = document.querySelector(".main-golden-age");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const characterId = params.get("id");

const findId = products.filter((product) => {
  return product.id === characterId;
});

detailsContainer.innerHTML = `

<div>
<div class="product-wrapper">
  <div class="image-container">
    <img src="${findId[0].image}" />
  </div>
  <div class="product-text">
    <h2>${findId[0].brand}</h2>
    <h3>${findId[0].name}</h3>
    <p>${findId[0].model}</p>
    <p class="price-tag">$${findId[0].price}</p>
  </div>
</div>
</a>
</div>`;
