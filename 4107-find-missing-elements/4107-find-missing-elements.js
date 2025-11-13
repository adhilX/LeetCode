/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    
let arr = []
  const max = Math.max(...nums)
  const min = Math.min(...nums)


for(let i = min ;i<= max ; i++){
  if (!nums.includes(i))arr.push(i);
}

return arr
};