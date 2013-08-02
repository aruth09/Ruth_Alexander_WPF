// JavaScript
// Alexander Ruth Personal Calculator

var usergallons = prompt("How many gallons of gas can your car's tank hold?");
var usermiles = prompt("How many miles can you drive on a tank of gas?(an average works)");
var workdistancemiles = prompt("How far is work from your house?");
var additionalmiles = 0;
var currenttankmiles = prompt("How many miles are on your current tank?(How far have you drivin?)");
var mpgs = 0;
var workday = 0;
var dayslefttodrive = 0;
var milesleftintank = 0;

function convertMPGs(usergallons, usermiles){
	mpgs = usermiles / usergallons;
	return mpgs;
}

function daytowork(workdistancemiles, workday){
	
	return workday;
}

function daysleft(usermiles, currenttankmiles, workday, milesleftintank, additionalmiles, workdistancemiles){
	workday = workdistancemiles * 2;
	additionalmiles = prompt("Are you driving any extra miles in the next few days?");
	milesleftintank = usermiles - currenttankmiles;
	dayslefttodrive = milesleftintank / workday;
	return dayslefttodrive;
}

function resultsprint(dayslefttodrive, mpgs){
	console.log("You have " + dayslefttodrive + " days left you can drive to work. " + "Also your car gets " + mpgs + " miles to the gallon.");
}

convertMPGs(usergallons, usermiles);
daysleft(usermiles, currenttankmiles, workday, milesleftintank, additionalmiles, workdistancemiles);
resultsprint(dayslefttodrive, mpgs);
