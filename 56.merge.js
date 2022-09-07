/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    console.log(intervals)
    let res = []
    let i = 0;
    let len = intervals.length
    while (i < len) {
        let tempArr = intervals[i]
        let j = i + 1
        while (j < len) {
            if (tempArr[1] >= intervals[j][0]) {
                let temp = [tempArr[0], tempArr[1], intervals[j][0], intervals[j][1]]
                temp.sort((a, b) => {
                    return a - b
                })
                tempArr = [temp[0], temp[3]]
                j++
            } else {
                break;
            }
        }
        res.push(tempArr)
        i = j
    }
    return res
};

let intervals = [
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
]
console.log(merge(intervals))

// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。



// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。


// 提示：

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104