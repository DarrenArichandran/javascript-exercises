const removeFromArray = function(myArr, ...args) { 
 const newList =[];

    for (let i=0; i<= myArr.length ; i++){
        if (myArr[i] === args[0] || myArr[i] === args[1]){
            newList.push(myArr[i]);
        }
    }
}
//for (i=0; i<= array.length(); i++){
 //   if (array[i] !== Arguments){
   //     newList.push(array[i])
    //}

    //return newList
//let filteredArray = Array.filter( function(match) {
//  return match != Arguments 

//need to remove "number" from "myArr"



// Do not edit below this line
module.exports = removeFromArray;
