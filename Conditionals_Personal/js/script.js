// JavaScript 
// Alexander Ruth Conditional Personal

var carmileage = prompt("What is the cars mileage?");//This variable will store user entered mileage for the car
var caryear = prompt("What year is the car?");// this variable will store user entered car year
var conditionalmileage = 1000000;// this is the max milage desired for a new car. stored in variable
var conditionalyear = 2004;// this is the minimum year desired for a new car. stored in variable
var bonusmileage = 30000;// this is an amazing mileage will erase the need for the car to be newer. stored in variable
var bonusyear = 2010;// if the car is this new the mileage dose not matter. stored in variable
var buycar = false;// defalt buy car is false stored in variable.
if(carmileage <= conditionalmileage) // if car mileage is less than conditional milage than we should buy the car
	{buycar = true;}
		else{buycar = false;}
if(caryear >= conditionalyear)// if the year is greater than the conditional year we should buy the car.
	{buycar = true;}
		else{buycar = false;}
if (carmileage <= bonusmileage) // if the mialge is exceptional forget the year and buy the car
	{buycar = true;}
if (caryear >= bonusyear) // if the year is newer than the bonusyear than forget mileage and buy the car
	{buycar = true;}		
if(buycar)// if buy car is true
	{alert("Go ahead and buy the car. Its gonna be a great car.");}// print buy car
		else
			{alert("Don't buy the car, its either old or had to many miles. Keep looking.");}// else print dont buy car
