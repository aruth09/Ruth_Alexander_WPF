// JavaScript
// Alexander Ruth Industry Calculator

var sitewidth = prompt("In pixels how wide is your site?"); // gathering how many pixels the site is wide storing in variable
var sitecolumns = prompt("How many columns will your site have?"); // gathereing how many columns the site will have storing in variable
var sitemargins = prompt("In pixels what magin spaceing do you want?"); // gathereing the margins in pixels and storing in variables
var columnwidth = (sitewidth / sitecolumns) - sitemargins; // calculating the column widths and subtracting the site margins from that, storing in variables

alert("Your site has " + sitecolumns + " columns. Each column is " + columnwidth + "px with margins of " + sitemargins + "px."); // printing the out put of our calulations in an alert popup 