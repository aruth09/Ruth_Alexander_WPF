// JavaScript

// Alexander Ruth Wacky Calculator 

var schoolname = prompt("What is the name of your school?");
var yearsncollege = prompt("How many years spent at your school?");
var tuition = prompt("How much does " + schoolname +" charge a year?");
var interestrate = prompt("What is the interest rate on the student loans in decimals?");
var yearstopayoff = prompt("How many years is the loan for?");

var daystopayoff = yearstopayoff * 365;
var totaltuition = tuition * yearsncollege;
var interest = totaltuition * interestrate;
var dailyintrest = interest / 365;
var totalintrest = dailyintrest * daystopayoff;
var totalcost = totaltuition + totalintrest;

alert("Your cost for tuition at " + schoolname + " after " + yearsncollege + " years is $" + totaltuition + ". The interest alone costs $" + totalintrest + ". The total cost of " + schoolname + " after your loans are paid is $" + totalcost + "."  );