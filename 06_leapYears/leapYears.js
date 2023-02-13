const leapYears = function(x) {

if ( x % 4 == 0) {
    if (x % 100) {
        return false;
    } else if ( x % 400 == 0 && x % 4 ==0) {
        return true;
    }
} else {
    return false;
}
}

// Do not edit below this line
module.exports = leapYears;
