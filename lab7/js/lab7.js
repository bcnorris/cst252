function onLoad() {
//This is where the code goes
    console.log("it worked");
}

//Code from task 2

//The array is declared.
let array = [5, 6, 7, 8];

console.log("My array", array);

// Then the function is created called "math."
let math = (array) => {
    return array * 4;
}

console.log("What is the answer?", math(2));

//Then the function is ran using map
let results = array.map(math);
console.log("What is the product of the math problem?", results);

//A different function is created to subtract 1. Should return [4, 5, 6, 7]
array.map(function(x){
    return x - 1;
});

//Assign the new function to a variable
let newFunction = array.map(function(x){
    return x - 1;
});

//Have the new function show in the console
console.log("What is the difference after subtracting 1?", newFunction);






