async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    return Promise.all([promise1, promise2]).then(values => values.reduce((prev, cur) => prev + cur ));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */