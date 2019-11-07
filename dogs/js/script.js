console.log('Array of Objects')


var dogs = [
  {
    name : "Doge",
    id : "D101", // id follows a pattern
    breed : "Shiba Inu",
    colour : "Golden",
    height : 45,
    age : 12,
    photo : "images/doge.jpg"
  },
  {
    name : "Bernie",
    id : "D102", // id follows a pattern
    breed : "Bernese Mountain Dog",
    colour : "Black and white",
    height : 10,
    age : 1,
    photo : "images/bernese.jpg"
  },
  {
    name : "Nick",
    id : "D103", // id follows a pattern
    breed : "Golden Retriever",
    colour : "Golden",
    height : 53,
    age : 4,
    photo : "images/golden-retriever.jpg"
  },
  {
    name : "Wolf Pants",
    id : "D104", // id follows a pattern
    breed : "Tamed Wolf",
    colour : "White",
    height : 85,
    age : 2,
    photo : "images/MCdog.png"
  },
  {
    name : "Clifford",
    id : "D105", // id follows a pattern
    breed : "Vizsla",
    colour : "Red",
    height : 750,
    age : 2,
    photo : "images/clifford.jpg"
  }
];

var id = 101; // this variable is used to generate id's for each image

for(var i = 0; i < dogs.length; i++){

document.getElementById('dogs').innerHTML += "<br>" + '<img id="D' + id.toString() +'" class ="myImg" src="' + dogs[i].photo + ' ">';
document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
id++; //id is incremented automatically
}


document.getElementById('grButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  // document.getElementsByClassName('form').

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].breed === "Golden Retriever"){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});


document.getElementById('dogeButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].breed === "Shiba Inu"){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});


document.getElementById('clifButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].breed === "Vizsla"){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});


document.getElementById('mcButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].breed === "Tamed Wolf"){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});


document.getElementById('bmdButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].breed === "Bernese Mountain Dog"){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});


document.getElementById('goldButton').addEventListener('click',function(){
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){
    if (dogs[i].colour.indexOf("Golden") > (-1) ){
      document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
      document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
      document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
      document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
      document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
      document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
    }
  }
});

document.getElementById('changeName').addEventListener('click',function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for(var i = 0; i < dogs.length; i++) {
    if(oldName === dogs[i].name){
      dogs[i].name = newName;
    }
  }
  console.log(dogs);

  document.getElementById('dogs').innerHTML = " "; //This is to clear the container

  for(var i = 0; i < dogs.length; i++){

  document.getElementById('dogs').innerHTML += "<br>" + '<img class ="myImg" src="' + dogs[i].photo + ' ">';
  document.getElementById('dogs').innerHTML += "<br> Name: " + dogs[i].name;
  document.getElementById('dogs').innerHTML += "<br> Breed: " + dogs[i].breed;
  document.getElementById('dogs').innerHTML += "<br> Colour: " + dogs[i].colour;
  document.getElementById('dogs').innerHTML += "<br> Age: " + dogs[i].age + " years old";
  document.getElementById('dogs').innerHTML += "<br> Height: " + dogs[i].height + "cm <br> <br>";
  }
});



$('.myImg').on('click', function(){
  console.log('dogs');
  console.log(this.id);
  $('.myModal').show();
  for (var i = 0; i < dogs.length; i++){
    //id property of the dog is checked for equivalance with the image id of the clicked element.
    if (dogs[i].id.trim() == this.id.trim()){
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].colour);
      console.log(dogs[i].height);
      console.log(dogs[i].age);
      document.getElementById('modalContent').innerHTML += "kuehkuhekuhekuhaqiduhuhhuwuh iuhe efkuhef efkefkje fkjehfkeh ";
    }
  }
});

$('.closeBtn').on('click', function(){
  $('.myModal').hide();
})






/* EXAMPLE OF SEARCHING WITHIN DATA TO FIND WORDS WITHIN
//bulldog
document.getElementById('bullDog').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container


  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed.indexOf("Bulldog") > (-1) ) {
      document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>';
      document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
      document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>';
      document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>';
      document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>';
   }
  }
});
*/
