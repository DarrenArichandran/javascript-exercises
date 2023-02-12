const sumAll = function( a, b) {
let answer = 0;


if (a < b) {
    let x = a;
    while (x <= b) {
        answer += x;
        x++;
    }
    return answer
} else {
    let x = b;
    while (x <= a) {
        answer += x;
        x++;
    }
    return answer
}
}
// Do not edit below this line
module.exports = sumAll;
