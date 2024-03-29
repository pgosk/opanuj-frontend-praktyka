export type Result = { result: number; error?: string };
export type OperationFn = (x: number, y: number) => Result;

export const add: OperationFn = (x, y) => ({ result: x + y });
export const substr: OperationFn = (x, y) => ({ result: x - y });
export const multiply: OperationFn = (x, y) => ({ result: x * y });
export const divide: OperationFn = (x, y) => ({
  result: x / y,
  error: y === 0 ? 'Cannot divide by zero' : undefined,
});
