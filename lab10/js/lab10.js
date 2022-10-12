// 1. What element triggers the event? (button)
// 2. What's the actual event? (click, mousing over)
// 3. What happens when the event happens (something shows up)

// 1. itembox div
// 2. click on div
// 3. sidepanel appears


// Selecting element to trigger the event
let button = document.querySelector(".itembox");
let button2 = document.querySelector(".itembox2");
var image = document.querySelector(".courseimage");

// Making the event - add a border and change course description
let buttonPress = () => {
    infopanel.style.display = "block";
    button.style.border = "5px solid black";
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.textContent = "CST 252 Scripting for Multimedia";
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.textContent = "The class has a pretty simple format: Each day we'll have a lecture during which you'll follow along on your machine, followed by a lab about the lecture. The lab will give you working experience with the concepts we're covering. Scattered through the course we'll have quizzes and a midterm project. Near the end of term, you'll be working primarily on a final project with your team.";
    //updates image
    image.src = "images/cst252.jpg";
    console.log(image);
};

//anon function to update style
//all updated information for info panel when button is clicked / pressed
let buttonPress2 = () => {
    //infopanel is displayed
    infopanel.style.display = "block";
    //updates tite
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 351 Web Design";
    //updates course description
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "A course about learning web development";
    //updates image
    image.src = "images/cst351.jpg";
};


// Creating Event listener to trigger the event when course is clicked
button.addEventListener("click", buttonPress);
button2.addEventListener("click", buttonPress2);


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

//displays thin border when mouse goes "out" / away from button 2
let out2 = () => {
    button2.style.border = "thin grey solid";
}
//displays thin border when mouse goes "in" / towards button 2
let inside2 = () => {
    button2.style.border = "5px solid black";
}

button.addEventListener("mouseout", out);
button.addEventListener("mouseover", inside);
button2.addEventListener("mouseout", out2);
button2.addEventListener("mouseover", inside2);

// Creating event listener to trigger the event (click)
exitButton.addEventListener("click", exitClick);



