var hotdogs = prompt ("How many hotdogs would you like? (Please enter a whole number):", 0);
var fries = prompt ("How many french fries would you like? (Please enter a whole number):",0);
var drinks = prompt ("How many drinks would you like? (Please enter a whole number):",0);

var hotdogsCost = 3.75, friesCost = 2.00, drinksCost = 1.50;

var totalHotdogs = (hotdogs * hotdogsCost);
var totalFries = (fries * friesCost);
var totalDrinks = (drinks * drinksCost);

var subTotal = (totalHotdogs + totalFries + totalDrinks);

var discountAmount = ((totalHotdogs + totalFries + totalDrinks) * 0.10);
var discount = ((totalHotdogs + totalFries + totalDrinks) * 0.90);

var tax = (subTotal * 0.0625);

var total = (subTotal + tax);