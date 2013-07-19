// JavaScript

// Alexander Ruth Wacky Calculator 

var schoolname = prompt("What is the name of your school?");
var yearsncollege = prompt("How many years spent at your school?");
var tuition = prompt("How much does" + schoolname +" charge a year?");
var interestrate = prompt("What is the interest rate on the student loans?");

var monthsincollege = yearsncollege * 12;
var totaltuition = tuition * yearsncollege;
var totalintrest = totaltuition * interestrate * monthsincollege;
var totalcost = totaltuition + totalintrest;

alert("Your cost for tuition at" + schoolname + " after " + yearsncollege + " years is $" + totaltuition + ". The interest alone costs $" + totalintrest + ". The total cost of " + schoolname + " after your loans are paid is $" + totalcost + "."  )