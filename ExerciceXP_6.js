const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  //Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence="" // variable for doing a sentence before to console.log
  for (var [key,value] of Object.entries(details)){
      sentence+=` ${key} ${value} `;
  }
  console.log(sentence);