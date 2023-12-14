/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var array = x.toString().split("");
    let invertArray = array.reverse();
    let newNumber = invertArray.join("");
    console.log(newNumber)
    if(newNumber == x){
        return true;
    } else {
        return false;
    }
};
