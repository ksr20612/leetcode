const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(s: string): number {
    let value = 0;
    for(let i = 0; i < s.length; i+=1){
        Roman[s[i]] < Roman[s[i+1]] ? value -= Roman[s[i]]: value += Roman[s[i]]
    }
    return value
};