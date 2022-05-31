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
  } else { // POUR RETABLIR BOOTSTRAP, IL FAUT DOUBLE CLIQUER SUR LE MINUSCULE BOUTON GRIS (À DROITE DE "JS & EVENTS")
    bootstrapCDNLink.disabled =true
  }
}

navbar.addEventListener('dblclick',switchBootstrapOnDblClick);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Fonctionnalité 6 :
let viewButtons = document.querySelectorAll('div.album div.col-md-4 div.btn-group .btn-success')

viewButtons.forEach(item => {item.addEventListener('mouseenter', event => {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement // je sais pas s'il existe une methode qui permet de choper le 'parentElement' de chaque 'viewButton' (un genre de .all)
  card.querySelector('.card-text').classList.toggle('collapse');
  if (card.querySelector('.card-img-top').style.width != "20%") {
    card.querySelector('.card-img-top').style.width = "20%";
  } else {
    card.querySelector('.card-img-top').style.width = "100%"
  }
})});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Fonctionnalité 7 :
let TopRightBtn = document.querySelector('a.btn-secondary');

function rotate() {
  let firstCard = document.querySelector('div.album div.row').firstElementChild;
  let lastCard = document.querySelector('div.album div.row').lastElementChild;
  lastCard.remove();
  firstCard.parentNode.insertBefore(lastCard,firstCard);
}

TopRightBtn.addEventListener('click',rotate);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Fonctionnalité 8 :
var TopLeftBtn = document.querySelector('.btn-primary');
var parent = document.querySelector('.album .row');

TopLeftBtn.removeAttribute('href');

TopLeftBtn.addEventListener('click', function(e){
    e.preventDefault();
    parent.insertBefore(parent.firstElementChild, parent.lastElementChild.nextSibling);
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Fonctionnalité 9 :
