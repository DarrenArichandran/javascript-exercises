const removeFromArray = function(myArr, ...args) {


//for (let i =0; i <= (args.length) ; i++) {

const filtered = myArr.filter(value => value !== args[0]).filter(
    value => value !== args[1]).filter(value => value !== args[3]).
    filter(value => value !== args[4]);
return filtered;
}





// Do not edit below this line
module.exports = removeFromArray;
