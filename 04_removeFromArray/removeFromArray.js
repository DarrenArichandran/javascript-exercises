const removeFromArray = function(array, ...Arguments) { 
const newList =[]
    
for (i=0; i<= array.length(); i++){
    if (array[i] !== Arguments){
        newList.push(array[i])
    }

    return newList
//let filteredArray = Array.filter( function(match) {
//  return match != Arguments 

//need to remove "number" from "myArr"
}
}

// Do not edit below this line
module.exports = removeFromArray;
