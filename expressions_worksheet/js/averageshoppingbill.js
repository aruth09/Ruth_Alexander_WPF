// Javascript
// Alexander Ruth July 17th 2013 Expressions Worksheet Average Shopping bill
var weeklyspent = [35,40,34,34,60]// storing 5 weeks of grocery totals in one array
var totalspent = weeklyspent[0] + weeklyspent[1] + weeklyspent[2] + weeklyspent[3] + weeklyspent[4];// adding 5 weeks of groceries pulled form weeklyspent array storing in totalspent variable
var averagespent = totalspent / 5; //calculating the average of the five weeks of groceries soring in variable averagespent

alert("You have spent a total of $" + totalspent + " on groceries over 5 weeks. That is an average of $" + averagespent + " per week.")// showing the total spent and average spent in a pop up data pulled from variables 