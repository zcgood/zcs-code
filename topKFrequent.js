// 347. 前 K 个高频元素
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for (let item of nums) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    const arr = [...map].sort((a, b) => b[1] - a[1])
    const result = []
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }
    return result;
};


// 方法二、堆
class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator // 比较器
        this.heapify(); // 堆化
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i); // bubbleDown操作
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0]; // 查看堆顶
    }

    offer(value) {
        this.data.push(value); // 加入数组
        this.bubbleUp(this.size() - 1); //调整加入的元素在小顶堆中的位置
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last; // 交换第一个元素和最后一个元素
            this.bubbleDown(0); // bubbleDown操作
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1; //父节点的位置
            //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex); //交换自己和父节点的位置
                index = parentIndex; //不断向上取父节点比较
            } else {
                break; //如果当前元素比父节点的元素大，不需要处理。
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1; //最后一个节点的位置
        while (true) {
            const leftIndex = index * 2 + 1; //左节点的位置
            const rightIndex = index * 2 + 2; //右节点的位置
            let findIndex = index; //bubbleDown节点的位置
            //找出左右节点中value小的节点
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex
            }
            if (index !== findIndex) {
                this.swap(index, findIndex); // 交换当前元素和左右节点中value小的
                index = findIndex
            } else {
                break;
            }
        }
    }

    swap(index1, index2) { // 交换堆中两个元素的位置
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
    }

    size() {
        return this.data.length
    }
}

var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const priorityQueue = new Heap((a, b) => a[1] - b[1])

    //entry 是一个长度为2的数组，0位置存储key，1位置存储value
    for (const entry of map.entries()) {
        priorityQueue.offer(entry); //加入堆
        if (priorityQueue.size() > k) {
            //堆的size超过k时，出堆
            priorityQueue.poll()
        }
    }
    const ret = []
    for (let i = priorityQueue.size() - 1; i >= 0; i--) {
        //取出前k大的数
        ret[i] = priorityQueue.poll()[0];

    }

    return ret;
}