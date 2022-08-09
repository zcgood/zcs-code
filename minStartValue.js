/**
 * @param {number[]} nums
 * @return {number}
 */

// 贪心 要保证所有的累加和 \textit{accSum}accSum 满足 \textit{accSum} + \textit{startValue} \ge 1accSum+startValue≥1，
//     只需保证累加和的最小值 \textit{accSumMin}accSumMin 满足 \textit{accSumMin} + \textit{startValue} \ge 1accSumMin+startValue≥1，
//     那么 \textit{startValue}startValue 的最小值即可取 -\textit{accSumMin} + 1−accSumMin+1。

var minStartValue = function(nums) {
    let sum = 0
    let min = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        if (sum < min) {
            min = sum
        }
    }

    return Math.abs(min) + 1
};


// 二分查找

// 当 \textit{nums}nums 所有元素均为非负数时，可以直接返回 11。当有负数时，可以

// 当某个数字满足 \textit{startValue}startValue 的要求时，比它大的数字肯定也都满足，比它小的数字则不一定能满足，
// 因此 \textit{startValue}startValue 的性质具有单调性，此题可以用二分查找来解决。二分查找的左起始点为 11，
// 右起始点可以设为 \textit{nums}nums 的最小值的相反数乘上长度后再加 11，这样可以保证右端点一定满足 \textit{startValue}startValue 的要求。

// 判断某个数字是否满足 \textit{startValue}startValue 的要求时，可以将 \textit{nums}nums 的数字逐步加到这个数字上，判断是否一直为正即可。

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/solution/zhu-bu-qiu-he-de-dao-zheng-shu-de-zui-xi-vyrt/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


var minStartValue = function(nums) {
    const m = _.min(nums);
    if (m >= 0) {
        return 1;
    }
    let left = 1,
        right = -m * nums.length + 1;
    while (left < right) {
        const medium = Math.floor((left + right) / 2);
        if (valid(medium, nums)) {
            right = medium;
        } else {
            left = medium + 1;
        }
    }
    return left;
};

const valid = (startValue, nums) => {
    for (const num of nums) {
        startValue += num;
        if (startValue <= 0) {
            return false;
        }
    }
    return true;
}