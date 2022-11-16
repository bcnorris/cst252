document.addEventListener("DOMContentLoaded", () => {

	//Use this to keep track of the selected plan!
	let selectedPlan = "";
	let selectedPlanPrice = "";

	/* EVENT HANDLER 1 - CLICKING ON THE PAYMENT PLANS */
	//Each payment plan button needs an event handler so that something can 
	//happen when we click on it
	let clickOnPaymentPlan = (e) => {		

		//Data - we want to keep track of which plan the user selected
		selectedPlan = e.currentTarget.dataset.name;
		selectedPlanPrice = e.currentTarget.dataset.price;


		//View - we want to clear out all the highlighted borders and 
		clearBorders();
		// put a border around the one we clicked on		
		e.currentTarget.classList.add('selectedPlan');
	};

	//Since we're putting the same event handler on each button, we use a loop
	let paymentPlanButtons = document.querySelectorAll('.paymentPlan');
	paymentPlanButtons.forEach((button) => {
		button.addEventListener('click', clickOnPaymentPlan);	
	});


	/* EVENT HANDLER 2 - CLICKING ON THE  SUBMIT BUTTON*/
	//The submit button should show the message based on which plan the user selected
	let submitButton = document.querySelector('#submitButton');
	
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

	submitButton.addEventListener('click', clickOnSubmitButton);



});


function clearBorders() {
	let paymentPlanButtons = document.querySelectorAll('.paymentPlan');
	paymentPlanButtons.forEach((button) => {
		button.classList.remove('selectedPlan');
	})
}