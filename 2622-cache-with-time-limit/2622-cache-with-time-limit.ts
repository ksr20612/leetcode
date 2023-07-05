class TimeLimitedCache {
    private table: { [k: number]: number } = {};
    private timeoutTable: { [k: number]: ReturnType<typeof setTimeout> } = {};
    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        if(this.table.hasOwnProperty(key)) {
            this.table[key] = value;
            clearTimeout(this.timeoutTable[key]);
            this.timeoutTable[key] = setTimeout(() => {
                delete this.table[key];
            }, duration);
            return true;
        }else {
            this.table[key] = value;
            this.timeoutTable[key] = setTimeout(() => {
                delete this.table[key];
            }, duration);
            return false;
        }
    }

    get(key: number): number {
        if(this.table.hasOwnProperty(key)) {
            return this.table[key];
        }else {
            return -1;
        }
    }

	count(): number {
        return Object.keys(this.table).length;
    }
}