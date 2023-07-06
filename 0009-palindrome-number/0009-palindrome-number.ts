function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    if(x < 10) return true;
    
    let reverse = 0;
    let temp = x;
    while(temp != 0) {
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return reverse === x;
};