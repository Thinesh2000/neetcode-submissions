class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let operands: number[] = [];

        const operators = new Set(["+", "-", "*", "/"]);
        for (const s of tokens) {
            if (!operators.has(s)) operands.push(parseInt(s));
            else {
                const op2 = operands.pop()!;
                const op1 = operands.pop()!;
                let result: number;
                switch (s) {
                    case "+":
                        result = op1 + op2;
                        break;
                    case "-":
                        result = op1 - op2;
                        break;
                    case "*":
                        result = op1 * op2;
                        break;
                    case "/":
                        result = Math.trunc(op1 / op2);
                        break;
                }

                operands.push(result!);
            }
        }

        return operands[0];
    }
}
