/* Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/



    let usersNumber=prompt("Enter a number");
console.log(typeof(usersNumber))
let convertedNumber=Number(usersNumber); // convert the input text to a number seeing it will be a string at first.


while(isNaN(convertedNumber) || convertedNumber <10){
    alert("Please enter a number equal or bigger than 10")
    usersNumber=prompt("Enter a number");
    convertedNumber=Number(usersNumber);
};
console.log(convertedNumber)


