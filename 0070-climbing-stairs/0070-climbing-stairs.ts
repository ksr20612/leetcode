const dp = [];

function climbStairs(n: number): number {
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(dp[n]) return dp[n];
    return dp[n] = climbStairs(n-2) + climbStairs(n-1);
};

