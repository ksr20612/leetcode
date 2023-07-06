type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const cachedAnswers = {};
    return function(...args) {
        if(cachedAnswers[args.toString()] !== undefined) return cachedAnswers[args.toString()]; 
        const result = fn(...args);
        cachedAnswers[args.toString()] = result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */