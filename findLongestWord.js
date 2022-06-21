// 524. 通过删除字母匹配到字典里最长单词
// 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

// 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。



// 示例 1：

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
// 示例 2：

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"


// 提示：

// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s 和 dictionary[i] 仅由小写英文字母组成

// 最长子序列

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let res = ''
    for (const t of dictionary) {
        let i = 0,
            j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            if (t.length > res.length || (t.length === res.length && t < res)) {
                res = t
            }
        }
    }
    return res
};


// 方法二,排序法
// 在方法一的基础上，我们尝试通过对 \textit{dictionary}dictionary 的预处理，来优化第 22 个问题的处理。

// 我们可以先将 \textit{dictionary}dictionary 依据字符串长度的降序和字典序的升序进行排序，然后从前向后找到第一个符合条件的字符串直接返回即可。

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/solution/tong-guo-shan-chu-zi-mu-pi-pei-dao-zi-di-at66/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var findLongestWord = function(s, dictionary) {
    dictionary.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word1.length - word2.length
        } else {
            return word1.localeCompare(word2)
        }
    })
    for (const t of dictionary) {
        let i = 0,
            j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === j[i]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            return t;
        }
    }
    return ''
}

// 方法三 动态规划
// 在方法一的基础上，我们考虑通过对字符串 ss 的预处理，来优化第 11 个问题的处理。

// 考虑前面的双指针的做法，我们注意到我们有大量的时间用于在 ss 中找到下一个匹配字符。

// 这样我们通过预处理，得到：对于 ss 的每一个位置，从该位置开始往后每一个字符第一次出现的位置。

// 我们可以使用动态规划的方法实现预处理，令 f[i][j]f[i][j] 表示字符串 ss 中从位置 ii 开始往后字符 jj 第一次出现的位置。在进行状态转移时，如果 ss 中位置 ii 的字符就是 jj，那么 f[i][j]=if[i][j]=i，否则 jj 出现在位置 i+1i+1 开始往后，即 f[i][j]=f[i+1][j]f[i][j]=f[i+1][j]；因此我们要倒过来进行动态规划，从后往前枚举 ii。


// 假定下标从 00 开始，那么 f[i][j]f[i][j] 中有 0 \leq i \leq m-10≤i≤m−1 ，对于边界状态 f[m-1][..]f[m−1][..]，我们置 f[m][..]f[m][..] 为 mm，让 f[m-1][..]f[m−1][..] 正常进行转移。这样如果 f[i][j]=mf[i][j]=m，则表示从位置 ii 开始往后不存在字符 jj。

// 这样，我们可以利用 ff 数组，每次 O(1)O(1) 地跳转到下一个位置，直到位置变为 mm 或 tt 中的每一个字符都匹配成功。

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/solution/tong-guo-shan-chu-zi-mu-pi-pei-dao-zi-di-at66/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var findLongestWord = function(s, dictionary) {
    const m = s.length
    const f = new Array(m + 1).fill(0).map(() => new Array(26).fill(m));

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (s[i] === String.fromCharCode('a'.charCodeAt() + j)) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j]
            }
        }
    }
    let res = '';
    for (const t of dictionary) {
        let match = true;
        let j = 0;
        for (let i = 0; i < t.length; ++i) {
            if (f[j][t[i].charCodeAt() - 'a'.charCodeAt()] === m) {
                match = false;
                break;
            }
            j = f[i][t[i].charCodeAt() - 'a'.charCodeAt()] + 1;
        }
        if (match) {
            if (t.length > res.length || (t.length === res.length && t.localeCompare(res) < 0)) {
                res = t;
            }
        }
    }
    return res;
}



var findLongestWord = function(s, dictionary) {
    const m = s.length;
    const f = new Array(m + 1).fill(0).map(() => new Array(26).fill(m));

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (s[i] === String.fromCharCode('a'.charCodeAt() + j)) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j];
            }
        }
    }
    let res = "";
    for (const t of dictionary) {
        let match = true;
        let j = 0;
        for (let i = 0; i < t.length; ++i) {
            if (f[j][t[i].charCodeAt() - 'a'.charCodeAt()] === m) {
                match = false;
                break;
            }
            j = f[j][t[i].charCodeAt() - 'a'.charCodeAt()] + 1;
        }
        if (match) {
            if (t.length > res.length || (t.length === res.length && t.localeCompare(res) < 0)) {
                res = t;
            }
        }
    }
    return res;
};