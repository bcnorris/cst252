document.addEventListener('DOMContentLoaded', () => {
	let state = 'start';

	let selectedBugColor = '';
	let selectedimageurl = ''

	let bugsOnBoard = [];


	let clickbug = (e) => {

		state = 'selected';

		let bug = e.currentTarget;

		//DATA
		//remember the type of bug and the image
		selectedBugColor = bug.dataset.bugcolor;
		selectedimageurl = bug.dataset.imageurl;

		//VIEW
		//clear out the borders
		//put a border on the clicked bug
		clearBorders();
		bug.classList.add('selected');
	};

	let bugs = document.querySelectorAll('.menubug');
	bugs.forEach(bug => {
		bug.addEventListener('click', clickbug);
	});


	let clickSquare = (e) => {	
		if (state === 'selected') {
			//If you've selected a bug, clicking on a square
			//moves you back to the start state (where you can
			//click on a different bug)
			state = 'start';

			
			let square = e.currentTarget;
			

			//DATA: Remember where the user put the bug on the board
			//(bug, row column)

			let newbugOnBoard = { 
				bugColor: selectedBugColor,
				spaceColor: square.dataset.color
			}
			bugsOnBoard.push(newbugOnBoard);

			//VIEW
			//Clear out the borders on the bug box
			//Put the image of the chess bug on the board
			clearBorders();
			square.style.backgroundImage = 
				"url('" + selectedimageurl + "')";
		}

	};
	let squares = document.querySelectorAll('.square');
	squares.forEach ((square) => {
		square.addEventListener	('click', clickSquare);
	});



	let clickPrint = (e) => {

		console.log(bugsOnBoard);
	
		let redBugsOnRedSpaces = 
			bugsOnBoard.filter(bug => bug.bugColor ==="red" && bug.spaceColor ==="red");

		let redBugsOnBlueSpaces = 
			bugsOnBoard.filter(bug => bug.bugColor ==="red" && bug.spaceColor ==="blue");

		let blueBugsOnBlueSpaces = 
			bugsOnBoard.filter(bug => bug.bugColor ==="blue" && bug.spaceColor ==="blue");


		let blueBugsOnRedSpaces = 
			bugsOnBoard.filter(bug => bug.bugColor ==="blue" && bug.spaceColor ==="red");

		let redScore = redBugsOnRedSpaces.length - redBugsOnBlueSpaces.length;
		let blueScore = blueBugsOnBlueSpaces.length - blueBugsOnRedSpaces.length;

		let printOut = document.querySelector('.message');
		printOut.textContent = 
			"red has " + redScore + " points and blue has " + blueScore + " points";

	};
	let printButton = document.querySelector('#printButton');
	printButton.addEventListener('click', clickPrint);

	

	

});

function clearBorders() {
	let bugs = document.querySelectorAll('.menubug');
	bugs.forEach((bug) => {
		bug.classList.remove('selected');
	});
}



