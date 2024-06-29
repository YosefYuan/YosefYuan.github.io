function lengthOfLis(nums) {
    if(!nums.length) return 0;
    let dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j ++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let max = Math.max(...dp);
    let result = [];
    for(let i = max; i >= 1; i--) {
        findArrNode(dp, i, result, nums);
    }
    return result;
}

function findArrNode(dp, value, result, arr) {
    let index = dp.lastIndexOf(value);
    result.unshift(arr[index]);
    dp.length = index + 1;
}

const nums = [3,5,7,1,2,8];
const result = lengthOfLis(nums);
console.log('result', result);
