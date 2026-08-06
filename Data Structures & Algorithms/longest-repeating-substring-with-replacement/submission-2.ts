class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const n = s.length;

        const charMap = new Map<string, number>();
        let maxLength = 0;
        let l = 0,
        r = 0;
        while (r < n) {
            charMap.set(s[r], (charMap.get(s[r]) ?? 0) + 1);

            while (r - l + 1 - Math.max(...charMap.values()) > k) {
                charMap.set(s[l], charMap.get(s[l])! - 1);
                l++;
            }

            maxLength = Math.max(maxLength, r - l + 1);
            r++;
        }

        return maxLength;
  }
}
