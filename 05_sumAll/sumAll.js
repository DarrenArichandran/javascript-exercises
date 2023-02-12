const sumAll = function( a, b) {

    let x = a;
    let answer = 0;

    while (x <= b) {
        x++;
        answer += x;
    }
    return answer
}
// Do not edit below this line
module.exports = sumAll;
