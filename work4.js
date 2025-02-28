//1. Проверка равенства суммы первой и второй половины цифр в строке:
function checkEqualSums(str) {
  if (str.length % 2 !== 0) {
    return "нет"; // строка должна быть четной
  }
  const mid = str.length / 2;
  const sum1 = str
    .slice(0, mid)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  const sum2 = str
    .slice(mid)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return sum1 === sum2 ? "да" : "нет";
}

console.log(checkEqualSums("123321")); // да
console.log(checkEqualSums("123456")); // нет

//2. Деление числа n на 2 до тех пор, пока результат не станет меньше 50:
function divideUntilLessThan(n, limit) {
  let num = 0;
  while (n >= limit) {
    n /= 2;
    num++;
  }
  return { result: n, iterations: num };
}

const { result, iterations } = divideUntilLessThan(1000, 50);
console.log(result); // 31.25
console.log(iterations); // 5

//3. Нахождение среднего арифметического элементов массива:
function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

const arr = [12, 15, 20, 25, 59, 79];
console.log(calculateAverage(arr)); // 35.0

//4. Вставка данных в массив с заданного места:
function insertIntoArray(arr, index, elements) {
  arr.splice(index, 0, ...elements);
  return arr;
}

const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertIntoArray(originalArray, 3, ["a", "b", "c"]);
console.log(modifiedArray); // [1, 2, 3, 'a', 'b', 'c', 4, 5]

//5. Вставка данных в массив в нескольких местах:
function insertMultipleIntoArray(arr, positions, elements) {
  for (let i = 0; i < positions.length; i++) {
    arr.splice(positions[i], 0, elements[i]);
  }
  return arr;
}

const originalArray2 = [1, 2, 3, 4, 5];
const positions = [1, 2, 6, 8];
const elements2 = ["a", "b", "c", "e"];
const modifiedArray2 = insertMultipleIntoArray(
  originalArray2,
  positions,
  elements2
);
console.log(modifiedArray2); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

//6. Сортировка массива:
const arrayToSort = [3, 4, 1, 2, 7, 30, 50];
const sortedArray = arrayToSort.sort((a, b) => a - b);
console.log(sortedArray); // [1, 2, 3, 4, 7, 30, 50]
