const removeFromArray = function(myArr, ...args) { 

const filtered = myArr.filter( value => {
    value !== args[0] || value !== args[1];
})
return filtered

    



// Do not edit below this line
module.exports = removeFromArray;
