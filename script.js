// first dicee code
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll('img')[0].setAttribute("src", randomImages1);

// Seconde dicee code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll('img')[1].setAttribute('src', randomImages2);