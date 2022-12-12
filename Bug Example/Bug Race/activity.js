document.addEventListener("DOMContentLoaded", () => {

	//keep track of the red & blue bug's score
	let scoreKeeper = {
		red: 0,
		blue: 0
	};


	let bugs = document.querySelectorAll('.bugFriend');


	let bugClick = (e) => {
		//DATA: Keep track of the score for the bug you clicked on
		let clickedBug = e.currentTarget;
		//bugColor will either be 'red' or 'blue'
		let bugColor = clickedBug.dataset.bugcolor;

		//add one to the score for this bug
		scoreKeeper[bugColor] = scoreKeeper[bugColor] + 1;	

		//VIEW: Advance the bug forward a little
		clickedBug.style.bottom = (scoreKeeper[bugColor] * 100) + 'px';


		checkWinner(); 
	};


	bugs.forEach((bug) => {
		bug.addEventListener('click', bugClick);
	});

	function checkWinner() {
	let winnerText = document.querySelector('#winnerText');
	if (scoreKeeper.red === 5) {
		winnerText.textContent = "Red Wins!";
	}
	else if (scoreKeeper.blue == 5) {
		winnerText.textContent = "Blue wins!";
	}
	

}

});

