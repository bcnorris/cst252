console.log('it shows results as you type')


//what happens (print something out)

//decide which event ("click")
let button = document.querySelector('#btn');

// what is the event happening to ("button")
let handler = (e) => {
  console.log('you clicked!')
  console.log(e);
  //putting one of the elements in the page into an object so i can change it
  let header = document.querySelector('h1');
  //changin header font color to black
  header.style.color = 'black';
};

button.addEventListener("click", handler)
