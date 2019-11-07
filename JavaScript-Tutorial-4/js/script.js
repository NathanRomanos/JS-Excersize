// ARRAYS

// An Array is a data type
// Data types can be numeric, string, or boolean

// Inside an array you can store many relivant values in the same name


/*
eg:
var varName = ['value one', 'value two', 'value three', 'value four'];
*/

//Arrays use an indexing system to arrange the values you put insiede them.
// The first value is index-0, then index-1, then index-2 etc...
// N values = (n-1)

/*
eg:
varName[0] = 'value one'
varName[3] = 'value four'
*/

console.log('working')

// var names = ['Lucy', 'Peter', 'Antony', 'Yuli'];
// document.getElementById('result').innerHTML = names[3] + names[1] + names[2] + names[0];
//
// // or
//
// document.getElementById('result').innerHTML = names;
//
// // or
//
// for (var i=0; i<4; i++){
//   document.getElementById('result').innerHTML += "<br>" + names[i];
// }

// Searching for Peter in this list
// for (var i=0; i<4; i++){
//   if (names[i] === 'Peter') {
//     document.getElementById('result').innerHTML += "<br> Yes " + names[i] + " is found in this list";
//   } else {
//     document.getElementById('result').innerHTML
//     += '</br> Sorry';
//   }
// }

/*
var age = [30, 25, 22, 24];

var highestAge = 0;

for (var i=0; i<4; i++) {
  if (highestAge < age[i]) {
    highestAge = age[i];
    alert(i);
    var listIndex = i;
  }
}

document.getElementById('result').innerHTML += '</br> The highest age is ' + highestAge;

switch (listIndex) {
  case 0:
  console.log(listIndex);
    document.getElementById('result').innerHTML += '</br>' + 'Lucy is the eldest';
    break;

  case 1:
    document.getElementById('result').innerHTML += '</br>' + 'Peter is the eldest';
    break;

  case 2:
    document.getElementById('result').innerHTML += '</br>' + 'Antony is the eldest';
    break;

  case 3:
    document.getElementById('result').innerHTML += '</br>' + 'Yuli is the eldest';
    break;


}
*/

/*
var names = ['Lucy','Peter','Antony','Yuli', 'Julie', 'Chelsea', 'Candy', 'Mohammed', 'Rico'];

//find the highest age in the list
var age = [12, 25, 39, 43, 23, 90, 10, 120, 84];

var highestAge = 0;

for (var i=0; i<9; i++){

  if (highestAge < age[i]) {
    highestAge = age[i];
    // alert (i);
    console.log (i);
    var listIndex = i;
  }

}

document.getElementById('result').innerHTML += '</br> The highest age is ' + highestAge;

for(var j=0; j<9; j++){
  if (j === listIndex) {
    document.getElementById('result').innerHTML += '</br>' + names[j]
    + ' is the eldest';
  }
}
*/



var names = ['Jimmy', 'Carl', 'Hannibal', 'Hubert'];
var project1 = [90, 78, 87, 67];
var project2 = [98, 81, 65, 85];
var project3 = [100, 85, 73, 54];

document.getElementById('result').innerHTML = "Jimmy's average score is " + (project1[0] + project2[0] + project3[0]) / 3;
document.getElementById('result').innerHTML += "<br> Carl's average score is " + (project1[1] + project2[1] + project3[1]) / 3;
document.getElementById('result').innerHTML += "<br> Hannibal's average score is " + (project1[2] + project2[2] + project3[2]) / 3;
document.getElementById('result').innerHTML += "<br> Hubert's average score is " + (project1[3] + project2[3] + project3[3]) / 3;

var outstanding1 = 0;

for (var i=0; i<4; i++){

  if (outstanding1 < project1[i]) {
    outstanding1 = project1[i];
    // alert (i);
    console.log (i);
    var listIndex = i;
  }

}

var outstanding2 = 0;

for (var i=0; i<4; i++){

  if (outstanding2 < project2[i]) {
    outstanding2 = project2[i];
    // alert (i);
    console.log (i);
    var listIndex = i;
  }

}

var outstanding3 = 0;

for (var i=0; i<4; i++){

  if (outstanding3 < project3[i]) {
    outstanding3 = project3[i];
    // alert (i);
    console.log (i);
    var listIndex = i;
  }

}

document.getElementById('result').innerHTML += '<br><br> The outstanding performance is ' + (outstanding1 + outstanding2 + outstanding3) /3;

for(var j=0; j<12; j++){
  if (j === listIndex) {
    document.getElementById('result').innerHTML += '<br>' + names[j]
    + ' is the best';
  }
}
