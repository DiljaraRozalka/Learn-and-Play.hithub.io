
var numberOfDrumButtons = document.querySelectorAll(".farm").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".farm")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "c":
      var tom1 = new Audio("sounds/Cow-moo-sound.mp3");
      tom1.play();
      break;

    case "cu":
      var tom2 = new Audio("sounds/chicken.mp3");
      tom2.play();
      break;

    case "h":
      var tom3 = new Audio('sounds/horse.mp3');
      tom3.play();
      break;

    case "p":
      var tom4 = new Audio('sounds/pigfarm.mp3');
      tom4.play();
      break;

    case "ca":
      var snare = new Audio('sounds/cat.mp3');
      snare.play();
      break;

    case "s":
      var crash = new Audio('sounds/sheep.mp3');
      crash.play();
      break;

    case "dog":
      var kick = new Audio('sounds/dog.mp3');
      kick.play();
      break;

    case "goat":
        var kick = new Audio('sounds/goat.mp3');
        kick.play();
        break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
