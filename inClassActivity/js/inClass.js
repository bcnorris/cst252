//Make a variable that has an object in it
//the object is keeping track of 3 properties: name of player, tunic color(green), health(100)

let player = {
    name: "Link",
    color: "green",
    health: 100,
    backpack: ['health potion', 'sword']
};

//Make a function that has 1 parameter called color
//name the function whatever you want
//It should set the color of the tunic to whatever color we pass in

function changeColor(color){
    player.color = color;
}

//call the function
changeColor('purple');

//Player needs a backpack. A backpack is a collection of things represented by words. Here's what could be in the backpack: 'health potion', 'cookies', 'milk', 'sword'

//In the player object, add a property called backpack.
//Make it so that the backpack starts out having a health potion and a sword.
//There should be function that lets us put something in the backpack
//Make a function that has one parameter(item)
//It takes that item and adds it to the backpack

function addItemToBackpack (newItem){
    player.backpack.push(newItem)
}