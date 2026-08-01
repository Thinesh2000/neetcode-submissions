class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap = new Map<number, number>();

        for(const num of nums) {
            numMap.set(num, (numMap.get(num) ?? 0)+1);
        }

        const buckets: number[][] = Array.from({length: nums.length+1}, () => []);

        numMap.forEach((value, key) => {
            buckets[value].push(key);
        })

        const result: number[] = [];
        for(let i=buckets.length-1; i>=0; i--) {
            result.push(...buckets[i]);
            if(result.length === k) return result;
        }

        return result;
    }
}
