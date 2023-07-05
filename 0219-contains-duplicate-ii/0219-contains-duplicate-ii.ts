function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const set = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		if (i > k) 
			set.delete(nums[i - k - 1]); 
		
		if (!set.has(nums[i])) 
            set.add(nums[i]);
        else
            return true;
	}
	
	return false;
};