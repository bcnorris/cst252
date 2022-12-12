//button to Roll a bingo number, the player will use this to check against their card's numbers
let nextButton = document.querySelector(".nextButton"); //this selects the "Roll A Number!" button's class 

let clickSound = new Audio("sounds/Sound effect click button.mp3"); //establishes the click sound effect (referenced previous WebDev Projects)
let winSound = new Audio("sounds/Audience Clapping - Sound Effect.mp3"); //establishes the applause sound effect (referenced previous WebDev Projects)
winSound.volume = 0.5; //lowers the applause volume to 50%
let backgroundChange = document.querySelector('body'); //enables the backround image to change

//displays a random number between 1-100
let clickNext = () => {
  document.querySelector(".nextNumber").textContent = Math.floor(Math.random() * 75); //this generates a number from 1-75
  document.querySelector(".nextNumber").style.display = "inline"; //this changes the number button to show when the user clicks "Roll A Number!"
  document.querySelector('audio').src = clickSound.play(); //plays a click sound effect
}

//When clicking the roll a number button, the clickNext function is triggered
nextButton.addEventListener('click', clickNext);


//For loop filling bingo sqaures 1-25 (0-24)
for (let i = 0; i < 25; i++) {
  document.getElementById("square" + i).innerHTML = Math.floor(Math.random() * 75);
}
//setting sqaure 13 (12) as a free space instead of a randomly generated number
document.getElementById("square" + 12).innerHTML = "Free";

let state = 'empty'; //default square is space is "empty"


//keeping track of score
let scorekeeper = {
  colB: 0,
  colI: 0,
  colN: 0,
  colG: 0,
  colO: 0,
  row1: 0,
  row2: 0,
  row3: 0,
  row4: 0,
  row5: 0
};

//function for marking a square
let clickSquare = (e) => {
  //changes square's state from empty to selected
  state = 'selected';

  //finds the selected square
  let winSquare = e.currentTarget;

 
//creates a variable to locate each square on the card
  let clickedSquareCol = winSquare.dataset.column;
  let clickedSquareRow = winSquare.dataset.row;
  console.log("Your number was in " + clickedSquareCol);
  console.log("Your number was in " + clickedSquareRow);

//updates the score total
  scorekeeper[clickedSquareCol] = scorekeeper[clickedSquareCol] + 1;
  scorekeeper[clickedSquareRow] = scorekeeper[clickedSquareRow] + 1;
  //converts the marked square's style to change its color to purple
  winSquare.classList.toggle("markedSquare");
  console.log(scorekeeper);

};

//forEach loop applies the clickSquare function to be present for each square on the card
let winSquares = document.querySelectorAll(".square");
winSquares.forEach(winSquare => {
  winSquare.addEventListener('click', clickSquare);
});

//Checks for a win and triggers win animation
function checkWinner() {
  if (scorekeeper.colB === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); //
  }
  if (scorekeeper.colI === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  }
  if (scorekeeper.colN === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  }
  if (scorekeeper.colG === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  } if (scorekeeper.colO === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  }
  if (scorekeeper.row1 === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  } 
  if (scorekeeper.row2 === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  }
  if (scorekeeper.row3 === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  }
  if (scorekeeper.row4 === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  } if (scorekeeper.row5 === 5) {
    document.querySelector('audio').src = winSound.play(); //applause SFX
    backgroundChange.classList.add("replacedBackgroundImage"); // changes bg image https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
  
    
  }
}

//event listener that is triggered when the Bingo! button is clicked
document.querySelector('.bingoButton').addEventListener('click', checkWinner);

