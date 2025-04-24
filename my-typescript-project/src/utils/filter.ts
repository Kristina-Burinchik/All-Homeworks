export function filter<T>(predicate: (item: T) => boolean, input?: T[]): T[] {
  if (input === undefined) {
    throw new Error("Input array is required");
  }
  return input.filter(predicate);
}
