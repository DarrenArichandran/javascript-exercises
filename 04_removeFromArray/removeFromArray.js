const removeFromArray = function(myArr, ...args) { 

    function doesntMatch(value ,...args){
        return (value !== args[0]) || (value !== args[1])
    }

  const newList = myArr.filter(doesntMatch);
  return newList;
  

  }
//for (i=0; i<= array.length(); i++){
 //   if (array[i] !== Arguments){
   //     newList.push(array[i])
    //}

    //return newList
//let filteredArray = Array.filter( function(match) {
//  return match != Arguments 

//need to remove "number" from "myArr"

//const newList = myArr.filter( x => myArr !== args[0] || myArr[i] !== args[2] );


// Do not edit below this line
module.exports = removeFromArray;
