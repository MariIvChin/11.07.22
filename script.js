//Fancy Ball

let ballElement = window.document.getElementById("fancy-ball");
ballElement.style.height = "120px";
ballElement.style.width = "120px";
ballElement.style.display = "inline-block";
ballElement.style.backgroundImage =
  "linear-gradient(100deg, green, lightgreen)";
ballElement.style.border = "2px dashed black";
ballElement.style.borderRadius = "50%";

//Info List

let listElement = window.document.getElementById("personal-list");

listElement.innerHTML =
  "<ul><strong>My Info:</strong><li>'first name: Maria'</li><li>'last name: Chin'</li><li>'age: 46'</li></ul>";

listElement.style.fontSize = "20px";
listElement.style.border = "2px inset blue";
listElement.style.borderRadius = "5%";
listElement.style.padding = "10px";

//Danger Color

let bgcolorElement = window.document.getElementById("bg-color");
bgcolorElement.className = "bg-danger h5 pe-5 ps-5 mt-3 mb-5";
bgcolorElement.style.color = "white";

//Car Card

const carCard = {
  title: "car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};

// Method 1
const cardElement = window.document.getElementById("car-card");
cardElement.innerHTML =
  `<div class="card" id="car-card" style="width: 18rem">
      <img src="./tesla-roadster.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Tesla</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">type: ` +
  carCard.title +
  `</li>
        <li class="list-group-item">price: ` +
  carCard.price +
  `</li>
        <li class="list-group-item">hand: ` +
  carCard.hand +
  `</li>
        <li class="list-group-item">km: ` +
  carCard.km +
  `</li>
        <li class="list-group-item">year: ` +
  carCard.year +
  `</li>
      </ul>
      <div class="card-body">
        <a href="https://www.tesla.com/" target="_blank" class="card-link"
          >Tesla's site</a
        >
      </div>
    </div>`;

// Method 2
const cardElement2 = window.document.getElementById("car-card2");

cardElement2.children[0].src = "http://127.0.0.1:5500/tesla-roadster.jpg";

cardElement2.children[1].childNodes[1].textContent = "Tesla";

cardElement2.children[2].children[0].textContent = "title: " + carCard.title;
cardElement2.children[2].children[1].textContent = "price: " + carCard.price;
cardElement2.children[2].children[2].textContent = "hand: " + carCard.hand;
cardElement2.children[2].children[3].textContent = "km: " + carCard.km;
cardElement2.children[2].children[4].textContent = "year: " + carCard.year;

cardElement2.children[3].childNodes[1].href = "https://www.tesla.com/";
cardElement2.children[3].childNodes[1].target = "_blank";
cardElement2.children[3].childNodes[1].innerHTML = "Tesla's site";
