console.log('this is tutorial 65 ');
// synchronous or bloking
// -line by line exution


// Asynchronous or non - bloking
// -line by line exution not guranteed
// callback will fire
const fs = require('fs');
let text = fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(err, data);

});
console.log('this is a massage');
