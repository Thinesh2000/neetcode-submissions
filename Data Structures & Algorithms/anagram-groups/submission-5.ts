class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map<string, string[]>
        for(const str of strs) {
            const sortedStr = str.split('').sort().join('');

            anagramMap.set(sortedStr, [...anagramMap.get(sortedStr)?? [], str]);
        }

        return [...anagramMap.values()];
    }
}
