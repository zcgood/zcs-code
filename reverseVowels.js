// 345. 反转字符串中的元音字母
// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。



// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"


// 提示：

// 1 <= s.length <= 3 * 105
// s 由 可打印的 ASCII 字符组成

/** 
 * @description 个人解法
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = Array.from(s)
    let deArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let right = arr.length - 1
    let left = 0
    while (left < right) {
        if (deArr.includes(arr[left]) && deArr.includes(arr[right])) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++;
            right--;
        }
        if (!deArr.includes(arr[left])) {
            left++;
        }
        if (!deArr.includes(arr[right])) {
            right--;
        }

    }
    return arr.join('')
};



// 官方题解
var reverseVowels = function(s) {
    const n = s.length;
    const arr = Array.from(s);
    let i = 0,
        j = n - 1;
    while (i < j) {
        while (i < n && !isVowel(arr[i])) {
            ++i;
        }
        while (j > 0 && !isVowel(s[j])) {
            --j;
        }
        if (i < j) {
            swap(arr, i, j);
            ++i;
            --j;
        }
    }
    return arr.join('');
}

const isVowel = (ch) => {
    return "aeiouAEIOU".indexOf(ch) >= 0;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/reverse-vowels-of-a-string/solution/fan-zhuan-zi-fu-chuan-zhong-de-yuan-yin-2bmos/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。