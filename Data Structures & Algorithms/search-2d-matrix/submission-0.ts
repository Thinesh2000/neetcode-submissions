class Solution {
    searchRow(
        row: number[],
        target: number,
        left: number = 0,
        right: number = row.length - 1,
    ): boolean {
        if (left > right) return false;

        const mid = left + Math.floor((right - left) / 2);

        if (row[mid] === target) return true;
        else if (target < row[mid]) return this.searchRow(row, target, left, mid - 1);
        else return this.searchRow(row, target, mid + 1, right);
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(
        matrix: number[][],
        target: number,
        top: number = 0,
        bottom: number = matrix.length - 1,
    ): boolean {
        if (top > bottom) return false;

        const mid = top + Math.floor((bottom - top) / 2);

        const row = matrix[mid];
        if (target === row[0] || target === row[row.length - 1]) {
            return true;
        } else if (target > row[0] && target < row[row.length - 1]) {
            return this.searchRow(row, target);
        } else if (target < row[0]) {
            return this.searchMatrix(matrix, target, top, mid - 1);
        } else {
            return this.searchMatrix(matrix, target, mid + 1, bottom);
        }
    }
}
