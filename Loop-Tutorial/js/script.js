console.log('Loop Tutorial');

// LOOPS

// FOR

/*
for (initial value; final value; increment/decrement){

}
*/

// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);
// document.write (10);

// for (var i=0; i<252; i++){
//   document.getElementById('result').textContent += 'nathan ';
// }

for (var i=0; i<15; i++){
  for (var j=0; j<i; j++){
    document.getElementById('result').innerHTML += '*' ;
  }
  document.getElementById('result').innerHTML += '</br>';
}



// var name='Yoobee';
// var names = ['David','Daniela','Maria','Luke','John'];
//
//   for (var j=0; j<5; j++){
//     document.getElementById('result').innerHTML += j;
//     document.getElementById('result').innerHTML += names[j] ;
//     document.getElementById('result').innerHTML += '</br>';
//   }

// while loop
// var i=0;
// while (i<5){
//   document.getElementById('result').innerHTML += i ;
//   i++;
// }
var i=0;
do{
    document.getElementById('result').innerHTML += i ;
    i++
}while(i>5);
