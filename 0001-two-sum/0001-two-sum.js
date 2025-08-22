/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map =new Map()


  for(i=0; i< nums.length;i++){
        let compliment = target - nums[i]
    if(map.has(compliment)){
        console.log(map)
        return [map.get(compliment),i]
    }else{
        map.set(nums[i],i)
    }
  }
  return []
};

//2 :0
//2:1
