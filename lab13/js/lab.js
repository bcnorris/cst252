//1. Changing the box color to orange
//selecting the box
let box = document.querySelector(".box");
    console.log(box);

//change box color property
let boxColor = () => {
    box.style.backgroundColor = "orange";
}

//Change the background color back to green when it's orange
// let boxReturn = () => {
//     box.style.backgroundColor = "green";
// }

//Change box color when the box is clicked
box.addEventListener('click', boxColor);
// box.addEventListener('click', boxReturn);



//selecting the text to hover
let textHover = document.querySelector('.textHover');
    console.log(textHover);

//change the font-size property
let hoverEffect = () => {
    textHover.style.fontSize = "larger";

}
//Making the hover effect reverse when the mouse is not hovered over the text
let hoverOut = () => {
    textHover.style.fontSize = "medium";
}

//enable the hover effect when the cursor hovers over the text
textHover.addEventListener('mouseover', hoverEffect);
textHover.addEventListener('mouseout', hoverOut);