function quickSort(list) {
    if(list.length <= 1) return list;
    let mid = Math.floor(list.length / 2);
    let base = list.splice(mid, 1)[0];
    let left = [];
    let right = [];
    list.forEach(element => {
        if(element > base) {
            right.push(element);
        } else {
            left.push(element);
        }
    });
    return [...quickSort(left), base, ...quickSort(right)];
}


let arr = [1,24,3,25,4,3];
const newArr = quickSort(arr);
console.log('newArr',newArr);
