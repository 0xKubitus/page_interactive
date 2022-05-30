//STEP1 : // Find and store the element we want to listen to events on. 
let theFooter = document.getElementsByTagName("footer")[0];
let i = 1

//STEP2 : // Define the function that will respond to the event.  
var onFooterClick = function() {
  console.log("clic n°" + i)
  i += 1
};

//STEP3 : // Add the event listener for the element and function.
theFooter.addEventListener('click', onFooterClick);

















//STEP1 : // Find and store the element we want to listen to events on. 


//STEP2 : // Define the function that will respond to the event. 

//STEP3 : // Add the event listener for the element and function.

