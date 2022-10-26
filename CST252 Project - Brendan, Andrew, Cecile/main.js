//For loop filling bingo sqaures 1-25 (0-24)
for (let i = 0; i < 25; i++) {
    document.getElementById("square" + i).innerHTML = Math.floor(Math.random() * 100);
  }
  //setting sqaure 13 (12) as a free space
  document.getElementById("square" + 12).innerHTML = "Free";
  
  //anon function to change bg color when a space is selected by user
  let squareFill = () => {
    document.querySelector('#square0').style.backgroundColor = "green";
    document.querySelector('#square0').style.color = "white";
  }
  //listner for on click of square 0 
  document.querySelector('#square0').addEventListener("click", squareFill);
  //anon function to change bg color when a space is selected by user
  let squareFill1 = () => {
    document.querySelector('#square1').style.backgroundColor = "green";
    document.querySelector('#square1').style.color = "white";
  }
  //listner for on click of square 1
  document.querySelector('#square1').addEventListener("click", squareFill1);
  //anon function to change bg color when a space is selected by user
  let squareFill2 = () => {
    document.querySelector('#square2').style.backgroundColor = "green";
    document.querySelector('#square2').style.color = "white";
  }
  //listner for on click of square 2 
  document.querySelector('#square2').addEventListener("click", squareFill2);