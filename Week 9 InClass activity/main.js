//What element causes the event?
let inputBox = document.querySelector('#inputBox');
//What is the event
//what should happen
let checkName = (event) => {
  console.log(event.currentTarget.value);
  let userInput = event.currentTarget.value;
  if (userInput === "Brendan") {
      console.log("That's my name!");
    } else {
      console.log("Hey, that's not my name");
  }

}

inputBox.addEventListener('input', checkName);