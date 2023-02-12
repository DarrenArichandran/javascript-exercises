const removeFromArray = function(myArr, ...args) {


    function notincluded(value) {
        for (let i=0; i <= (args.length) ; i++) {
        return value !== (args[i]) 
        }      
    }

for (let i =0; i <= (args.length) ; i++) {
const filtered = myArr.filter(notincluded)
return filtered;
}
}




// Do not edit below this line
module.exports = removeFromArray;
