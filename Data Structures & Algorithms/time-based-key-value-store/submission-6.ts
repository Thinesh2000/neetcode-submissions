type StampMap = Map<number, string>;
class TimeMap {
    keyStore;
    constructor() {
        this.keyStore = new Map<string, StampMap>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const timeMap: StampMap = this.keyStore.has(key)
            ? (this.keyStore.get(key) as StampMap)
            : (new Map() as StampMap);
        timeMap.set(timestamp, value);
        this.keyStore.set(key, timeMap);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const timeMap: StampMap = this.keyStore.get(key) as StampMap;
        if(timeMap.has(timestamp)) return timeMap.get(timestamp);

        const timeStamps = [...timeMap.keys()];
        if (timeStamps[0] > timestamp) return "";

        const foundStamp = this.search(timeStamps, timestamp);
        return timeMap.get(foundStamp)!;
    }

    search(nums: number[], target: number, l = 0, r = nums.length - 1): number {
        if (l === r) return nums[l];

        const mid = Math.floor(l + (r - l) / 2);

        if (nums[mid] < target) {
            if ((nums[mid + 1] ?? Infinity) > target) {
                return nums[mid];
            }

            return this.search(nums, target, mid + 1, r);
        }
        
        return this.search(nums, target, l, mid - 1);
    }
}
