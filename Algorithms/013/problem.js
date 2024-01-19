/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumbers = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000}
    let solution = 0;
    numberSplitted = s.split("");
    numberReversed = numberSplitted.reverse();
    numberReversed.forEach((currentValue, index)=>{
        if(index == 0 || romanNumbers[currentValue] >= romanNumbers[numberSplitted[index-1]]){
            solution += romanNumbers[currentValue];
        } else {
            solution = solution - romanNumbers[currentValue];
        } 
    })
    return solution;
};
