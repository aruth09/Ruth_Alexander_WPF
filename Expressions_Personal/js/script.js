// JavaScript 
// Alexander Ruth Expressions Personal

var milespertank = prompt("How many miles do you drive per tank of gas?");
var gallonspertank = prompt("How many gallons of gas fit in your tank?");
var mpgs = milespertank / gallonspertank;
var weekendmiles = 15;
var milestowork = prompt("How far is work from home in miles?");
var pricepergallon = prompt("How much for a gallon of gas?");
var milesperweek = milestowork * 10;
var monthlymiles = milesperweek * 4.5;
var spentongas = monthlymiles / mpgs * pricepergallon;

alert("Your Miles Per Gallon is " + mpgs + ". You will drive an average of " + monthlymiles + " miles and spend $" + spentongas + " on gas a month.");
