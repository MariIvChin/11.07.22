//Fancy Ball

console.dir(window.document.getElementById("fancy-ball"));
let ballElement = window.document.getElementById("fancy-ball");
console.dir(ballElement);
ballElement.style.height = "120px";
ballElement.style.width = "120px";
ballElement.style.display = "inline-block";
ballElement.style.backgroundImage =
  "linear-gradient(100deg, green, lightgreen)";
ballElement.style.border = "2px dashed black";
ballElement.style.borderRadius = "50%";

//List

console.dir(window.document.getElementById("personal-list"));
let listElement = window.document.getElementById("personal-list");
console.dir(listElement);

listElement.innerHTML =
  "<ul><strong>My Info:</strong><li>'first name: Maria'</li><li>'last name: Chin'</li><li>'age: 46'</li></ul>";

listElement.style.fontSize = "20px";
listElement.style.border = "2px inset blue";
listElement.style.borderRadius = "5%";
listElement.style.padding = "10px";

//Danger Color

console.dir(window.document.getElementById("bg-color"));
let bgcolorElement = window.document.getElementById("bg-color");
console.dir(bgcolorElement);
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

const cardElement = window.document.getElementById("car-card");
cardElement.innerHTML =
  `<div class="card" id="car-card" style="width: 18rem">
      <img src="./tesla.jfif.crdownload" class="card-img-top" alt="..." />
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
