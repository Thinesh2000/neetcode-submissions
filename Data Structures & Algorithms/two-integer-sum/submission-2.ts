class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const compMap = new Map<number, number>();

        for(let i=0; i<nums.length; i++) {
            const num = nums[i];
            const complement = target - nums[i];

            if(compMap.has(complement)) {
                return [compMap.get(complement), i];
            }
            
            compMap.set(num, i);
        }
    }
}
