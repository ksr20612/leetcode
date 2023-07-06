function sortBy(arr: any[], fn: Function): any[] {
    const result = arr.sort((a, b) => fn(a) - fn(b));
    return result;
};