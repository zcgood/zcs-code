/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    while (x !== 0) {
        let num = x % 10
        if (res > 214748364 || (res === 214748364 && num > 7)) {
            return 0;
        }
        if (res < -214748364 || (res === -214748364 && num < -8)) {
            return 0;
        }
        res = res * 10 + num
        x = parseInt(x / 10)
        console.log(res, x)
    }
    return res
};
let x = 123
console.log(reverse(x))


// 7. 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。


// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0


// 提示：

// -231 <= x <= 231 - 1