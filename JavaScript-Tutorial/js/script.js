console.log('Im baby');


document.write('<p class="bruh">greetings from document.write</p>');

//not a secured way
document.getElementById('heading').innerHTML +="<br>This is JS innerHTML";

//secured but reduced performance
document.getElementById('heading').innerText +='\nThis is JS innerText';

//secured and increased performance
document.getElementById('heading').textContent +='\nThis is JS textContent';




// Different types of Data:

// >data - raw values, facts, and figures. After processing data will be called as information

// >numerc type - eg: +1, -5, 5.4, phonenumber, age. Integer is a whole number. A non whole number is a floating number. Numeric values are not written in quotation marks, only strings are.

// >string type - can contain alphabets, numbers, special characters. eg: password, username, address, ID, phonenumber. String values are written in quotation marks.

// boolean or logical type - eg: yes/no, true/false, 1/0

// date format

// time format

// currency format - $, £, ¥



// values to be stored in a variable should be declared

var name = "Daniel";
// var is a keyword used to declare a variable - a variable is a name used to store value/data

var myName = "Nathan";
var yourName = "dumbIdiot";
var myAge = 15;
var a = 5;
var b = 12;
var c = a + b;

console.log('c');//produces the letter c, treats as a string values
console.log(c); // produces the value of c that is calculated
console.log(myName + ' ' + yourName); //adding strings is called string concatenation

var x = '650' //string value

var y = '50' //string values
var z = x + y;
console.log (z); //because they are string data this z will just combine the two numbers together in a sentence.

/*operators
Mathematical /arithmetic operators
+ for plus
- for minus
* for multiplication (asterisk)
/ for division (slash)
< (less than)
> (greater than)
<= (less than or equal)
>= (greater than or equal)
== (equal)
*/


var licenseAge = 16;
var myEligibility = myAge < licenseAge ;
console.log(myEligibility);



if (myAge >= licenseAge) {
  alert ('Yes, you can drive');

} else {
  alert ('Sorry, you can\'t drive');
}
