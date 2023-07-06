function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let max = Number.MAX_SAFE_INTEGER;
    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while(sum >= target) {
            max = Math.min(max, right - left + 1);
            sum = sum - nums[left];
            left++;
        }
    }
    return max === Number.MAX_SAFE_INTEGER? 0 : max;
};