export function add(a: number): (b: number) => number {
  return function (b: number): number {
    return a + b;
  };
}
