const removeFromArray = function(myArr, ...args) {

for (let i=0; i <= (args.length) ; i++) {
const filtered = myArr.filter( value => !myArr.includes(args[i]));
return filtered
}
}




// Do not edit below this line
module.exports = removeFromArray;
