class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const n = board.length;

        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const squares = new Map<number, Set<string>>();
        // loop rows
        for(let r=0; r<n; r++) {
            for(let c=0; c<n; c++) {
                const value = board[r][c];

                const squareIdx = (Math.floor(r/3) * 3) + Math.floor(c/3);

                // invalid board
                if(rows.get(r)?.has(value) || cols.get(c)?.has(value) || squares.get(squareIdx)?.has(value)) {
                    return false;
                }

                if (value === ".") continue;

                rows.set(r, new Set(rows.get(r) ?? []).add(value));
                cols.set(c, new Set(cols.get(c) ?? []).add(value));
                squares.set(squareIdx, new Set(squares.get(squareIdx) ?? []).add(value));
            }
        }

        return true;
    }
 }
