
//Select the element that triggers the event (everything with class="box")
let boxes = document.querySelectorAll('.box');
console.log(boxes);

//Create the function that will change something (turn box backgroundColor to Yellow)
let turnYellow = (box) => {
    box.style.backgroundColor = "yellow";
};

//Tell the function to run for all boxes
boxes.forEach(turnYellow);

boxes.forEach(function (i) {
i.addEventListener('click', function() {
    i.style.border = "5px solid black";
})

});
//Make borders when the box is clicked
// let buttonClick = (box) => {
//     boxes.style.border = 
//     console.log(boxes);
// };

// for (i of boxes) {
//     i.addEventListener('click', buttonClick)
// };
// };