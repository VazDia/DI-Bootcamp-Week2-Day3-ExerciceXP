const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building.

console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3.

console.log(`The apartement on the floor 1 are: ${ building.numberOfAptByFloor.firstFloor}
Those one the floor 3 are: ${building.numberOfAptByFloor.thirdFloor}`);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

let nameSecondTenant=building.nameOfTenants[1]; // Creating a variable for the name of the sencond tenant
/* Now we will create a loop for corresponding "building.nameOfTenants" elements
 to "building.numberOfRoomsAndRent" elements */

for (var [key,value] of Object.entries(building.numberOfRoomsAndRent)){
    if (key===nameSecondTenant.toLowerCase()){
        let nbRooms=value[0];// variable fetching the number of rooms in the corresponding key's values
        console.log(`The name of the second tenant is ${nameSecondTenant} and has ${nbRooms} rooms in his apartement`);
    }
}
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let sarahRent=building.numberOfRoomsAndRent.sarah[1]; // Variable for Sarah's rent
let davidRent=building.numberOfRoomsAndRent.david[1]; // Variable for David's rent
let danRent=building.numberOfRoomsAndRent.dan[1]; // Variable for Dan's rent

if ((sarahRent+davidRent) > danRent){
    danRent=1200;
    console.log(`The sum of Sarah's and David's rent is bigger than Dan's rent. So now Dan's rent is ${danRent}`);
}else{
    console.log(`Dan's rent is still the biggest`)
}