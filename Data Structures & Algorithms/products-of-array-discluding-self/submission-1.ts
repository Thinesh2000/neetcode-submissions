class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;

        const leftSum = Array.from({length: n}, () => 1);
        const rightSum = Array.from({length: n}, () => 1);
        for(let i=0; i<n; i++) {
            rightSum[n-i-1] = (rightSum[n-i] ?? 1) * nums[n-i-1];
            leftSum[i] = (leftSum[i-1] ?? 1) * nums[i];
        }

        return nums.map((num, idx) => (leftSum[idx-1] ?? 1) * (rightSum[idx+1] ?? 1))
    }
}
