class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[], l = 0, r = nums.length - 1): number {
        if (l === r) return nums[l];

        const mid = Math.floor(l + (r - l) / 2);

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }

        return this.findMin(nums, l, r);
    }
}
