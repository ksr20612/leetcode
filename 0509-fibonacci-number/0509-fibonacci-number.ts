const dp = [];

function fib(n: number): number {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(dp[n]) return dp[n];
    return dp[n] = fib(n-1) + fib(n-2);
};