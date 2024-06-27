function merge(left, right) {
    let [l, r] = [0, 0];
    let result = [];
    while(l < left.length && r < right.length) {
        if(left[l] < right[r]) {
            result.push(left[l]);
            l ++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    return [...result, ...left.slice(l, left.length), ...right.slice(r, right.length)];
}

function mergeSort(arr) {
    let len = arr.length;

    if(len <= 1) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
}


let arr = [1,24,3,25,4,3];
const newArr = mergeSort(arr);
console.log('newArr',newArr);
