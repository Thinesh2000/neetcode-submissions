class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    const s1Map = new Map<string, number>();
    for (const char of s1) {
      s1Map.set(char, (s1Map.get(char) ?? 0) + 1);
    }

    const n = s2.length;
    let s2Map = new Map();
    let l = 0,
      r = 0;
    while (r < n) {
      const char = s2[r];
      if (!s1Map.has(char)) {
        r++;
        l = r;
        s2Map.clear();
        continue;
      }

      s2Map.set(char, (s2Map.get(char) ?? 0) + 1);

      while (s1Map.get(char)! < s2Map.get(char)) {
        s2Map.set(s2[l], s2Map.get(s2[l]) - 1);
        l++;
      }

      if (r - l + 1 === s1.length) return true;
      r++;
    }

    return false;
  }
}