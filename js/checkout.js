import { getProduct } from "./getProducts.js";

const prodDetails = getProduct();

const checkoutInfoContainer = document.querySelector(".checkout-info-container");

let totalPrice = 0;

prodDetails.forEach((product) => {
  totalPrice += parseInt(product.price);

  return totalPrice;
});

prodDetails.forEach((product) => {
  checkoutInfoContainer.innerHTML += ` 
                                        <img src="${product.image}" />
                                        <h2>${product.brand}</h2>
                                        <h3>${product.brand}</h3>
                                        <p>${product.size}</p>
                                        <p>${product.price}</p>`;
});

checkoutInfoContainer.innerHTML =
  checkoutInfoContainer.innerHTML +
  `<p>Total Price: ${totalPrice},-
                                  </p><button class="to-checkout-button">Continue to checkout</button> `;

function makeCartHtml(event) {
  checkoutInfoContainer.innerHTML = "";

  prodDetails.forEach((product) => {
    checkoutInfoContainer.innerHTML += ` 
                                        <img src="${product.image}" />
                                        <h2>${product.brand}</h2>
                                        <h3>${product.brand}</h3>
                                        <p>${product.size}</p>
                                        <p>${product.price}</p>`;
  });

  checkoutInfoContainer.innerHTML =
    checkoutInfoContainer.innerHTML +
    `<p>Total Price: ${totalPrice},-
                                    </p><button class='to-checkout-button'>Continue to checkout</button> `;

  if (document.querySelector(".to-checkout-button")) {
    const toCheckoutButton = document.querySelector(".to-checkout-button");
    toCheckoutButton.addEventListener("click", makeCheckoutPage);
  }
}

function makeCheckoutPage(event) {
  checkoutInfoContainer.innerHTML = "";

  prodDetails.forEach((product) => {
    checkoutInfoContainer.innerHTML += `
    <section>
      <img src="${product.image}" />
      <h2>${product.brand}</h2>
      <h3>${product.brand}</h3>
      <p>${product.size}</p>
      <p>${product.price}</p>
    </section>
    <form>
      <h1>Hello world</h1>
    </form> `;
  });

  checkoutInfoContainer.innerHTML = "<button class='backB-checkout'>Back button</button>" + checkoutInfoContainer.innerHTML;

  if (document.querySelector(".backB-checkout")) {
    const backCheckoutButton = document.querySelector(".backB-checkout");
    backCheckoutButton.addEventListener("click", makeCartHtml);
  }
}

const toCheckoutButton = document.querySelector(".to-checkout-button");

toCheckoutButton.addEventListener("click", makeCheckoutPage);
