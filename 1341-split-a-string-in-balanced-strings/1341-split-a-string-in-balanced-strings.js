/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

let count = 0 ,val = 0

for(let char of s){
if(char === "R")val++
else val--

if(val === 0)  count++
}

return count
};