//Create an object called family with a few key value pairs.
const family={mother:"Mariam", father:"Samouka", son:"Vazoumana", daughter:"Aïcha"}

//Using a for in loop, console.log the keys of the object.
for (var element in family){
    console.log(element);
}

// Using a for in loop, console.log the values of the object.
for (var element in family){
    console.log(family[element]);
}