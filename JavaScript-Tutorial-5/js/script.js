console.log('working')

// FUNCTIONS
// A function is a small program that is meant for a singe purpose
// There are a few functions that come standard with JavaScript but they can also be defined by the user.
// Write functions in camel case

function functionName(){

}

// You must first define the function (above) then call the function (below)

functionName()



eg:



function displayInfo(){
  document.getElementById('result').innerHTML = 'Learning JS Function </br>';
 }

displayInfo();



or:


//passing parameter or value inside the function
//name is a dummy variable
function greetMe(name){
  document.getElementById('result').innerHTML += '<br> Hi' + name + 'Good Afternoon </br>';
}

greetMe(' Nathan, '); // actual argument or parameter
greetMe(' Yoobee, ');
greetMe(' New Zealand, ');


or:



function average(){
  var total = 267;
  var avg = total / 3;
  document.getElementById('result').innerHTML += "" + avg;
}

for (var i=0; i<10; i++){
  average()
}




// Next thing to know is RETURNING VALUE

eg:

function totalExpense(f, t, b){
  var gt = f + t + b;
  return gt; //returns the value to the location where the function is called from
}

var food = 100;
var transport = 125;
var bills = 255;

var grandTotal = totalExpense(food, transport, bills);

document.getElementById('result').innerHTML += 'The total expense is ' + grandTotal;

document.getElementById('result').innerHTML
+= '</br> The average is ' + (totalExpense(50,35,40)/3).toFixed(2);

//variable total has Global scope
var total = 345;
function averageExpense(total){
  var myAverage = (total/3);
  console.log(myAverage); //local
  return myAverage;
}
document.getElementById('result').innerHTML
+= '</br> The average from the new function is ' + averageExpense(total);

var myAverage = 200; //global
console.log(myAverage);

function anotherFunction(){
  var myAverage=0;
  console.log(myAverage);
}
anotherFunction();


// TIMES TABLE 5

document.getElementById('table').addEventListener('click',function(){
  for(var i=0; i<20; i++){
  var mult = 5*i;
  document.getElementById('multiplication').innerHTML += '<br> 5x' + i + "=" + mult;
} // loop ends
}); //event listener ends
