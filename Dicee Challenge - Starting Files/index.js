const playerOneValue  = Math.floor(Math.random() * 6);
const playerTwoValue  =Math.floor(Math.random() * 6);
const images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];
document.querySelector(".img1").setAttribute("src", images[playerOneValue]);
document.querySelector(".img2").setAttribute("src", images[playerTwoValue]);
let h1Text = "";
if (playerOneValue > playerTwoValue) {
    h1Text = "Player One Wins";
} else if (playerOneValue < playerTwoValue) {
    h1Text = "Player Two Wins";
} else {
    h1Text = "It's a tie";
}
document.querySelector(".container h1").textContent = h1Text;
