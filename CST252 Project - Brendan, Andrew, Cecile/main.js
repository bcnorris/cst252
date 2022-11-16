
//Making the Next Button generate a new random number
let nextButton = document.querySelector(".nextButton");
  console.log(nextButton);

let clickNext = () => {
  document.querySelector(".nextNumber").textContent = Math.floor(Math.random() * 100);
}

nextButton.addEventListener('click', clickNext);



//For loop filling bingo sqaures 1-25 (0-24)
for (let i = 0; i < 25; i++) {
    document.getElementById("square" + i).innerHTML = Math.floor(Math.random() * 100);
  }
  //setting sqaure 13 (12) as a free space
  document.getElementById("square" + 12).innerHTML = "Free";


  let state = 'empty';

  let selectedSquare = '';
  
  let clickSquare = (e) => {

		state = 'selected';

		let winSquare = e.currentTarget;

    winSquare.classList.add("markedSquare");

  };

  let winSquares = document.querySelectorAll(".square");
  winSquares.forEach(winSquare => {
		winSquare.addEventListener('click', clickSquare);
	});
