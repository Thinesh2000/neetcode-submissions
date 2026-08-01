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

        const result:number[] = [...numMap.entries()].sort((a, b) => b[1]-a[1]).map(i => i[0]).slice(0, k);

        return result;
    }
}
