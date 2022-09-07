function flowerFunction() {
	//initialize();
	
	//YOUR CODE GOES RIGHT HERE 
	//The expression below makes flower5 the sum of flower1 and flower3		
	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;

	//The code below selects the last flower (flower5) and gives it a different background color. I made the background magenta
	document.querySelector("#flower5 .center").style.backgroundColor = "magenta";
	
	// Selects flower5 and changes the text within it to be white
	document.querySelector("#flower5 .center").style.color = "white";

	// The code below grabs each "flower" and gives them a top margin of 100px
	document.querySelector(`#flower1`).style.marginTop = "100px";
	document.querySelector(`#flower2`).style.marginTop = "100px";
	document.querySelector(`#flower3`).style.marginTop = "100px";
	document.querySelector(`#flower4`).style.marginTop = "100px";
	document.querySelector(`#flower5`).style.marginTop = "100px";

	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();
		


}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}