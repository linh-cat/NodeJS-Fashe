let items = [];
const products = localStorage.getItem("product");
if (products) {
  const jsonProducts = JSON.parse(products);
  if (jsonProducts.length !== 0) {
    items = jsonProducts;
  }
}
const cart = document.querySelectorAll("#add-to-cart");
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", (e) => {
    let fullpath =
      e.target.parentElement.parentElement.previousElementSibling.src;
    let pos = fullpath.indexOf("images") + 6;

    let partpath = fullpath.slice(pos);
    
    const item = {};
    item.images = `images${partpath}`;

    let name =
      e.target.parentElement.parentElement.parentElement.nextElementSibling
        .children[0].textContent;
    item.name = name.trim();
    let price =
      e.target.parentElement.parentElement.parentElement.nextElementSibling
        .children[1].textContent;
    let finalPrice = price.trim().slice(1);
    item.price = Number(finalPrice);
    items.push(item);
    localStorage.setItem("product", JSON.stringify(items));

    console.log(item);
    // if (condition) {

    // }
    let cartItem = document.createElement("ul");
    cartItem.classList.add("header-cart-wrapitem");

    cartItem.innerHTML = `
        <li class="header-cart-item">
        <div class="header-cart-item-img cart-img-review">
        <img src="${item.images}" alt="IMG" />
        </div>

        <div class="header-cart-item-txt">
        <a href="#" class="header-cart-item-name">
            ${item.name}
        </a>
        <span class="header-cart-item-info">
            $ ${item.price}
        </span>
        </div>
    </li>
    `;
    let cartReview = document.querySelector(".header-cart");
    let cartTotal = document.querySelector(".header-cart-total");
    cartReview.insertBefore(cartItem, cartTotal);
    cartNumber();
    total();
  });
}
function onLoadCartNumber() {
  let productNumbers = localStorage.getItem("number");
  if (productNumbers) {
    document.querySelector(".itemNumber").textContent = productNumbers;
  }
}
function cartNumber() {
  let productNumbers = localStorage.getItem("number");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("number", productNumbers + 1);

    document.querySelector(".itemNumber").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("number", 1);

    document.querySelector(".itemNumber").textContent = 1;
  }
}
function total() {
  const total = [];
  let product = localStorage.getItem("product");
  let products = JSON.parse(product);
  products.forEach((item) => {
    total.push(item.price);
  });
  const totalMoney = total.reduce((total, item) => {
    total += item;
    return total;
  }, 0);
  const finalMoney = totalMoney.toFixed(2);
  document.querySelector(".header-cart-total").textContent =
    "Total: " + finalMoney;
}
function reviewCart() {
  let product = localStorage.getItem("product");
  let products = JSON.parse(product);
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    let cartItem = document.createElement("ul");
    cartItem.classList.add("header-cart-wrapitem");

    cartItem.innerHTML = `
        <li class="header-cart-item">
        <div class="header-cart-item-img cart-img-review">
        <img src="${element.images}" alt="IMG" />
        </div>

        <div class="header-cart-item-txt">
        <a href="#" class="header-cart-item-name">
            ${element.name}
        </a>
        <span class="header-cart-item-info">
            $ ${element.price}
        </span>
        </div>
    </li>
    `;
    let cartReview = document.querySelector(".header-cart");
    let cartTotal = document.querySelector(".header-cart-total");
    cartReview.insertBefore(cartItem, cartTotal);
  }
}
function renderCart() {}
onLoadCartNumber();
reviewCart();
total();
