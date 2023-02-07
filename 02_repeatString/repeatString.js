const repeatString = function(string, number) {
    let stringNum = ""

for (let i = 1; i<= number; i++){
  stringNum += string;
}
return stringNum
// ((i-1) * word)  is returning NaN, need to resolve this
};

// Do not edit below this line
module.exports = repeatString;
