
var numberOfDrumButtons = document.querySelectorAll(".music").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".music")[i].addEventListener("click", function() {

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
    case "t":
      var tom1 = new Audio("sounds/trumpet.mp3");
      tom1.play();
      break;

    case "v":
      var tom2 = new Audio("sounds/violin.mp3");
      tom2.play();
      break;

    case "p":
      var tom3 = new Audio('sounds/piano.mp3');
      tom3.play();
      break;

    case "g":
      var tom4 = new Audio('sounds/guitar.mp3');
      tom4.play();
      break;

    case "d":
      var snare = new Audio('sounds/drum.mp3');
      snare.play();
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
