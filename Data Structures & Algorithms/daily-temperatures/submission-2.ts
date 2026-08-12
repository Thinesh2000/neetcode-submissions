class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: number[] = []; // store indices

        let result = Array.from({ length: temperatures.length }, () => 0);
        for (const [i, t] of temperatures.entries()) {
            while (stack.length && t > temperatures[stack.at(-1)!]) {
                let popped = stack.pop()!;
                result[popped] = i - popped;
            }
            stack.push(i);
        }

        return result;
    }
}
