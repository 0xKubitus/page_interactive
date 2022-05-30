//Fonctionnalité 1-bis:
let theFooter = document.getElementsByTagName("footer")[0];
let i = 1

let onFooterClick = function() {
  console.log("clic n°" + i)
  i += 1
};

theFooter.addEventListener('click', onFooterClick);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//Fonctionnalité 2-bis:
let hamburgerMenuButton = document.getElementsByClassName("navbar-toggler")[0];
let theNavbarHeader = document.getElementById("navbarHeader");

let onHamburgerMenuButtonClick = function() {
  theNavbarHeader.classList.toggle("collapse");
};

hamburgerMenuButton.addEventListener('click', onHamburgerMenuButtonClick);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//Fonctionnalité 3:

let firstCard = document.querySelector("div.card")
let firstCardEditBtn = firstCard.querySelector("button.btn-outline-secondary")
console.log(firstCardEditBtn)

//let buttonEditFrom1stCard = document.getElements










//STEP1 : // Find and store the element we want to listen to events on. 


//STEP2 : // Define the function that will respond to the event. 


//STEP3 : // Add the event listener for the element and function.

