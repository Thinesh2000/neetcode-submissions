class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const n = nums.length;
        if (n < k) {
            return [];
        }

        let maxStack: number[] = [];
        let r = 0;
        while (r < k) {
            while (maxStack.length && nums[r] > nums[maxStack.at(-1)!]) {
                maxStack.pop();
            }
            maxStack.push(r);
            r++;
        }

        let result = [];
        result.push(nums[maxStack[0]]);

        let l = 0;
        while (r < n) {
            if (l === maxStack[0]) {
                maxStack.shift();
            }

            while (maxStack.length && nums[r] > nums[maxStack.at(-1)!]) {
                maxStack.pop();
            }
            maxStack.push(r);

            result.push(nums[maxStack[0]]);

            l++;
            r++;
        }

        return result;
    }
}
