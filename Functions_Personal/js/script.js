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

function convertMPGs(usergallons, usermiles){
	mpgs = usermiles / usergallons;
	return mpgs;
}

function daytowork(workdistancemiles, workday){
	workday = workdistancemiles * 2;
}

function daysleft(usermiles, currenttankmiles, workday){
	additionalmiles = prompt("Are you driving any extra miles in the next few days?");
	dayslefttodrive = (usermiles - currenttankmiles - additionalmiles)/workday;
}

function resultsprint(currenttankmiles, dayslefttodrive, mpgs){
	console.log("You have " + dayslefttodrive + " days left you can drive to work. " + "Also your car gets " + mpgs + " miles to the gallon.");
}

convertMPGs(usergallons, usermiles);
daytowork(workdistancemiles, workday);
daysleft(usermiles, currenttankmiles, workday);
resultsprint(currenttankmiles, dayslefttodrive, mpgs);
