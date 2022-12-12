document.addEventListener('DOMContentLoaded', () => {
	
	//DATA 
	//We're remembering:
	// - which state we're in
	// - which piece the user clicked on and its image
	// - which pieces are currently on the board
	let state = 'start';

	let selectedPiece = '';
	let selectedimageurl = ''

	let piecesOnBoard = [];


	let clickPiece = (e) => {

		state = 'selected';

		let piece = e.currentTarget;

		//DATA
		//remember the type of piece and the image
		
		//VIEW
		//clear out the borders
		//put a border on the clicked piece
		
	};

	let pieces = document.querySelectorAll('.menuPiece');
	pieces.forEach(piece => {
		piece.addEventListener('click', clickPiece);
	});


	let clickSquare = (e) => {	
		if (state === 'selected') {
			//If you've selected a piece, clicking on a square
			//moves you back to the start state (where you can
			//click on a different piece)
			state = 'start';


			//DATA: Remember where the user put the piece on the board
			//(piece, row column)

			
			//VIEW
			//Clear out the borders on the piece box
			//Put the image of the chess piece on the board
			
		}

	};
	let squares = document.querySelectorAll('.square');
	squares.forEach ((square) => {
		square.addEventListener	('click', clickSquare);
	});



	let clickPrint = (e) => {
		//Loop through each of the pieces on the board and print them out
	
	};
	let printButton = document.querySelector('#printButton');
	printButton.addEventListener('click', clickPrint);

	

	

});

function clearBorders() {
	let pieces = document.querySelectorAll('.menuPiece');
	pieces.forEach((piece) => {
		piece.classList.remove('selected');
	});
}



