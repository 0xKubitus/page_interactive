//Fonctionnalité 1-bis:
let theFooter = document.getElementsByTagName("footer")[0];
let i = 1;

let onFooterClick = function() {
  console.log("clic n°" + i);
  i += 1;
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

let firstCard = document.querySelector("div.card");
let firstCardEditBtn = firstCard.querySelector("button.btn-outline-secondary");

let onFirstCardEditBtnClick = function() {
  firstCard.style.color = "red";
};

firstCardEditBtn.addEventListener('click', onFirstCardEditBtnClick);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//Fonctionnalité 4:

let secondCard = document.getElementsByClassName("card")[1];
let secondCardEditBtn = secondCard.querySelector("button.btn-outline-secondary");
let secondCardEditBtnStatus = false;

let onSecondCardEditBtnClick = function() {
  if (secondCardEditBtnStatus == false) {
    secondCard.style.color = "green";
    secondCardEditBtnStatus = true;
  }
  else if (secondCardEditBtnStatus == true) {
    secondCard.style.color = "black";
    secondCardEditBtnStatus = false;
  }
};

secondCardEditBtn.addEventListener('click', onSecondCardEditBtnClick);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//Fonctionnalité 5:

let bootstrapCDNLink = document.getElementsByTagName('link')[0];
console.log("voici le 1er 'link' pour vérifier :" + bootstrapCDNLink)
let navbar = document.querySelector(".navbar"); // J'AI PAS BIEN COMPRIS PK, MAIS IL FAUT UN POINT ! (ON APPELLE LA CLASSE CSS ET PAS LA CLASSE HTML ? JE CROYAIS QUE CETAIT LA MEME CHOSE ?)

function switchBootstrapOnDblClick() {
  if (bootstrapCDNLink.disabled) {
    bootstrapCDNLink.disabled = false
  } else {
    bootstrapCDNLink.disabled =true
  }
}

navbar.addEventListener('dblclick',switchBootstrapOnDblClick);

// POUR RETABLIR BOOTSTRAP, IL FAUT DOUBLE CLIQUER SUR LE MINUSCULE BOUTON GRIS (À DROITE DE "JS & EVENTS")

// .innerHTML
// <title>Exercice sur les events JS</title>

// ajouter bruitage "oh noes!"





//STEP1 : // Find and store the element we want to listen to events on. 


//STEP2 : // Define the function that will respond to the event. 


//STEP3 : // Add the event listener for the element and function.


