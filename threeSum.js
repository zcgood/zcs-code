/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return
    }
    let res = []
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 || nums[i] === nums[i - 1]) continue;
        let r = nums.length - 1
        let target = -nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            while (j < r && nums[j] + nums[r] > target) {
                r--
            }
            if (j === r) {
                break;
            }
            if (nums[j] + nums[r] === target) {
                res.push([nums[i], nums[j], nums[r]])
            }
        }

    }
    return res;

};

var threeSum2 = function(nums) {
    let ans = []
    const len = nums.length
    if (nums === null || len < 3) return ans;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let L = i + 1
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                ans.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] === nums[L + 1]) L++;
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return ans
}