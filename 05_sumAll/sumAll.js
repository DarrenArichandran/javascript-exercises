const sumAll = function( a, b) {
let answer = 0;

if (Math.sign(a) <= 0 || Math.sign(b) <= 0){
    return "ERROR"
} else if (Math.sign(a) == NaN|| Math.sign(b) == NaN) {
    return "ERROR"
} else if (Number.isInteger(a) === 0) {
    return "ERROR"
} else if (Number.isInteger(b) === 0) {
    return "ERROR"
} else if (a < b) {
    let x = a;
    while (x <= b) {
        answer += x;
        x++;
    }
    return answer;
} else {
    let x = b;
    while (x <= a) {
        answer += x;
        x++;
    }
    return answer;
}
}
// Do not edit below this line
module.exports = sumAll;
