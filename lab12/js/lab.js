function getRandomInt() {
  return Math.floor(Math.random() * 100);
}


document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;

})


  //What element causes the event?
  let inputBox = document.querySelector('#inputBox');
  let outputBox = document.querySelector('#results');
  //What is the event
  //what should happen
  let userNum = (event) => {
    console.log(+event.currentTarget.value);
    let userInput = +event.currentTarget.value;
    if (userInput === randomNumber) {
      console.log("You guessed the number!");
      document.querySelector('#results').textContent = "You guessed the number!";
    }
    if (userInput != randomNumber) {
      if (userInput <= randomNumber + 5) {
        console.log("Your number was too high!");
        console.log("The number you guessed wasn't correct. Try again.");
        document.querySelector('#results').textContent = "Your number was way too high!";
      }
      if (userInput <= randomNumber - 5) {
        console.log("Your number was way too low!");
        console.log("The number you guessed wasn't correct. Try again.");
        document.querySelector('#results').textContent = "Your number was way too low!";
      }
    }
  }
  inputBox.addEventListener('input', userNum);


