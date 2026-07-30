class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const compMap:Record<number, number> = {};

        for(let i=0; i<nums.length; i++) {
            const num = nums[i];
            const complement = target - nums[i];

            if(compMap[complement] !== undefined) {
                return [compMap[complement], i];
            }
            
            compMap[num] = i;
        }

        return [];
    }
}
