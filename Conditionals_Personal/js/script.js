// JavaScript 
// Alexander Ruth Conditional Personal

var carmileage = prompt("What is the cars mileage?");
var caryear = prompt("What year is the car?");
var conditionalmileage = 1000000;
var conditionalyear = 2004;
var bonusmileage = 30000;
var bonusyear = 2010;
var buycar = false;
if(carmileage <= conditionalmileage)
	{buycar = true;}
		else{buycar = false;}
if(caryear => conditionalyear)
	{buycar = true;}
		else{buycar = false;}
if(buycar)
	{consel.log ("Go ahead and buy the car. Its gonna be a great car.");}
		else
			{consel.log ("Don't buys the car, its either old or had to many miles. Keep looking.");}
