const removeFromArray = function(myArr, ...args) {
return myArr.filter (value => !args.includes(value));
}





// Do not edit below this line
module.exports = removeFromArray;
