// Javascript
// Alexander Ruth July 17th 2013 Expressions Worksheet Slice of Pie Part 1

var slices = prompt(How many slices per pizza?);// asking for the amount of pizzas storing in variable slices
var people = prompt(How many people at the party?);// asking for the amount of people at party storing in variable people
var pizzas = prompt(How many pizzas ordered?);// asking for the amount of pizzas ordered storing in variable pizza
var slicesPerPerson = slices * pizzas / people; // asking for slices per pizza and storing it in variable slicesperperson
alert("Each person ate " + slicesPerPerson + " slices of pizza at the party.");// showing the user how many slices a person ate in the form of a pop up data pulled form variables