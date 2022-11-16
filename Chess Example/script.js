document.addEventListener('DOMContentLoaded', () => {
	let state = 'start';

	let selectedPiece = '';
	let selectedimageurl = ''

	let piecesOnBoard = [];


	let clickPiece = (e) => {

		state = 'selected';

		let piece = e.currentTarget;

		//DATA
		//remember the type of piece and the image
		selectedPiece = piece.dataset.piecetype;
		selectedimageurl = piece.dataset.imageurl;

		//VIEW
		//clear out the borders
		//put a border on the clicked piece
		clearBorders();
		piece.classList.add('selected');
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

			
			let square = e.currentTarget;
			

			//DATA: Remember where the user put the piece on the board
			//(piece, row column)

			let newPieceOnBoard = { 
				piece: selectedPiece,
				row: square.dataset.row,
				column: square.dataset.column
			}
			piecesOnBoard.push(newPieceOnBoard);

			//VIEW
			//Clear out the borders on the piece box
			//Put the image of the chess piece on the board
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
		//Loop through each of the pieces on the board and print them out
		let printOut = document.querySelector('.message');
		printOut.innerHTML = "";
		piecesOnBoard.forEach((pieceOnBoard) => {
			
			printOut.innerHTML += 
				"There is a " + pieceOnBoard.piece + " at row " + pieceOnBoard.row 
				+ " column " + pieceOnBoard.column + "<br/><br/>";
		});
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



