export default class InfiniteLoopError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InfiniteLoopError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
