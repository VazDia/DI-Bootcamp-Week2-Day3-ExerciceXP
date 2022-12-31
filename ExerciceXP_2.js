//Create an array called colors where the value is a list of your five favorite colors.
let colors=["white","black","green","blue","orange"];

/* Loop through the array and as you loop console.log a string like so: 
“My #1 choice is blue”, “My #2 choice is red” ect… */

for(i=0;i<5;i++){
    console.log(`My #${i+1} choice is ${colors[i]}`);
}

/* Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus */
let suffixes=["st","nd","rd","th","th"];
let position;
for (j=0;j<5;j++){
    switch (j){
        case 0:
        position=suffixes[0];
        break;
        case 1:
        position=suffixes[1];
        break;
        case 2:
        position=suffixes[2];
        break;
        case 3 || 4:
        position=suffixes[3];
        break;
       
    }
    console.log(`My ${j+1}${position} choice is ${colors[j]}`);
}
