



// Step 1. for loop - console logging
// Step 2. outside of for loop - pg 176 mm
	

// Step 1:

// for (var i=0; i<reindeer.length; i++) {
	// console.log(reindeer[i] + " is " +  colors[i])
// }

// Step 2:



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var reindeerColor = [];

var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < reindeer.length; i++) {
    reindeerColor[i] = reindeer[i] + " is " + colors[i];
    console.log("reindeerColor", reindeerColor);
    hohohoElement.innerHTML += "<li>" + reindeerColor[i] + "</li>";
}


//Step by step explanation:

//Set the variable i = an index value of 0; for as long as i is less than the number of items in the array represented by the 
//variable "reindeer", increment by one so that it move son to the next item in the array, represented by the variable "reindeer"

//       for (var i = 0; i < reindeer.length; i++)

//Set the the variable reindeerColor[i] equal to reindeer[whichever item it's at in the list] 
//+ the word "is" + colors[whichever item it's at in the list]

//       reindeerColor[i] = reindeer[i] + " is " + colors[i];
	

//Send the array that was created as a result (again, represented by the variable "reindeerColor") to the console


//       console.log("reindeerColor");


//Go to the document and fetch the element with the ID "coloredReindeer" (which is a div) and replace it with a list 
//in which the inner HTML is the array represented by the variable reindeerColor 


//       hohohoElement.innerHTML += "<li>" + reindeerColor[i] + "</li>";
