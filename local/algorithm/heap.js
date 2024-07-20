/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class Heap {
    constructor() {
        this.root = [];
    }

    heapifyDown(parent) {
        let leftChild = this.leftChild(parent);
        let rightChild = this.rightChild(parent);
        const maxHeap = this.root;
        const lastInd = maxHeap.length - 1;
        while(leftChild <= lastInd) {
            let shiftInd;
            if(rightChild <= lastInd && maxHeap[leftChild] < maxHeap[rightChild]) {
                shiftInd = rightChild;
            } else {
                shiftInd = leftChild;
            }
            if(maxHeap[parent] < maxHeap[shiftInd]) {
                [maxHeap[parent], maxHeap[shiftInd]] = [maxHeap[shiftInd], maxHeap[parent]];
                parent = shiftInd;
                leftChild = this.leftChild(parent);
                rightChild = this.rightChild(parent);
            } else {
                return;
            }
        }

    }

    buildheap(arr) {
        this.root = arr;
        const lastInd = arr.length - 1;
        const lastParent = this.parent(lastInd);
        for(let i = lastParent; i >= 0; i --) {
            this.heapifyDown(i);
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    remove() {
        const lastInd = this.root.length - 1;
        const maxHeap = this.root;
        [maxHeap[0], maxHeap[lastInd]] = [maxHeap[lastInd], maxHeap[0]];
        this.root.pop();
        this.heapifyDown(0);
    }

    max() {
        return this.root[0];
    }
}

var findKthLargest = function(nums, k) {
    const heap = new Heap();
    heap.buildheap(nums);
    for(let i = 0; i < k - 1; i ++) {
        heap.remove();
    }
    return heap.max();
};

const arrs = [3,5,2,5,6,3];
const res = findKthLargest(arrs, 3);
console.log('res', res);

