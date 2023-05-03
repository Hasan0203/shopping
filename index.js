// Module Packages
//core module

/* let number = 0;
setInterval (function () {
    console.log("hisob", number);
    number++;
}, 100); */

/*(function() {
console.log("korinsin");
 }, 1000); */

const fs = require('fs');
const data = readFileSync('./input.txt', 'utf8');
console.log(data);

console.log(------------------);

fs.writeFileSync("./input.txt", `$(data) \n\t\t by Moto`);
const new_data = readFileSync('./input.txt', 'utf8');



//Externel module
//File module