
//PUT YOUR FUNCTIONS UP HERE
function addToWebPage(text)
{
	document.querySelector('#content').innerHTML += text + '<br /><br />'
}


//YOU CAN ADD MORE FUNCTIONS HERE


//END FUNCTIONS SECTION

function formatAndSortNames() {

	let arrayOfNames, splitNames, firstName, lastName, fixedName,
		finalName, combinedString, newArray, combinedFixedString;

	arrayOfNames = ["Kizzmekia Corbett", "Ada Lovelace", "Levar Burton" ];

	//Reminder: Google what "javscript pop" does if you do not remember!
	finalName = arrayOfNames.pop();
	//Reminder: Google what "join" does!
	combinedString = arrayOfNames.join('; ');
	combinedString = combinedString + ' and ' + finalName;

	addToWebPage('Before, the names were: ' + combinedString);


	newArray = [];

	 //This establishes the new function we want repeated using the arrayOfNames as a parameter
	 function fixTheNames(arrayOfNames) {
		//use arrayOfNames as parameter to update the functions changing value for each call
			splitNames = arrayOfNames.split(' ');
			firstName = splitNames[0];
			lastName = splitNames[1];
			fixedName = lastName + ', ' + firstName;
			newArray.push(fixedName);
	
		}
	  //call each string as a fucntions parameter to print
		fixTheNames(arrayOfNames[0]);
		fixTheNames(arrayOfNames[1]);
		fixTheNames(finalName);
	//Remember to Google what "split" does
	
	// splitNames = arrayOfNames[1].split(' ');
	// firstName = splitNames[0];
	// lastName = splitNames[1];
	// fixedName = lastName + ', ' + firstName;
	// newArray.push(fixedName);

	// splitNames = finalName.split(' ');
	// firstName = splitNames[0];
	// lastName = splitNames[1];
	// fixedName = lastName + ', ' + firstName;
	// newArray.push(fixedName);

	newArray.sort();
	finalFixedName = newArray.pop();
	//Reminder: Google what "join" does!
	combinedFixedString = newArray.join('; ');
	combinedFixedString = combinedFixedString + ' and ' + finalFixedName;

	addToWebPage('Afterwards, the names are: ' + combinedFixedString);

}






