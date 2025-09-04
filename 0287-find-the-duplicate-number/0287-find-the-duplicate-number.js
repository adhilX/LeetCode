/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map=new Map()
  for(let i of nums){
    if(map.has(i)){
        return i
    }else{
        map.set(i,1)
    }
  }
}