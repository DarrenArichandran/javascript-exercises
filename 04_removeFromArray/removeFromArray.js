const removeFromArray = function(myArr, ...number) {
    let filter= myArr.filter( value =>  value != (...number));
    return filter
}

//need to remove "number" from "myArr"


// Do not edit below this line
module.exports = removeFromArray;
