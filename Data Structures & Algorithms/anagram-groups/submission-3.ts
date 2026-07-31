class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map();
        for(const str of strs) {
            const alphaArray = Array.from({length: 26}, () => 0);
            for(const char of str) {
                alphaArray[char.charCodeAt(0)-97]++;
            }


            const hashCode = alphaArray.map((i, j) => `${j}${i}`).join('-')
            hashMap.set(hashCode, [...(hashMap.get(hashCode) ?? []), str])
        }

        const result: string[][] = []
        for(const value of hashMap.values()) {
            result.push(value)
        }

        return result;
    }
}
