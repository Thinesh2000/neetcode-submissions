class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number, l = 0, r = nums.length - 1): number {
        if (l > r) return -1;

        const mid = Math.floor(l + (r - l) / 2);

        if (nums[mid] === target) return mid;

        // left increasing
        if (nums[mid] >= nums[l]) {
            if (target >= nums[l] && target < nums[mid]) {
                return this.search(nums, target, l, mid - 1);
            } else {
                return this.search(nums, target, mid + 1, r);
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                return this.search(nums, target, mid + 1, r);
            } else {
                return this.search(nums, target, l, mid - 1);
            }
        }
    }
}
