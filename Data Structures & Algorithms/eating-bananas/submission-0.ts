class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
    const maxRate = Math.max(...piles);

    let min = 1,
      max = maxRate;
    let minRate = Infinity;
    while (min <= max) {
      const rate = Math.floor(min + (max - min) / 2);

      let hours = 0;
      for (const pile of piles) {
        hours += Math.ceil(pile / rate);
      }

      if (hours > h) {
        min = rate + 1;
      } else {
        minRate = Math.min(minRate, rate);
        max = rate - 1;
      }
    }

    return minRate;
  }
}
