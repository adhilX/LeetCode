/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = digits.join('')
        const newNum = BigInt(num) + 1n
   const arr= newNum.toString().split('').map(Number)
    return arr
};