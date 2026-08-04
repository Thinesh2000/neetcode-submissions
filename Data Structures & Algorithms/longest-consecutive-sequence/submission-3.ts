class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);

        let maxStreak = 0;
        for(const num of nums) {
            if(numSet.has(num-1)) continue;

            let streak = 1;
            while(numSet.has(num+streak)) {
                streak++;
            }
            maxStreak = Math.max(maxStreak, streak);
        }

        return maxStreak;
    }
}
