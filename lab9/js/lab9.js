document.addEventListener('DOMContentLoaded', () => {

//----First Event-----
//decide which event ("click")
let button = document.querySelector("#btn");

// what is the event happening to ("button")
let handle = () => {
    console.log('you clicked');
    let titleChange = document.querySelector("#title");
    titleChange.style.border = "2px solid black";
    titleChange.style.borderRadius = "20px";
};

//what happens (print something out)
button.addEventListener("click", handle);

//-----Second Event-----

let hoverEvent = document.querySelector("#hover");

let handle2 = () => {
    let colorEffect = document.querySelector("#hover");
    colorEffect.style.color = "red";
    colorEffect.style.backgroundColor = "green";
}

hoverEvent.addEventListener("mouseover", handle2);

});