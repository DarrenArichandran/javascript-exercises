const removeFromArray = function(myArr, number) {
 let result = myArr.filter (checkNumber);

 function checkNumber(figure) {
     return figure != number;
 }
 return result
}

//need to remove "number" from "myArr"



};

// Do not edit below this line
module.exports = removeFromArray;
