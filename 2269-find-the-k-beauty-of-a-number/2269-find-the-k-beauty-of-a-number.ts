function divisorSubstrings(num: number, k: number): number {
    let index = 0;
    let result = 0;
    let numString = num.toString();
    while(index + k - 1 < numString.length) {
        const substring = +(numString.slice(index, index+k));
        if(num % substring === 0) result++;
        index++;
    }
    return result;
};