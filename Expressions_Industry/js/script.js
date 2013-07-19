// JavaScript
// Alexander Ruth Industry Calculator

var sitewidth = prompt("In pixels how wide is your site?");
var sitecolumns = prompt("How many columns will your site have?");
var sitemargins = prompt("In pixels what magin spaceing do you want?");
var columnwidth = (sitewidth / sitecolumns) - sitemargins;

alert("Your site has " + sitecolumns + " columns. Each column is " + columnwidth + "px with margins of " + sitemargins + "px.");