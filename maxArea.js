/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0,
        r = height.length
    let area = 0
    while (l < r) {
        let temp = 0
        if (height[l] < height[r]) {
            temp = (r - l) * height[l]
            l++
        } else {
            temp = (r - l) * height[r]
            r--
        }
        if (temp > area) {
            area = temp
        }
    }
    return area
};