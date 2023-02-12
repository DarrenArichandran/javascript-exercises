const removeFromArray = function(myArr, ...args) {


for (let i =0; i <= (args.length) ; i++) {
return myArr.filter (value, _ , args => value != (args[i]))
}
}





// Do not edit below this line
module.exports = removeFromArray;
