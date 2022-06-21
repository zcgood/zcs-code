// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。



// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4


// 提示：

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let len = nums.length;
    const targetIndex = len - k;
    let left = 0,
        right = len - 1;

    while (left < right) {
        const index = partition(nums, left, right);
        if (index === targetIndex) {
            return nums[index];
        } else if (index < targetIndex) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

    return nums[left];
};

const partition = (nums, start, end) => {
    let piovt = nums[start]
    while (start < end) {
        while (start < end && nums[end] >= piovt) {
            end--;
        }
        nums[start] = nums[end];
        while (start < end && nums[start] < piovt) {
            start++;
        }
        nums[end] = nums[start]
    }
    nums[start] = piovt
    return start
}