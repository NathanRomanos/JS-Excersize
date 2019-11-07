console.log('working')


var foodOne = 400;
var transportOne = 40;
var billOne = 200;
var costOne = foodOne + transportOne + billOne;

var foodTwo = 70;
var transportTwo = 25;
var billTwo = 160;
var costTwo = (foodTwo + transportTwo + billTwo);

var foodThree = 90;
var transportThree = 80;
var billThree = 190;
var costThree = (foodThree + transportThree + billThree);


document.getElementById('resultOne').innerHTML = "The total cost for person one is $" + costOne;
document.getElementById('resultTwo').innerHTML = "The total cost for person two is $" + costTwo;
document.getElementById('resultThree').innerHTML = "The total cost for person three is $" + costThree;


if ((costOne > costTwo) && (costOne > costThree)){
  document.getElementById('answerOne').innerHTML = "Person one has the highest expenses";
} else if (costTwo > costThree){
  document.getElementById('answerOne').innerHTML = "Person two has the highest expenses";
} else {
  document.getElementById('answerOne').innerHTML = "Person Three has the highest expenses";
}


if ((costOne < costTwo) && (costOne < costThree)){
  document.getElementById('answerTwo').innerHTML = "Person one has the lowest expenses";
} else if (costTwo < costThree){
  document.getElementById('answerTwo').innerHTML = "Person two has the lowest expenses";
} else {
  document.getElementById('answerTwo').innerHTML = "Person Three has the lowest expenses";
}


document.getElementById('answerThree').innerHTML = "the average expense is $" + ((costOne + costTwo + costThree) / 3).toFixed(2);
