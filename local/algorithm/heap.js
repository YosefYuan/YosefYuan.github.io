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
        let leftInd = this.leftChild(parent);
        let rightInd = this.rightChild(parent);
        let maxHeap = this.root;
        let endindex = maxHeap.length - 1;
        while(leftInd <= endindex) {
            let indexToShift;
            if(rightInd <= endindex && maxHeap[rightInd] > maxHeap[leftInd]) {
                indexToShift = rightInd;
            } else {
                indexToShift = leftInd;
            }
            console.log('indexToShift', indexToShift);
            console.log('parent', parent);
            if(maxHeap[parent] < maxHeap[indexToShift]) {
                [maxHeap[parent], maxHeap[indexToShift]] = [
                    maxHeap[indexToShift],
                    maxHeap[parent]
                ];
                parent = indexToShift;
                leftInd = this.leftChild(parent);
                rightInd = this.rightChild(parent);
            } else {
                return;
            }
            console.log('leftInd', leftInd);
            console.log('rightInd', rightInd);
            console.log('endindex', endindex);
        }
    }

    buildheap(arr) {
        this.root = arr;
        const lastparent = this.parent(this.root.length - 1);
        console.log('lastparent', lastparent);
        for(let i = lastparent; i >= 0; i--) {
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
        const heap = this.root;
        [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
        heap.pop();
        this.heapifyDown(0);
    }

    max() {
        return this.root[0];
    }
}

var findKthLargest = function(nums, k) {
    let maxHeap = new Heap();
    maxHeap.buildheap(nums);
    for(let i = 0; i < k - 1; i ++) {
        maxHeap.remove();
    }
    return maxHeap.max();
};

const arrs = [3,5,2,5,6,3];
const res = findKthLargest(arrs, 3);
console.log('res', res);

