// first dicee code
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll('img')[0].setAttribute("src", randomImages1);