let allProducts = [
  {
    id: 1,
    title: "Album 1",
    price: 12.93,
    img: "Images/Album 1.png",
    count: 1,
  },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png", count: 1 },
  {
    id: 4,
    title: "Album 4",
    price: 41.98,
    img: "Images/Album 4.png",
    count: 1,
  },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png", count: 1 },
];

let shopItemsContainer = document.querySelector(".shop-items");
let basketProductsContainer = document.querySelector(".cart-items");
let purchaseBtn = document.querySelector(".btn");
let cartTotalPriceElement = document.querySelector(".cart-total-price");
let userBasket = [];

allProducts.forEach(function (product) {
  shopItemsContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="shop-item"><span class="shop-item-title">' +
      product.title +
      '</span><img class="shop-item-image" src="' +
      product.img +
      '"><div class="shop-item-details"><span class="shop-item-price">' +
      product.price +
      '</span><button class="btn btn-primary shop-item-button" onclick="AddProductToBasketArray(' +
      product.id +
      ')">ADD TO CART</button></div></div>'
  );
});

function AddProductToBasketArray(pruductId) {
  let mainProduct = allProducts.find(function (product) {
    return product.id === pruductId;
  });
  userBasket.push(mainProduct);
  basketProductGenerator(userBasket);
  calculateTotalPrice(userBasket);
}

function basketProductGenerator(userBasketArray) {
  basketProductsContainer.innerHTML = "";

  userBasketArray.forEach(function (product) {
    let basketProductContainer = document.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetailsContainer = document.createElement("div");
    basketProductDetailsContainer.className = "cart-item cart-column";

    let basketProductImg = document.createElement("img");
    basketProductImg.setAttribute("src", product.img);
    basketProductImg.setAttribute("width", "100");
    basketProductImg.setAttribute("height", "100");
    basketProductImg.classList.add("cart-item-image");

    let basketProductTitleSpan = document.createElement("span");
    basketProductTitleSpan.classList.add("cart-item-title");
    basketProductTitleSpan.innerHTML = product.title;

    basketProductDetailsContainer.append(
      basketProductImg,
      basketProductTitleSpan
    );

    let basketProductPriceSpan = document.createElement("span");
    basketProductPriceSpan.className = "cart-price cart-column";
    basketProductPriceSpan.innerHTML = product.price;

    let basketProductsInputsContainer = document.createElement("div");
    basketProductsInputsContainer.className = "cart-quantity cart-column";

    let basketProductInput = document.createElement("input");
    basketProductInput.classList.add("cart-quantity-input");
    basketProductInput.value = product.count;
    basketProductInput.setAttribute("type", "number");
    basketProductInput,
      addEventListener("change", function () {
        updateProductCount(product.id, basketProductInput.value);
      });

    let basketProductRemoveBtn = document.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "REMOVE";
    basketProductRemoveBtn.addEventListener("click", function () {
      removeProductFromBasket(product.id);
      calculateTotalPrice(userBasket);
    });

    basketProductsInputsContainer.append(
      basketProductInput,
      basketProductRemoveBtn
    );

    basketProductContainer.append(
      basketProductDetailsContainer,
      basketProductPriceSpan,
      basketProductsInputsContainer
    );
    basketProductsContainer.append(basketProductContainer);
    console.log(basketProductsContainer);
  });
}
function removeProductFromBasket(productId) {
  userBasket = userBasket.filter(function (product) {
    return product.id !== productId;
  });
  basketProductGenerator(userBasket);
  console.log(userBasket);
}

purchaseBtn.addEventListener("click", function () {
  userBasket = [];
  basketProductGenerator(userBasket);
});

function calculateTotalPrice(userBasketArray) {
  let sum = 0;

  userBasketArray.forEach(function (product) {
    sum += product.count * product.price;
  });
  cartTotalPriceElement.innerHTML = sum;
}

function updateProductCount(productId, newCount) {
  userBasket.forEach(function (product) {
    if (product.id === productId) {
      product.count = newCount;
    }
  });
  calculateTotalPrice(userBasket);
}
