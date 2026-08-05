class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const n = numbers.length;

    let i = 0,
      j = n - 1;
    let sum = numbers[i] + numbers[j];
    while (i < j && sum !== target) {
      if (sum < target) i++;
      else j--;

      sum = numbers[i] + numbers[j];
    }

    return [i+1, j+1];
    }
}
