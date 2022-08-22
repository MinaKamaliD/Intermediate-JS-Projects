let allProducts = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];

let shopItemsContainer = document.querySelector(".shop-items");

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

  productDetailsContainer.append(productPriceSpan, productAddButton);

  productContainer.append(
    productTitleSpan,
    productImage,
    productDetailsContainer
  );

  shopItemsContainer.append(productContainer);
});
