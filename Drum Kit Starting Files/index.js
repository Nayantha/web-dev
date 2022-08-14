let buttonArray = document.querySelectorAll(".drum");
let sounds = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
];
let soundDic = {
    "w":"sounds/tom-1.mp3",
    "a":"sounds/tom-2.mp3",
    "s":"sounds/tom-3.mp3",
    "d":"sounds/tom-4.mp3",
    "j":"sounds/snare.mp3",
    "k":"sounds/crash.mp3",
    "l":"sounds/kick-bass.mp3",
};
function makeSound(key) {
    try {
        new Audio(soundDic[key]).play();
    } catch(exception) {
        console.log(exception);
    }
}
for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",function (){
        buttonAnimation(this.innerHTML);
        makeSound(this.innerHTML);
    })
}

document.addEventListener("keypress", function (event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}
