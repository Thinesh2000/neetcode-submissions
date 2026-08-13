class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let stack: number[] = [];
        let maxArea = 0;
        for (const [i, h] of heights.entries()) {
            while (stack.length && h <= heights[stack.at(-1)!]) {
                const popped: number = stack.pop()!;
                const left = popped - ((stack.at(-1) ?? -1) + 1);
                const right = i - popped;
                const area = (left + right) * heights[popped];
                maxArea = Math.max(area, maxArea);
            }

            stack.push(i);
        }

        let l = 0;
        while (l < stack.length) {
            const left = stack[l] - ((stack[l - 1] ?? -1) + 1);
            const right = heights.length - stack[l];
            const area = (left + right) * heights[stack[l]];
            maxArea = Math.max(area, maxArea);
            l++;
        }

        return maxArea;
    }
}
