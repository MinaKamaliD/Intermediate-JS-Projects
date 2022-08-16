let weightRange = document.querySelector("#weight");
let heightRange = document.querySelector("#height");

let weightSpan = document.getElementById("weight-val");
let heightSpan = document.getElementById("height-val");

let result = document.getElementById("result");
let category = document.getElementById("category");

function calculateBmi() {
  weightSpan.innerHTML = weightRange.value + " kg";
  heightSpan.innerHTML = heightRange.value + " cm";

  let bmi = (weightRange.value / Math.pow(heightRange.value / 100, 2)).toFixed(
    1
  );
  result.innerHTML = bmi;

  if (bmi < 18.5) {
    category.innerHTML = "Underweight";
    category.style.color = "blue";
    result.style.color = "blue";
  }
  if (bmi >= 18.5 && bmi < 25) {
    category.innerHTML = "Normal";
    category.style.color = "green";
    result.style.color = "green";
  }
  if (bmi >= 25 && bmi < 30) {
    category.innerHTML = "Overweight";
    category.style.color = "orange";
    result.style.color = "orange";
  }
  if (bmi >= 30) {
    category.innerHTML = "Obese";
    category.style.color = "red";
    result.style.color = "red";
  }
}

weightRange.addEventListener("change", calculateBmi);
heightRange.addEventListener("change", calculateBmi);
