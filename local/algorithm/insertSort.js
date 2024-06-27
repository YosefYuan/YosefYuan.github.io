function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i;
        let target = arr[j];
        while(j > 0 && arr[j - 1] > target) {
            arr[j] = arr[j - 1];
            j --;
        }
        arr[j] = target;
        return arr;
    }
}
let arr = [1,24,3,25,4,3];
const newArr = insertSort(arr);
console.log('newArr',newArr);
