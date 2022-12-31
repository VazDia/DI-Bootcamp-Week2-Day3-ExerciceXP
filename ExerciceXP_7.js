const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

/*A group of friends have decided to start a secret society. The society’s name will be the first letter
of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS” */
let sortedNames=names.sort() // this variable is about the sorted names in alphabetical order from the array called "names"
let societyName=""; // Variable which will contain the society's name

for (let indice=0;indice < sortedNames.length;indice++){
  societyName+=sortedNames[indice][0] // thi variable will fetch all the first letters of each name in the array
}
console.log(societyName);

