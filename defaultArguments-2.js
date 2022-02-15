let addExclamation = (word, numberOfEclaim = word.length)=>
    word+"!".repeat(numberOfEclaim);

const result = addExclamation("Hi");
console.log(result);
module.exports = addExclamation;