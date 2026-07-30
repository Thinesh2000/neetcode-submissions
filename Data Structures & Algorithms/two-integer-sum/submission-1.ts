class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number[]>();

        nums.forEach((num, idx) => {
            numMap.set(num, [...(numMap.get(num) ?? []), idx]);
        })

        console.log(numMap);

        for(let i=0; i<nums.length; i++) {
            if(numMap.has(target - nums[i])) {
                const indexes = numMap.get(target - nums[i])

                // diff in same index;
                if(target-nums[i] === nums[i] && indexes.length===1) {
                    continue;
                } 

                return [i, indexes.at(-1)]
            }
        }
    }
}
