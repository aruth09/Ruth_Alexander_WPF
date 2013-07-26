// JavaScript 
// Alexander Ruth Expressions Personal

var milespertank = prompt("How many miles do you drive per tank of gas?"); // gathering how many miles are used per tank of gas, storing in variable
var gallonspertank = prompt("How many gallons of gas fit in your tank?"); // gathering how many gallons of gas are in the tank, storing in variable
var mpgs = milespertank / gallonspertank; // calculating miles per gallon and storing it in variable
var milestowork = prompt("How far is work from home in miles?"); // gathering the distance to work from home and storing in variable,
var pricepergallon = prompt("How much for a gallon of gas?"); // gathering the cost per gallon of gas and storing in variable,
var milesperweek = milestowork * 10; // calcualting how much dribing is done in a week. 
var monthlymiles = milesperweek * 4.5; // calculating how many miles are drivin in a month
var spentongas = monthlymiles / mpgs * pricepergallon; // calulating how much is spent on gas in a month

alert("Your Miles Per Gallon is " + mpgs + ". You will drive an average of " + monthlymiles + " miles and spend $" + spentongas + " on gas a month."); // telling the user what there mpgs are, monthly miles drivin and how much they will pay on gas, printing this in an alert pop up
