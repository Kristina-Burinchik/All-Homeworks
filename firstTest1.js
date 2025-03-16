//1.Функция для форматирования строковых представлений чисел в валюту:
function formatCurrency(arr) {
  return arr.map((numStr) => {
    const num = parseFloat(numStr);
    if (isNaN(num)) {
      return "Ошибка: некорректное значение";
    }
    return (
      "$" +
      num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  });
}

// Пример использования:
console.log(formatCurrency(["1234", "5678.9", "abc"])); // ['$1,234.00', '$5,678.90', 'Ошибка: некорректное значение']

//2.Функция для удаления falsy значений и сортировки массива:
function removeFalsyAndSort(arr) {
  return arr.filter(Boolean).sort((a, b) => b - a);
}

// Пример использования:
console.log(removeFalsyAndSort([0, 1, false, 2, "", 3])); // [3, 2, 1]

//3.Функция для группировки объектов по возрасту:
function groupByAge(arr) {
  return arr.reduce((acc, person) => {
    const { age, name } = person;
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(name);
    return acc;
  }, {});
}

// Пример использования:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
console.log(groupByAge(people)); // { '25': ['Alice', 'Charlie'], '30': ['Bob'] }

//4.Функция для проверки, является ли строка палиндромом:
function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Пример использования:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

//5.Функция для суммирования всех чисел в массиве любой вложенности:
function sumNestedNumbers(arr) {
  return arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumNestedNumbers(item);
    } else if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
}

// Пример использования:
console.log(sumNestedNumbers([1, [2, 3], [4, [5]]])); // 15

//6.Функция для получения последних уникальных элементов:
function uniqueLast(arr, compareFn) {
  const seen = new Set();
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    const key = JSON.stringify(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.unshift(item);
    }
  }
  return result;
}

// Пример использования:
const objects = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }];
console.log(uniqueLast(objects, (a, b) => a.id === b.id)); // [{ id: 1 }, { id: 2 }, { id: 3 }]

//7.Функция для преобразования массива строк:
function transformStrings(arr, transformFn) {
  return arr.reduce((obj, str) => {
    obj[str] = transformFn(str);
    return obj;
  }, {});
}

// Пример использования:
console.log(transformStrings(["a", "b", "c"], (str) => str.toUpperCase())); // { a: 'A', b: 'B', c: 'C' }

//8.Асинхронная функция для выполнения промисов:
async function executePromises(promises) {
  return Promise.all(promises.map((fn) => fn()));
}

// Пример использования:
const promise1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
const promise2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 2"), 500));
executePromises([promise1, promise2]).then(console.log); // ['Result 1', 'Result 2']

//9.Программа для печати таблицы умножения:
function printMultiplicationTable(n) {
  if (n < 1 || !Number.isInteger(n)) {
    console.error("Ошибка: введите целое число больше 0.");
    return;
  }
  const table = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
  );
  const sumsRows = table.map((row) => row.reduce((a, b) => a + b, 0));
  const sumsCols = table[0].map((_, colIndex) =>
    table.reduce((sum, row) => sum + row[colIndex], 0)
  );
  const totalSum = sumsRows.reduce((a, b) => a + b, 0);

  console.log("-------------------------------------");
  console.log(
    "   x   |",
    Array.from({ length: n }, (_, i) => ` ${i + 1} `).join("")
  );
  console.log("-------------------------------------");
  table.forEach((row, i) => {
    console.log(`   ${i + 1}   |`, row.map((num) => ` ${num} `).join(""));
  });
  console.log("-------------------------------------");
  console.log("Sum of Rows:", sumsRows.join(" "));
  console.log("Sum of Columns:", sumsCols.join(" "));
  console.log("Total Sum of Table:", totalSum);
}

// Пример использования:
printMultiplicationTable(5); // Выводит таблицу умножения для чисел от 1 до 5

//10.Цепочка из трех промисов:
function promiseChain() {
  return new Promise((resolve) => {
    resolve(2);
  })
    .then(
      (result) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(result ** 2), 3000);
        })
    )
    .then(
      (result) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(result ** 2), 3000);
        })
    )
    .then((result) => console.log(result));
}

// Пример использования:
promiseChain(); // Выводит 16 через 6 секунд
