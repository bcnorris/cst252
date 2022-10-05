// 1. What element triggers the event? (button)
// 2. What's the actual event? (click, mousing over)
// 3. What happens when the event happens (something shows up)

// 1. itembox div
// 2. click on div
// 3. sidepanel appears


// Selecting element to trigger the event
let button = document.querySelector(".itembox");

// Making the event - add a border and change course description
let buttonPress = () => {
    infopanel.style.display = "block";
    let newBorder = document.querySelector(".itembox");
    newBorder.style.border = "5px solid black";
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 252 Scripting for Multimedia";
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "Here is the description of the course";
   
};


// Creating Event listener to trigger the event when course is clicked
button.addEventListener("mouseover", buttonPress);


//  Selecting elements to trigger the event
let exitButton = document.querySelector("#exitbutton");
let infopanel = document.querySelector("#infopanel");

// Making the event -- element dissapears when the event happens
let exitClick = () => {
    infopanel.style.display = "none";
}

let out = () => {
    newBorder.style.border = "0px";
}


button.addEventListener("mouseout", out);


// Creating event listener to trigger the event (click)
exitButton.addEventListener("click", exitClick, out);



