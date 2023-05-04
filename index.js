// module package core 
// module package external
/* const moment = require('moment');
const time = moment().format();
console.log(time);

setInterval(() => {
    console.log(`hozirgi vaqt, ${time}`);
}, 5000); 
*/
// const inquirer = require('inquirer');
// inquirer
// .prompt ([{ type: "input", name: "ragam", message: "ragamni kiriting?" }])
// .then((answer) => {
// console.log ("man kiritgan raqam qiymati:", answer.raqam);
// })
// .catch((err) => console. log(err));

// const validator = require("validator");
// //const test = validator.isEmail('foo@bar.com');
// // const test = validator.isInt("100");
// const test = validator.isIP("220.94.45.17");
// console.log("test", test);

const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log("random", random);

const chalk = require('chalk');
const log = console.log;
log(chalk.red(`uuid ${random}`));






//module package file