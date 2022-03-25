import { getProduct } from "./components/getProducts.js";

const prodDetails = getProduct();

const checkoutInfoContainer = document.querySelector(".checkout-info-container");

prodDetails.forEach((productjacket) => {
  checkoutInfoContainer.innerHTML += `<h2>${productjacket.brand}</h2>
                                      <h3>${productjacket.brand}</h3>`;
});
