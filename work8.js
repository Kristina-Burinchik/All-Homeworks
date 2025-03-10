// Функция для создания промиса с задержкой
function createPromise(value) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; // задержка от 1 до 5 секунд
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Создаем три промиса
const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);

// Используем Promise.race для ожидания первого сработавшего промиса
Promise.race([promise1, promise2, promise3]).then((result) => {
  console.log(`Первый сработавший промис вернул: ${result}`);
});

// Функция getNum, которая возвращает промис с задержкой
function getNum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 5) + 1; // случайное число от 1 до 5
      console.log(`Случайное число от 1 до 5: ${randomNum}`);
      resolve(randomNum);
    }, 3000);
  });
}

// Async функция для получения числа и возведения в квадрат
async function squareRandomNum() {
  const num = await getNum();
  const squared = num * num;
  console.log(`Квадрат числа: ${squared}`);
}

// Вызов функции
squareRandomNum();

// Функция getNum для получения числа от 6 до 10
function getNumSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 5) + 6; // случайное число от 6 до 10
      console.log(`Случайное число от 6 до 10: ${randomNum}`);
      resolve(randomNum);
    }, 5000);
  });
}

// Async функция для получения двух чисел и нахождения их суммы
async function sumRandomNums() {
  const num1 = await getNum();
  const num2 = await getNumSecond();
  const sum = num1 + num2;
  console.log(`Сумма чисел: ${sum}`);
}

// Вызов функции
sumRandomNums();
