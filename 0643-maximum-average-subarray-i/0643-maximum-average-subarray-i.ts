function findMaxAverage(nums: number[], k: number): number {
    let maxSum = 0;
    let tempSum = 0;
    
    // #1 default
    for(let i=0; i<k; i++) {
        maxSum += nums[i];
    }
    tempSum = maxSum;
    
    // #2 sliding window
    for(let i=0; i<nums.length - k; i++) {
        tempSum = tempSum - nums[i] + nums[i + k];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum / k;
};