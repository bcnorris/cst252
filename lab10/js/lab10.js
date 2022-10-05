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
    button.style.border = "5px solid black";
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.textContent = "CST 252 Scripting for Multimedia";
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.textContent = "The class has a pretty simple format: Each day we'll have a lecture during which you'll follow along on your machine, followed by a lab about the lecture. The lab will give you working experience with the concepts we're covering. Scattered through the course we'll have quizzes and a midterm project. Near the end of term, you'll be working primarily on a final project with your team.";
    
};


// Creating Event listener to trigger the event when course is clicked
button.addEventListener("click", buttonPress);


//  Selecting elements to trigger the event
let exitButton = document.querySelector("#exitbutton");
let infopanel = document.querySelector("#infopanel");

// Making the event -- element dissapears when the event happens
let exitClick = () => {
    infopanel.style.display = "none";
}

let out = () => {
    button.style.border = "thin solid grey";
}

let inside = () => {
    button.style.border = "5px solid black";
}


button.addEventListener("mouseout", out);
button.addEventListener("mouseover", inside);


// Creating event listener to trigger the event (click)
exitButton.addEventListener("click", exitClick);



