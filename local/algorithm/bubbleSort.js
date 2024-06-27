function bubbleSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i ++) {
        for(let j = 0; j < length - i - 1; j ++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [1,24,3,25,4,3];
const newArr = bubbleSort(arr);
console.log('newArr',newArr);