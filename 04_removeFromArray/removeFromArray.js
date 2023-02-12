const removeFromArray = function(myArr, ...args) {

for (let i=0; i <= (removeFromArray.length -1) ; i++) {
const filtered = myArr.filter( value => value != args[i]);
return filtered
}
}



// Do not edit below this line
module.exports = removeFromArray;
