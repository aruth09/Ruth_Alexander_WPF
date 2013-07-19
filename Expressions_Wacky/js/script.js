// JavaScript

// Alexander Ruth Wacky Calculator 

var schoolname = prompt("What is the name of your school?"); // gathering the users school name storing in variable
var yearsncollege = prompt("How many years spent at your school?"); // gatering the time spent in school storing in variable
var tuition = prompt("How much does " + schoolname +" charge a year?"); // gathering the students tuition cost, showing school name to make personable, storing in variable
var interestrate = prompt("What is the interest rate on the student loans in decimals?"); // gathering intrest rate on loans, storing in variable
var yearstopayoff = prompt("How many years is the loan for?"); // gathering the years to pay debt off storing in variable

var daystopayoff = yearstopayoff * 365; // converting years to days soring in variable
var totaltuition = tuition * yearsncollege; // calculating the total tuition, storing in variable
var interest = totaltuition * interestrate; // calculating the intrest before devideing by days storing in variable
var dailyintrest = interest / 365; // calculating the intrest per day stroring in variable
var totalintrest = dailyintrest * daystopayoff; // calulating the total intrest cost storing in variable
var totalcost = totaltuition + totalintrest; // calulating the toatal cost of the school tuition plus intrest storing in variable

alert("Your cost for tuition at " + schoolname + " after " + yearsncollege + " years is $" + totaltuition + ". The interest alone costs $" + totalintrest + ". The total cost of " + schoolname + " after your loans are paid is $" + totalcost + "."  ); // printing the calculations of total tuition, total intrest, and total cost of the school in a pop up alert.