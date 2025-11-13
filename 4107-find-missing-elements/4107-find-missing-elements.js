/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    
  const max = Math.max(...nums)
  const min = Math.min(...nums)

let arr = []

for(let i = min ;i<= max ; i++){
  if (!nums.includes(i)) {
      arr.push(i);
    }
}

return arr
};