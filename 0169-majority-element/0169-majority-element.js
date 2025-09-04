/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map ={}
    for(let i = 0 ; i< nums.length;i++){
          map[nums[i]]= (map[nums[i]]|0)+1
   if(map[nums[i]]>Math.floor(nums.length/2))return nums[i]
    }
};