function selectSort(arr) {
    let index;
    for(let i = 0; i< arr.length - 1; i++) {
        index = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[index]) {
                index = j;
            }
        }
        if(index !== i) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
}

let arr = [1,24,3,25,4,3];
const newArr = selectSort(arr);
console.log('newArr',newArr);