class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;

        let maxArea = 0;
        let l = 0,
        r = n - 1;
        while (l < r) {
        const a = heights[l],
            b = heights[r];
        const area = (r - l) * Math.min(a, b);

        maxArea = Math.max(maxArea, area);

        if (a < b) {
            l++;
        } else if (a > b) {
            r--;
        } else {
            l++;
            r--;
        }
        }

    return maxArea;
  }
}
