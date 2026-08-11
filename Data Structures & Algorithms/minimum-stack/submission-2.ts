class MinStack {
    stack;
    minStack;
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack.length ? this.minStack.at(-1) : Infinity, val));
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(!this.stack.length) return;
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
