function lengthOfLongestSubstring(s: string): number {
    let hash = new Set()
    let right = -1, ans = 0
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            hash.delete(s.charAt(i - 1))
        }
        while (right + 1 < s.length && !hash.has(s.charAt(right + 1))) {
            hash.add(s.charAt(right + 1))
            ++right
        }
        ans = Math.max(ans, right - i + 1)
    }
    return ans
};

// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成