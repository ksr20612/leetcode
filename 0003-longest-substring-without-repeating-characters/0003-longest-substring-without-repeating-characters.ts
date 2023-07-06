function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    for(let right=0; right<s.length; right++) {
        const array = s.slice(left, right + 1).split("");
        const set = new Set(array);
        if(array.length !== set.size) {
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};