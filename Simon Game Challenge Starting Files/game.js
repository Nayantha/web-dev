let gamePattern = [];
let gameStared = false;
let level = 0;
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    if (gameStared) {
        $("h1").text("Level " + level.toString());
    }
    level++;
    try {
        playSound(randomChosenColour);
    } catch (e) {

    }
}
$(".btn").click(function (event){
    let userChosenColour = $(this).attr("id");
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
})
function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
}
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100,);
}
document.addEventListener("keypress" , function (event) {
    if (event.key.toLowerCase() === 'a' && !gameStared) {
        gameStared = true;
        $("h1").text("Level " + level.toString());
        nextSequence();
    }
})
function checkAnswer(currentLevel) {
    
}
