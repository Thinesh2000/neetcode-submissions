class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(
        nums: number[],
        target: number,
        left: number = 0,
        right: number = nums.length - 1,
    ): number {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        if (left >= right) return -1;

        if (nums[mid] < target) {
            return this.search(nums, target, mid + 1, right);
        } else {
            return this.search(nums, target, left, mid - 1);
        }
    }
}
