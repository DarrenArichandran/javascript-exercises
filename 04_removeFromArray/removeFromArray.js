const removeFromArray = function(myArr, ...args) { 

    for (let i = 0; i <= 3; i++){
const filtered = myArr.filter( x => myArr[i] !== args[0] || myArr[i] !== args[1] );
    return filtered
}
}



// Do not edit below this line
module.exports = removeFromArray;
