
const people = ["Greg", "Mary", "Devon", "James"];


//Write code to remove “Greg” from the people array.

people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
console.log();

// Write code to add your name to the end of the people array.
people.push("Diarrassouba");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

/* Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method
*/
copyArray=people.slice(1,3);
console.log(copyArray);

// Write code that gives the index of “Foo”. Why does it return -1 ?
people.indexOf("Foo"); // it return -1 because it's not included in the arrays "people"

/*
Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?
*/
let last=people[people.length-1];
console.log(last);

// PART II- BOUCLE


//À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.
for (let i=0;i<people.length;i++){
    console.log(people[i]);
}

/*À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason" .
Indice : jetez un œil à l' breakénoncé de la leçon.
*/

for (let person=0;person<people.length;person++){
    if (people[person]=="Jason"){
        console.log(people[person]);
        break;
    }else{
        console.log(people[person]);
    }
}

