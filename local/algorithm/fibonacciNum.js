function fib(n) {
    if(n < 2) return 1;
    const dp = [1, 1];
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

const num = fib(10);
console.log('num', num);
