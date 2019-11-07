console.log('working')

// OBJECT
// Objects are a COMPLEX data type
// Objects can store different types of data such as strings, numeric, and boolean etc...
// An array of objects can be created to store lots of data
// Objects will have properties and their values
// These are called key-value pair

document.getElementById('dog1').addEventListener('click', function(){

  // Object example 1
  var dog1 = {
    name : "John",
    breed : "Beagle",
    age : 7,
    height : 40,
    photo : "images/beagle.jpg"
  };


  document.getElementById('result').innerHTML = '<br> <img class="img" src="'+ dog1.photo +'">';
  document.getElementById('result').innerHTML += "<br> Name: " + dog1.name;
  document.getElementById('result').innerHTML += "<br> Breed: " + dog1.breed;
  document.getElementById('result').innerHTML += "<br> Age: " + dog1.age;
  document.getElementById('result').innerHTML += "<br> Height: " + dog1.height + "cm";

});


document.getElementById('dog2').addEventListener('click', function(){


  var dog2 = {
    name : "Sam",
    breed : "Labrador",
    age : 10,
    height : 80,
    male : "true",
    photo : "images/labrador.jpg"
  };

  document.getElementById('result').innerHTML = '<br> <img class="img" src="'+ dog2.photo +'">';
  document.getElementById('result').innerHTML += "<br> Name: " + dog2.name;
  document.getElementById('result').innerHTML += "<br> Breed: " + dog2.breed;
  document.getElementById('result').innerHTML += "<br> Age: " + dog2.age;
  document.getElementById('result').innerHTML += "<br> Height: " + dog2.height + "cm";
  if(dog2.male ==="true") {
    document.getElementById('result').innerHTML += "<br> Sex: " + "male"
  } else {
    document.getElementById('result').innerHTML += "<br> Sex: " + "female"
  }

});



document.getElementById('change').addEventListener('click', function(){
  var changedName=document.getElementById('dogName').value;
  console.log(changedName);
  var dogObject = dog1()
});
