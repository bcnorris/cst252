
document.addEventListener("DOMContentLoaded", () => {

	//DATA VARIABLES
	let selectedPlan = "";
	let selectedPlanPrice = "";



	//EVENT HANDLER 1 - Clicking on a payment plan
	let clickOnPaymentPlan = (e) => {		
		
		//DATA
		selectedPlan = "?";
		selectedPlanPrice = "?";

		//VIEW
		//hide all the borders
		//put a border around the selected one (e.currentTarget)
	};

	
	let paymentPlanButtons = document.querySelectorAll('.paymentPlan');
	paymentPlanButtons.forEach((button) => {
		button.addEventListener('click', clickOnPaymentPlan);	
	});


	// EVENT HANDLER 2 - Clicking on the submit button!
	let clickOnSubmitButton = (e) => {
		//Data - nothing

		//View - show the message!
		let message = document.querySelector('#confirmMessage');
		if (selectedPlan === "") {
			message.textContent = "You have not selected a plan yet!"	
		} else {
			message.textContent = "You selected the " + selectedPlan + " plan for " + selectedPlanPrice + " a month!";
		}
		
	}

	let submitButton = document.querySelector('#submitButton');
	submitButton.addEventListener('click', clickOnSubmitButton);



});


function clearBorders() {
	let paymentPlanButtons = document.querySelectorAll('.paymentPlan');
	paymentPlanButtons.forEach((button) => {
		button.classList.remove('selectedPlan');
	})
}