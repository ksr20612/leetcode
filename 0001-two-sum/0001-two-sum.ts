function twoSum(nums: number[], target: number): number[] {
    const valueMap = new Map();
    for(let i=0; i < nums.length; i++) {
        valueMap.set(nums[i], i);
    }
    for(let i=0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(valueMap.has(complement) && valueMap.get(complement) !== i) {
            return [i, valueMap.get(complement)]
        }
    }
};