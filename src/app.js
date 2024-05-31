console.log("Generating random card...");

let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
let suitsShape = ["Heart", "Spade", "Flower", "Diamond"];
let suitColor = ["red", "black"];

let randomRank = Math.round(Math.random() * 12);
let randomSuitShape = Math.round(Math.random() * 3);
let randomSuitColor = Math.round(Math.random() * 1);

let randomSuitShapeIconTop = '';
let randomSuitShapeIconBottom = '';

document.getElementById('suitTopLeft').style.color = suitColor[randomSuitColor];

/* suitShape[randomSuitShape]; */

console.log("randomSuitShape", randomSuitShape)

switch (suitsShape[randomSuitShape]) {
  case 'Heart':
		randomSuitShapeIconTop = '<i class="fa-solid fa-heart"></i>';
		randomSuitShapeIconBottom = '<i class="fa-solid fa-heart fa-flip-vertical"></i>';
    break;
  case 'Spade':
		randomSuitShapeIconTop = '<i class="fa-solid fa-spade"></i>'
		randomSuitShapeIconBottom = '<i class="fa-solid fa-spade fa-flip-vertical"></i>'
    break;    
  case 'Flower':
		randomSuitShapeIconTop = '<i class="fa-solid fa-club"></i>'
		randomSuitShapeIconBottom = '<i class="fa-solid fa-club fa-flip-vertical"></i>'
    break;
  case 'Diamond':
		randomSuitShapeIconTop = '<i class="fa-solid fa-diamond"></i>';
		randomSuitShapeIconBottom = '<i class="fa-solid fa-diamond fa-flip-vertical"></i>';
    break;
}

console.log("randomSuitShapeIconTop", randomSuitShapeIconTop);
console.log("randomSuitShapeIconBottom", randomSuitShapeIconBottom)

document.getElementById('suitTopLeft').innerHTML = randomSuitShapeIconTop;

document.getElementById('rank').innerHTML = ranks[randomRank];

document.getElementById('suitBottomRight').style.color = suitColor[randomSuitColor];
document.getElementById('suitBottomRight').innerHTML = randomSuitShapeIconBottom;
