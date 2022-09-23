let currentYear = 2022;
let totalBalance = 0;

//it's an array of objects
var books = [
	{ title: 'Tale of Two Cities', due: 2020, returned: null },
	{ title: 'Les Miserables', due: 2023, returned: null },
	{ title: 'A Bear Called Paddington', due: 2021, returned: null }	
]


/* This function marks a book as returned.
   It returns how much you owe ($10.00 if the book is late)
*/
function checkBook(book) {
	let amountOwedForThisBook = 0;
	book.returned = currentYear;
	//if due before
	if (book.due < currentYear) { 
		amountOwedForThisBook = 10;
	}

	console.log("You returned " + book.title);

	totalBalance += amountOwedForThisBook;
	console.log("Now you owe: " + totalBalance);
}


checkBook(books[0]);
checkBook(books[1]);
checkBook(books[2]);

console.log("In total you owe: " + totalBalance);




