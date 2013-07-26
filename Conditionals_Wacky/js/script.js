// JavaScript 
// Alexander Ruth Conditional Wacky

var worktime = prompt("What time do you work at?");
var moneynacount = prompt("How much money do you have?");
var homework = prompt("Do you have homework?(true/false)");
var sleepneeded = 6;
var getreadytime = 2;
var sleep = worktime - sleepneeded - getreadytime;
(worktime < 6) ?  alert("Stay in and get some sleep.");
	else if (moneynacount < 200) 
		{alert("You have no money, stay home.")};
			else if (homework) 
				{alert("You need to stay home and work on homework.")};
				else 
					{alert("Go to the bar and have some fun. Be in bed by " + sleep + "am to get some sleep to be functional at work.")};