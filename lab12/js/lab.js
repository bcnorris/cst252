function getRandomInt() {
  return Math.floor(Math.random() * 100);
}


document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;

})