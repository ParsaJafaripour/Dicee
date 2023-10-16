function setDiceImage (imgNum, randomNum) {
    document.querySelector(".img" + imgNum).setAttribute("src", "./images/dice" + randomNum + ".png");
}

var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomNum2 = Math.floor(Math.random() * 6 + 1);

setDiceImage(1, randomNum1);
setDiceImage(2, randomNum2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! Play Again!";
}
