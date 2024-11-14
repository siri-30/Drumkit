var totalButtons = document.querySelectorAll("button").length;

for (var i = 0; i < totalButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", btnClick);

    function btnClick() {

        var clickButton = this.innerHTML;

        makeSound(clickButton);

        buttonAnimation(clickButton);

    }


};

document.addEventListener("keypress", keyClick);

function keyClick(event) {

makeSound(event.key);

buttonAnimation(event.key);

};

function makeSound(key) {

switch (key) {
    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "t":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break; 
    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;   
    case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;  
    case "r":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "k":
        var Kick = new Audio("sounds/kick-bass.mp3");
        Kick.play();
        break;
    case "c":
        var cymbal = new Audio("sounds/crash.mp3");
        cymbal.play();
        break;                  

    default: alert("Not Currently Avaiable!");
};
};

function buttonAnimation(prtKey) {

    var activeButton = document.querySelector("." + prtKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
       activeButton.classList.remove("pressed"); 
    }, 10);

}

