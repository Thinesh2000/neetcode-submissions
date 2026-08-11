class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";

        const needMap = new Map<string, number>();
        for (const char of t) {
            needMap.set(char, (needMap.get(char) ?? 0) + 1);
        }

        let l = 0,
            r = 0;
        while (r < s.length && !needMap.has(s[r])) {
            r++;
            l = r;
        }

        const haveMap = new Map<string, number>();
        let needCount = needMap.size,
            haveCount = 0;
        let minIndex = [-Infinity, Infinity];
        while (r < s.length) {
            const char = s[r];

            if (!needMap.has(char)) {
                r++;
                continue;
            }

            const count = (haveMap.get(char) ?? 0) + 1;
            haveMap.set(char, count);

            if (count === needMap.get(s[r])) {
                haveCount++;
            }

            while (haveCount === needCount) {
                if (haveMap.has(s[l])) {
                    if (minIndex[1] - minIndex[0] > r - l + 1) {
                        minIndex = [l, r + 1];
                    }

                    const update = haveMap.get(s[l])! - 1;
                    if (update < needMap.get(s[l])!) haveCount--;
                    haveMap.set(s[l], update);
                }
                l++;
            }

            r++;
        }

        return minIndex[1] === Infinity ? "" : s.substring(minIndex[0], minIndex[1]);
    }
}
