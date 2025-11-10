/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
        if (nums[i] != nums[j]) {
            j--
        } else if (nums[i] == nums[i+1] && j - i >= 2) {
            nums.splice(i,j-i-1)
            i++
        } else if (nums[i] == nums[j]) {
            i++
            j = nums.length - 1
        }
    }

    return

};