console.log('working');


// TASK ONE
document.getElementById('btn1').addEventListener('click', function(){

  var givenString = (prompt('Please input a word')).toLowerCase();
  console.log(givenString);

  function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };

  var reversedString = reverseString(givenString);
  document.getElementById('result1').innerHTML = givenString + " = " + reversedString;

  if(givenString === reversedString){
    document.getElementById('result1').innerHTML += "<br>This word is a palendrome."
  } else {
    document.getElementById('result1').innerHTML += "<br>This word is not a palendrome."
  }

});


// TASK TWO
document.getElementById('btn2').addEventListener('click', function(){

  var givenNumber = prompt('Please input a number');
  console.log(givenNumber);
  document.getElementById('result2').innerHTML = givenNumber;


  var half = givenNumber / 2;

  if(Number.isInteger(half)){
    document.getElementById('result2').innerHTML += "<br> This number is even."
  } else {
    document.getElementById('result2').innerHTML += "<br> This number is odd."
  }

  // if (givenNumber%2 === 1) {
  //   alert ('odd');
  // }
});



// TASK Three
var givenSentence = "The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you."
console.log(givenSentence);

var replacedSentence = givenSentence.replace(/mistakes/g, "bugs");
document.getElementById('result3').innerHTML = replacedSentence;



// TASK FOUR
