let countries = {
  Iran: [
    "Tehran",
    "Mashhad",
    "Isfahan",
    "Kerman",
    "Tabriz",
    "Rasht",
    "Shiraz",
    "Zahedan",
  ],
  Turkey: [
    "Istanbul",
    "Ankara",
    "Izmir",
    "Bursa",
    "Antalya",
    "Şanlıurfa",
    "Konya",
  ],
  UnitedStates: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
  France: [
    "Paris",
    "Nice",
    "Lyon",
    "Bordeaux",
    "Marseilles",
    "Strasbourg",
    "Lille",
  ],
};

let countrySelect = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");
let cityOption;

function selectCountry() {
  if (countrySelect.value !== "Please Select") {
    let cities = countries[countrySelect.value];
    citySelect.innerHTML = "";

    cities.forEach(function (city) {
      cityOption = document.createElement("option");
      cityOption.value = city;
      cityOption.innerHTML = city;
      citySelect.append(cityOption);
    });
  } else {
    cityOption = document.createElement("option");
    citySelect.innerHTML = "";
    cityOption.innerHTML = "Plesae Select a country first";
    citySelect.append(cityOption);
    console.log(citySelect);
  }
}

countrySelect.addEventListener("change", selectCountry);
