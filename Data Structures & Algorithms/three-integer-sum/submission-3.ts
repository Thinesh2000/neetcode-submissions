class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
    const n = nums.length;

    nums = nums.sort((a, b) => a - b);

    const result: number[][] = [];
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let l = i + 1, r = n - 1;
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];

        if (sum === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) l++;
          while (l < r && nums[r] === nums[r + 1]) r--;
        } else if (sum < 0) {
          l++;
        } else {
          r--;
        }
      }
    }

    return result;
  }
}
