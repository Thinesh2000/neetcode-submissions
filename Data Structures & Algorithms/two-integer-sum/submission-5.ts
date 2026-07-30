class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const compMap: Record<number, number> = {};

        for(let i=0; i<nums.length; i++) {
            const num = nums[i];
            const complement = target - num;

            const existingComplement = compMap[complement];
            if(existingComplement !== undefined) {
                return [existingComplement, i];
            }
            
            compMap[num] = i;
        }

        return [];
    }
}
