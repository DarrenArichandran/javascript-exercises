const repeatString = function(string, number) {
    let num = number;
    let word = string;


for (let i = 1; i<= num; i++){
  let stringNum =  stringNum + word;
  return stringNum
}
// ((i-1) * word)  is returning NaN, need to resolve this
};

// Do not edit below this line
module.exports = repeatString;
