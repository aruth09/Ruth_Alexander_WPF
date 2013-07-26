// JavaScript 
// Alexander Ruth Conditional Wacky

var worktime = prompt("What time do you work at?");//this is to figure out when I work. Varable declared to store time
var moneynacount = prompt("How much money do you have?");// this is to determin if I have the money to go out. Varable decalered to store money.
var homework = confirm("homework?(cancel=no ok=yes)");// By selecting ok homework becomes true, cancel makes it false. Varable decalered to store answer.
var sleepneeded = 6;//varable stores how much sleep I will need, storing in varable.
var getreadytime = 2;// how much time is needed to get ready before work, storing in varable.
var sleep = worktime - sleepneeded - getreadytime;// time needed to be home and in bed before work. stored in variable
if (worktime <= 7) // If I work at anytime before 7 I cannot go to the bar.  
	{alert("Stay in and get some sleep.");}// this tells the user to stay home and get some sleep you work before 7am
		else if (moneynacount < 200) // If the user has less than 200 dollars than he can not go to the bar
			{alert("You have no money, stay home.");}// telling the user to stay home he dosnt have money.
				else if (homework) // asking if the user has homework
					{alert("You need to stay home and work on homework.");}// if true the user has to stay home work on homework
					else //if all all bases are covered, money sleep and homework 
						{alert("Go to the bar and have some fun. Be in bed by " + sleep + "am to get some sleep to be functional at work.");}// the user can go to the bar, a pop up informes the user of that.