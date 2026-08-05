class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;

        const leftMax: number[] = [height[0]];
        const rightMax: number[] = [height[n - 1]];
        for (let i = 1, j = n - 2; i < n && j >= 0; i++, j--) {
            leftMax.push(Math.max(leftMax.at(-1)!, height[i]));
            rightMax.unshift(Math.max(rightMax[0], height[j]));
        }

        return height.reduce((acc, _, i) => {
            const minHeight = Math.min(leftMax[i], rightMax[i]);
            if (minHeight <= height[i]) return acc;
            return acc + (minHeight - height[i]);
        }, 0);
  }
}
