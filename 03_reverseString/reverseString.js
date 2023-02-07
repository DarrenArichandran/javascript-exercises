const reverseString = function(string) {
let input = string
let myArr = Array.from(input);
let myArrReverse = myArr.reverse();
let newInput = myArrReverse.join("");

return newInput

};

// Do not edit below this line
module.exports = reverseString;
