/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}

    for(let i = 0 ; i < nums.length ; i++){
        map[nums[i]] = (map[nums[i]] || 0)+1
    }


    for(let key in map){
        if(map[key]> 1)return true
    }

    return false
};