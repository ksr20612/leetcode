function longestSubarray(nums: number[]): number {
    let start = 0;
    let numZeroes = 0;
    let longestWindow = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) numZeroes++;
        while(numZeroes > 1) {
            if(nums[start] === 0) numZeroes--;
            start++;
        }
        longestWindow = Math.max(longestWindow, i - start);
    }
    return longestWindow;
};