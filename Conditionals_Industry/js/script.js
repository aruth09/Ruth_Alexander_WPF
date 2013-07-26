// JavaScript 
// Alexander Ruth Conditional Industry

var currentjobhours = prompt("How many hours are committed to current projects?");//prompt user how many hours they have to work on outstanding projects.
var proposedjobhours = prompt("How many hours will the Job take?");//user enters how long will the job take.
var proposedjobhourlypay = prompt("How much will the Job pay per hour?");// user enters how much will the job cost
var desiredhourlypay = 20;// the minimum amount of pay 
var maxhourscommitted = 100;// the max hours that can be committed on projects at one time
var takejob = false;// defalt answer weather you can take the job or not.
var proposedhourscommitted = currentjobhours + proposedjobhours;// calculating the total amount of hours committed if the job is taken.
if (proposedhourscommitted <= maxhourscommitted && desiredhourlypay <= proposedjobhourlypay) // if the proposed hourscomitted is less than or equal to the maxhourscommitted and the desiredhourly pay is less than or equal to the prosedhourly pay
	{takejob = true;}//than take job is true
	else{takejob=false;}// else take job will be false.
if (takejob) //if take job is true
	{alert("Take the job! The money is good and you currently have time.");}// pop up and tell user to take job
	else{alert("Do not take the job, you are booked and can not work for free.");}//if false tell user to leave the job