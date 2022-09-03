let backBtn = document.getElementById("back");
let shoeTitle = document.querySelector("h1");
let shoeDescription = document.querySelector("p");
let shoeImg = document.querySelector("img");

let productsArray = [
  {
    id: 1,
    title: "Sports Shoes",
    price: 53,
    img: "images/1.png",
    dec: "Sports Shoes: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequunturv incidunt molestias?",
  },
  {
    id: 2,
    title: "Women's Shoes",
    price: 81,
    img: "images/2.png",
    dec: "Women's Shoes: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?",
  },
  {
    id: 3,
    title: "Boots",
    price: 34,
    img: "images/3.png",
    dec: "Boots: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?",
  },
];

let locationParams = new URLSearchParams(location.search);
let mainProductId = locationParams.get("id");

let mainProductObj = productsArray.find(function (product) {
  return product.id === +mainProductId;
});
if (mainProductObj) {
  shoeTitle.innerHTML = mainProductObj.title;
  shoeImg.setAttribute("src", mainProductObj.img);
  shoeDescription.innerHTML = mainProductObj.dec;
} else {
  location.href = "http://127.0.0.1:5500/37.Shoe%20Store/";
}
backBtn.addEventListener("click", function () {
  history.back();
});
