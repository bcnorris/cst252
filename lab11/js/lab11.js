
//Select the element that triggers the event (everything with class="box")
let boxes = document.querySelectorAll('.box');
console.log(boxes);

//Create the function that will change something (turn box backgroundColor to Yellow)
let turnYellow = (box) => {
    box.style.backgroundColor = "yellow";
};

//Tell the function to run for all boxes
boxes.forEach(turnYellow);

//Set a function to style each box with a border when clicked. (i) is the parameter that targets an individual box 
boxes.forEach(function (i) {
i.addEventListener('click', function() {
    i.style.border = "5px solid black";
})

});
