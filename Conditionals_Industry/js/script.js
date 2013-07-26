// JavaScript 
// Alexander Ruth Conditional Industry

var currentjobhours = prompt("How many hours are committed to current projects?");
var proposedjobhours = prompt("How many hours will the Job take?");
var proposedjobhourlypay = prompt("How much will the Job pay per hour?");
var desiredhourlypay = 20;
var maxhourscommitted = 100;
var takejob = false;
var proposedhourscommitted = currentjobhours + proposedjobhours;
if (proposedhourscommitted <= maxhourscommitted && desiredhourlypay <= proposedjobhourlypay) 
	{takejob = true;}
	else{takejob=false;}
if (takejob) 
	{alert("Take the job! The money is good and you currently have time.")};
	else{alert("Do not take the job, you are booked and can not work for free.")}