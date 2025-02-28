//Задача 1: Эмуляция игры в кубики

function diceGame(numPlayers, numRolls) {
  const scores = {};

  // Инициализация счетов игроков
  for (let i = 1; i <= numPlayers; i++) {
    scores[`Игрок ${i}`] = 0;
  }

  // Броски кубиков
  for (let roll = 0; roll < numRolls; roll++) {
    for (const player in scores) {
      const rollResult = Math.floor(Math.random() * 6) + 1; // Бросок кубика от 1 до 6
      scores[player] += rollResult;
      console.log(
        `${player} бросил кубик и получил ${rollResult}. Текущий счет: ${scores[player]}`
      );
    }
  }

  // Определение победителя
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(
    (player) => scores[player] === maxScore
  );

  if (winners.length > 1) {
    console.log("Ничья между: " + winners.join(", "));
  } else {
    console.log(`Победитель: ${winners[0]} с суммой ${maxScore}`);
  }
}

// Пример использования
diceGame(3, 5);

//Задача 2: Разбиение числа на части
function splitNumber(number, parts, fractional = false) {
  if (parts <= 0 || number < 0) {
    throw new Error(
      "Количество частей должно быть больше 0 и число не должно быть отрицательным."
    );
  }

  const result = [];
  let sum = 0;

  for (let i = 0; i < parts - 1; i++) {
    const randomNum = fractional
      ? Math.random() * (number - sum - (parts - i - 1)) // Оставшееся число должно быть достаточно для оставшихся частей
      : Math.floor(Math.random() * (number - sum - (parts - i - 1))); // Оставшееся число должно быть достаточно для оставшихся частей
    result.push(randomNum);
    sum += randomNum;
  }

  result.push(number - sum); // Добавляем оставшуюся часть
  return result.map((num) =>
    fractional ? parseFloat(num.toFixed(2)) : Math.round(num)
  );
}

// Пример использования
console.log(splitNumber(15, 3)); // Целые числа
console.log(splitNumber(15, 3, true)); // Дробные числа

//Задача 3: Подсчет количества пятниц 13-го числа
function countFridays13(startDate) {
  const start = new Date(startDate);
  const end = new Date();
  let count = 0;

  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    if (d.getDate() === 13 && d.getDay() === 5) {
      // 5 - пятница
      count++;
    }
  }

  return count;
}

// Пример использования
console.log(countFridays13("2000-01-01"));
