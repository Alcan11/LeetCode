/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var array = x.toString().split("");
    let invertArray = array.reverse();
    let reverseNumber = invertArray.join("");
    if(reverseNumber == x){
        return true;
    } else {
        return false;
    }
};
