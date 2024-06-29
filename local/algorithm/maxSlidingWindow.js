function maxSlidingWindow(nums, k) {
  const window = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift();
    }
    for (let j = window.length - 1; j >= 0; j--) {
      if (nums[window[j]] <= nums[i]) {
        window.pop();
      }
    }
    window.push(i);
    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }
  return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const windows = maxSlidingWindow(nums, k);
console.log('windows', windows);
