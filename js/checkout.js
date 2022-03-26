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

//make cart html page
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

// make checkout page HTML
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
    </section>`;
  });

  checkoutInfoContainer.innerHTML =
    checkoutInfoContainer.innerHTML +
    `<form>
                                            <fieldset>
                                              <legend>Delivery information</legend>
                                              <label for="full-name">Full Name<label>
                                              <input type="text" id="full-name" placeholder="Enter full name">
                                              <label for="email">email-address</label>
                                              <input type="email" id="email" placeholder="enter e-mail address">
                                              <label for="phone-number">Phone number:</label>
                                              <input type="tel" id="phone-number">
                                              <label for="Delivery address">Delivery Address</label>
                                              <input type="text" id="delivery-address" placeholder="Enter delivery address (required)">
                                            </fieldset>
                                          </form> ` +
    "<section><button class='backB-checkout'>Back button</button><button class='to-payment-button'>To payment</button></section>";

  //making var and event to buttons forward and backwards.
  if (document.querySelector(".backB-checkout")) {
    const backCheckoutButton = document.querySelector(".backB-checkout");
    backCheckoutButton.addEventListener("click", makeCartHtml);
  }

  if (document.querySelector(".to-payment-button")) {
    const toPayment = document.querySelector(".to-payment-button");
    toPayment.addEventListener("click", storeInput);
  }
}

const toCheckoutButton = document.querySelector(".to-checkout-button");

toCheckoutButton.addEventListener("click", makeCheckoutPage);

//function to store input values
function storeInput(event) {
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone-number").value;
  const address = document.getElementById("delivery-address").value;

  const storedInputs = { name: name, email: email, phone: phone, address: address };

  localStorage.setItem("customerInfo", JSON.stringify(storedInputs));
}

//function which makes payment html page
function makePaymentHtml() {}
