/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    
  const max = Math.max(...nums)
  const min = Math.min(...nums)
   const set = new Set(nums);

let arr = []

for(let i = min ;i<= max ; i++){
  if (!set.has(i))arr.push(i);
}

return arr
};