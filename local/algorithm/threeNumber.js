function findThree(arr, target) {
    arr.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < arr.length - 2; i ++) {
      if(i && arr[i] === arr[i - 1]) continue;
      let left = i + 1;
      let right = arr.length - 1;

      while(left < right) {
        let sum = arr[i] + arr[left] + arr[right];
        if(sum > target) {
          right --;
        } else if(sum < target) {
          left ++;
        } else {
          result.push([arr[i], arr[left++], arr[right--]]);
          while(arr[left] === arr[left - 1]) {
            left ++;
          }
          while(arr[right] === arr[right + 1]) {
            right --;
          }
        }
      }
    }
    return result;
  }

const res = findThree([5, 2, 1, 1, 3, 4, 6], 8);
console.log('res', res);