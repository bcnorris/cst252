let currentYear = 2022;


//you start out owing nothing
let totalBalance = 0;

//it's an array of objects
var books = [
	{ title: 'Tale of Two Cities', due: 2020, returned: null },
	{ title: 'Les Miserables', due: 2023, returned: null },
	{ title: 'A Bear Called Paddington', due: 2021, returned: null }	
]


// BOOK 0
let amountOwedForThisBook = 0;
books[0].returned = currentYear;
//if due before
if (books[0].due < currentYear) { 
	amountOwedForThisBook = 10;
}
totalBalance = totalBalance + amountOwedForThisBook;

console.log("You returned " + books[0].title);

console.log("Now you owe: " + totalBalance);

// BOOK 1
amountOwedForThisBook = 0;
books[1].returned = currentYear;
//if due before
if (books[1].due < currentYear) { 
	amountOwedForThisBook = 10;
}
totalBalance = totalBalance + amountOwedForThisBook;

console.log("You returned " + books[1].title);

console.log("Now you owe: " + totalBalance);


// BOOK 2
amountOwedForThisBook = 0;
books[2].returned = currentYear;
//if due before
if (books[2].due < currentYear) { 
	amountOwedForThisBook = 10;
}
totalBalance = totalBalance + amountOwedForThisBook;

console.log("You returned " + books[2].title);

console.log("Now you owe: " + totalBalance);


console.log("In total you owe: " + totalBalance);




