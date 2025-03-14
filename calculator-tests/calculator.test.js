const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add numbers correctly", () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
    expect(calculator.add(-1, -1, 1)).toBe(-1);
    expect(calculator.add(0, 0, 0)).toBe(0);
  });

  test("should multiply numbers correctly", () => {
    expect(calculator.multiply(1, 2, 3)).toBe(6);
    expect(calculator.multiply(-1, 1, 2)).toBe(-2);
    expect(calculator.multiply(0, 5, 10)).toBe(0);
  });

  test("should subtract numbers correctly", () => {
    expect(calculator.subtraction(5, 3)).toBe(2);
    expect(calculator.subtraction(3, 5)).toBe(-2);
    expect(calculator.subtraction(0, 0)).toBe(0);
  });

  test("should divide numbers correctly", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 1)).toBe(0);
  });

  test("should exponentiate numbers correctly", () => {
    expect(calculator.exponentiation(3)).toBe(9);
    expect(calculator.exponentiation(-2)).toBe(4);
    expect(calculator.exponentiation(0)).toBe(0);
  });

  // Дополнительные тесты
  test("should return 0 for no arguments in add", () => {
    expect(calculator.add()).toBe(0);
  });

  test("should correctly add a large number of arguments", () => {
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
  });

  test("should return the same number when adding a single number", () => {
    expect(calculator.add(5)).toBe(5);
  });

  test("should correctly add large numbers", () => {
    expect(calculator.add(1000000, 2000000)).toBe(3000000);
  });

  test("should return 0 when multiplying by 0", () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });

  test("should multiply negative numbers correctly", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test("should return the same number when subtracting zero", () => {
    expect(calculator.subtraction(10, 0)).toBe(10);
  });

  test("should return negative when dividing positive by negative", () => {
    expect(calculator.divide(10, -2)).toBe(-5);
  });

  test("should return 1 when dividing a number by itself", () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });

  test("should return correct result for large number exponentiation", () => {
    expect(calculator.exponentiation(100)).toBe(10000);
  });
});
