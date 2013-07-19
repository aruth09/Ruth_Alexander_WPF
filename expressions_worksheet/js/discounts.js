// Javascript
// Alexander Ruth July 17th 2013 Expressions Worksheet Discounts

var originalprice = prompt("What is the original price?");// asking for the original price and storing it in variable originalprice
var itemdescript = prompt("what is the item?");// asking for the items description and storing it in variable itemdescript
var discountpercentage = prompt("what is the discount percentage?");// asking for the discount percentage storing it in variable discountpercentage
var discount = originalprice * discountpercentage /100;//calculating the whole number of the discount storing it in variable discount
var salestaxpercentage = prompt("what is the sales tax percentage?") / 100;// asking for the sales tax percentage storing it in variable salestaxpercentage
var tax = originalprice * salestaxpercentage;//calculating the whole number of the sales tax storing in the variable tax
var pricewithtax = originalprice - discount + tax;// calulating the price with tax and discount storing it in variable pricewithtax
var pricewithouttax = originalprice - discount;// calculating the price without tax and with discount storing it in variable pricewithouttax

alert("Your " + itemdescript + " was orignally $" + originalprice + ", but after a " + discountpercentage + "% discount, it is now $" + pricewithouttax + " and $" + pricewithtax + " with tax.");//showing the user the results in a popup pulling all the data from variables

