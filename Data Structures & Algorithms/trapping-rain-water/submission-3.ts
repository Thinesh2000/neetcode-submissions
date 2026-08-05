class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;

        const rightMax: number[] = Array.from({length: n}, () => 0);
        for (let i = n - 1; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i+1] ?? 0, height[i]);
        }

        let leftMax = height[0];
        return height.reduce((acc, ht, i) => {
            const minHeight = Math.min(leftMax, rightMax[i]);
            leftMax = Math.max(leftMax, ht)
            if (minHeight <= ht) return acc;
            return acc + (minHeight - ht);
        }, 0);
  }
}
