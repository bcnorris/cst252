document.addEventListener("DOMContentLoaded", () => {
//fix spelling of Loaded

	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox'); //fix quertySelector and add "." to guessingBox


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = (number) => { //passed inputBox into anonFunction using number
		if (+number.currentTarget.value === 6) { //added + to turn 6 into an integer
			let newBox = document.createElement('div'); //creates a div
			newBox.classList.add('box'); //removed the period from class "box"
			newBox.textContent = 'You won!'; //changed text to textContent
			document.body.appendChild(newBox); //appended and updated the newBox to document
			
		}
	}

	inputBox.addEventListener('input', inputHandler); //changed the function to be inputHandler instead of inputBox





});
