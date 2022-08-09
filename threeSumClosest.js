/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length
    nums.sort((a, b) => a - b)
    let closeSum = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1,
            r = n - 1
        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r]
            if (Math.abs(threeSum - target) < Math.abs(closeSum - target)) {
                closeSum = threeSum
            }
            if (threeSum > target) {
                while (l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                r--;
            } else if (threeSum < target) {
                while (l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                l++
            } else {
                return target
            }
        }
    }
    return closeSum
};