console.log('working')


// conditional statement
// to find the bigger number among two values

var firstNumber = 12;
var secondNumber = 27;

if (firstNumber > secondNumber) {
  document.getElementById('result').innerHTML = firstNumber + " is the biggest";
} else {
  document.getElementById('result').innerHTML = secondNumber + " is the greatest";
}

if (firstNumber == secondNumber) {
  document.getElementById('result').innerHTML = firstNumber + " is the same as " + secondNumber;
}


var age1 = 45;
var age2 = 34;
var age3 = 67;

if ((age1 > age2) && (age1 > age3)) {
  document.getElementById('resultTwo').innerHTML = age1 + " is the eldest" ;
} else if (age2 > age3){
  document.getElementById('resultTwo').innerHTML = age2 + " is the eldest" ;
} else {
  document.getElementById('resultTwo').innerHTML = age3 + " is the eldest" ;
}


// AND operator:
// (condition + condition = result)
// False + False = False
// False + True = False
// True + False = False
// True + True = True


// OR operator:
// (condition + condition = result)
// False + False = False
// False + True = True
// True + False = True
// True + True = True


// NOT operator:
// (condition = result)
// False = True
// True = False



//calculate coffee price consider discount.... condition 5 coffee

/*
var coffeePrice = 3.45;
var quantity = prompt("how many coffee(s)?");
var cost = coffeePrice * quantity;

var coffeeType = prompt("What coffee - espresso or flatwhite?");

var discountedCost = coffeePrice * (80 / 100) * quantity;

if (coffeeType == "espresso") {
 document.getElementById('coffeeImage').innerHTML = '<img src="images/coffee.jpg" alt="Coffee">'
} else if (coffeeType == "flatwhite") {
  document.getElementById('coffeeImage').innerHTML = '<img src="images/flatwhite.jpg" alt="Coffee">'
}

if (quantity >= 5) {
   document.getElementById('resultThree').innerHTML = "The bill is $" + discountedCost ;
} else {
  document.getElementById('resultThree').innerHTML = "The bill is $" + cost;
}
*/

/*
var muffinPrice = 2.5;
var muffinPriceTwo = 2.1;
var muffinPriceThree = 1.9;
var muffinQuantity = prompt("how many muffins do you want?");
var muffinCost = muffinPrice * muffinQuantity;

if ((muffinQuantity >= 10) && (muffinQuantity < 25)) {
 var muffinCost = muffinPriceTwo * muffinQuantity;
} else if (muffinQuantity >= 25) {
  var muffinCost = muffinPriceThree * muffinQuantity;
}

document.getElementById('resultFour').innerHTML = "muffin price = $" + muffinCost;
*/


var steakPrice = 25.60;
var steakQuantity = prompt("how many steaks do you want?");
// var steakCost = steakPrice * steakQuantity;
var steakDiscount = Math.floor(steakQuantity / 3);

var saucePrice = 2;
var sauceAmount = prompt("how many sauce?");
var sauceCost = saucePrice * sauceAmount;

var steakCost = (steakPrice * steakQuantity) - (steakPrice * steakDiscount) + sauceCost;


document.getElementById('resultFive').innerHTML = "steak price = $" + steakCost.toFixed(2);
