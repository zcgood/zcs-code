/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = []
    if (nums == null || nums.length < 4) {
        return res;
    }
    let len = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }
        for (let k = i + 1; k < len - 2; k++) {
            if (k > i + 1 && nums[k] === nums[k - 1]) {
                continue;
            }
            if (nums[i] + nums[k] + nums[k + 1] + nums[k + 2] > target) {
                break;
            }
            if (nums[i] + nums[k] + nums[len - 2] + nums[len - 1] < target) {
                continue;
            }
            let l = k + 1,
                r = len - 1;
            while (l < r) {
                let sum = nums[i] + nums[k] + nums[l] + nums[r]
                if (sum === target) {
                    res.push([nums[i], nums[k], nums[l], nums[r]])
                    while (l < r && nums[l] === nums[l + 1]) {
                        l++
                    }
                    l++;
                    while (l < r && nums[r] === nums[r - 1]) {
                        r--
                    }
                    r--;
                } else if (sum < target) {
                    l++
                } else {
                    r--
                }
            }
        }

    }
    return res
};

let nums = [1, 0, -1, 0, -2, 2]
let ans = fourSum(nums, 0)
console.log(ans)