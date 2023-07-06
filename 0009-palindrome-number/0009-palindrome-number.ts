function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    if(x < 10) return true;
    const xStringified = x.toString();
    
    for(let i=0; i<Math.floor(xStringified.length/2); i++) {
        if(xStringified[i] !== xStringified[xStringified.length - 1 - i]) return false;
    }
    return true;
};