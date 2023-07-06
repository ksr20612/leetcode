async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    const value1 = await promise1;
    const value2 = await promise2;
    return new Promise((res) => res(value1 + value2));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */