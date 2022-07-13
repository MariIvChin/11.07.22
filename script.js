//Fancy Ball

console.dir(window.document.getElementById("fancy-ball"));
let ballElement = window.document.getElementById("fancy-ball");
console.dir(ballElement);
ballElement.style.height = "70px";
ballElement.style.width = "70px";
ballElement.style.display = "inline-block";
ballElement.style.backgroundColor = "lightgreen";
ballElement.style.borderStyle = "dotted";
ballElement.style.borderColor = "black";
ballElement.style.borderRadius = "50%";

// var boxElement = document.getElementById("fancy-ball");
// var ctx = ballElement.getContext("2d");

// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

//List
console.dir(window.document.getElementById("personal-list"));
let listElement = window.document.getElementById("personal-list");
console.dir(listElement);

listElement.innerHTML =
  "<ul><li>'first name: Maria'</li><li>'last name: Chin'</li><li>'age: 46'</li></ul>";

//Danger Color
console.dir(window.document.getElementById("bg-color"));
let bgcolorElement = window.document.getElementById("bg-color");
console.dir(bgcolorElement);
bgcolorElement.className = "bg-danger";

//Car Card
let carCard = {
  title: "car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};

// let cardElement = window.document.getElementById("car-card");
// console.dir(cardElement);

// cardElement.getElementsByClassName("card-title").
// console.dir(cardElement.className);
