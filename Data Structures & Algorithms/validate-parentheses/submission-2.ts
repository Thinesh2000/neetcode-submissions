class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = [];

        const brackets = new Map([
            ["(", ")"],
            ["[", "]"],
            ["{", "}"],
        ]);

        let i = 0;
        while (i < s.length) {
            if (brackets.has(s[i])) stack.push(s[i]);
            else {
                const left = stack.pop();
                if (left == undefined || brackets.get(left) !== s[i]) {
                    return false;
                }
            }
            i++;
        }

        return !stack.length;
    }
}
