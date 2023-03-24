class InfiniteLoopError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InfiniteLoopError";

        // Set the prototype explicitly to support instanceof checks
        Object.setPrototypeOf(this, InfiniteLoopError.prototype);
    }
}

export default InfiniteLoopError