/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {

    if (nums.length < 2) {
        return nums
    }
    const findSum = (arr) => {
        let sum = 0
        arr.forEach(item => {
            sum = sum + item
        })
        return sum
    }
    let newArr = []
    let sum1 = 0,
        sum2 = 0;
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums)

    while (sum1 <= sum2) {
        newArr.push(nums.pop())
        sum1 = findSum(newArr)
        sum2 = findSum(nums)
    }

    return newArr
};



// var minSubsequence = function(nums) {
//     const total = _.sum(nums);
//     nums.sort((a, b) => a - b);
//     const ans = [];
//     let curr = 0;
//     for (let i = nums.length - 1; i >= 0; --i) {
//         curr += nums[i];
//         ans.push(nums[i]);
//         if (total - curr < curr) {
//             break;
//         }
//     }
//     return ans;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/solution/fei-di-zeng-shun-xu-de-zui-xiao-zi-xu-li-v7kr/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
let result = minSubsequence([4, 3, 10, 9, 8])
console.log(result)