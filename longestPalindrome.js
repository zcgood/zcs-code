let longestPalindrome = function(s) {
    let max = ''

    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i + 1)
    }

    function helper(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }

        const maxStr = s.slice(l + 1, r + 1 - 1);
        if (maxStr.length > max.length) max = maxStr

    }
    return max
}



let longestPalindrome2 = function(s) {
    let len = s.length
    if (len < 2) {
        return s
    }

    let maxLen = 1;
    let begin = 0;
    let dp = new Array(len).fill(new Array(len))
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    let charArr = s.split("")
    for (let l = 1; l <= len; l++) {
        for (let i = 0; i < len; i++) {
            let j = l + i - 1;
            if (j >= len) {
                break;
            }

            if (charArr[i] != charArr[j]) {
                dp[i][j] = false
            } else {
                if (j - 1 < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            if (dp[i][j] && j - i + i > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}