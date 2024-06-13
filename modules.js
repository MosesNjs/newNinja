// const mode = require('./people') 
// when a file is required from within a different file, like this, 
// when you run thus file, it runs whatever was in the other file and just gives you the result here 

const { people, ages } = require('./people')

// console.log(mode); 
// gives an empty object cause nothing was exported to it from the required file
// ... unless it was. at which point, you do have access to the variables
// via something like mode.ages as used below. 

// console.log(people);
// you don't have access to things in the required file though 
// unless you export it 

// console.log(ages);
// console.log(people);