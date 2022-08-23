let allProducts = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];

let shopItemsContainer = document.querySelector(".shop-items");
let basketProductsContainer = document.querySelector(".cart-items");
let userBasket = [];

allProducts.forEach(function (product) {
  let productContainer = document.createElement("div");

  productContainer.classList.add("shop-item");

  let productTitleSpan = document.createElement("span");
  productTitleSpan.classList.add("shop-item-title");
  productTitleSpan.innerHTML = product.title;

  let productImage = document.createElement("img");
  productImage.classList.add("shop-item-image");
  productImage.setAttribute("src", product.img);

  let productDetailsContainer = document.createElement("div");
  productDetailsContainer.classList.add("shop-item-details");

  let productPriceSpan = document.createElement("span");
  productPriceSpan.classList.add("shop-item-price");
  productPriceSpan.innerHTML = product.price;

  let productAddButton = document.createElement("button");
  productAddButton.className = "btn btn-primary shop-item-button";
  productAddButton.innerHTML = "ADD TO CART";
  productAddButton.addEventListener("click", function () {
    AddProductToBasketArray(product.id);
  });

  productDetailsContainer.append(productPriceSpan, productAddButton);

  productContainer.append(
    productTitleSpan,
    productImage,
    productDetailsContainer
  );

  shopItemsContainer.append(productContainer);
});

function AddProductToBasketArray(pruductId) {
  let mainProduct = allProducts.find(function (product) {
    return product.id === pruductId;
  });
  userBasket.push(mainProduct);
  basketProductGenerator(userBasket);
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
    basketProductInput.value = "1";
    basketProductInput.setAttribute("type", "number");

    let basketProductRemoveBtn = document.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "REMOVE";

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

    console.log(basketProductContainer);
  });
}
