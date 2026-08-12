class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const posSpeed = [];
        for (const [i, p] of position.entries()) {
            const time = (target - p) / speed[i];
            posSpeed.push([p, time]);
        }

        posSpeed.sort((a, b) => b[0] - a[0]);

        let fleets: number[] = [];
        for (const t of posSpeed) {
            if (t[1] > (fleets.at(-1) ?? -Infinity)) {
                fleets.push(t[1]);
            }
        }
        
        return fleets.length;
    }
}
