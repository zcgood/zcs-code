// 680. 验证回文字符串 Ⅱ
// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。



// 示例 1:

// 输入: s = "aba"
// 输出: true
// 示例 2:

// 输入: s = "abca"
// 输出: true
// 解释: 你可以删除c字符。
// 示例 3:

// 输入: s = "abc"
// 输出: false


// 提示:

// 1 <= s.length <= 105
// s 由小写英文字母组成


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let arr = Array.from(s)
    let left = 0,
        right = s.length - 1
    while (left <= right) {
        if (arr[left] === arr[right]) {
            left++
            right--
        } else {
            return deal(arr, left + 1, right) || deal(arr, left, right - 1)
        }
    }
    return true
};
const deal = function(newArr, left, right) {
    let i = left,
        j = right
    for (i, j; i < j; i++, j--) {
        if (newArr[i] != newArr[j]) {
            return false
        }
    }
    return true
}