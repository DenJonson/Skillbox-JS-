var userNumber = 0,
    myNumber;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

myNumber = getRandomInt(0, 100);
alert("Попробуйте угадать загаданное мной число от 1 до 100. Для выхода из игры нажмите Отмена");



while (true) {

  userNumber = (prompt("Введите число"));

  if (userNumber != null) {
    userNumber = parseInt(userNumber);
    if (!isNaN(userNumber)) {
      if (userNumber > myNumber) {
        alert("Слишком много");
      } else if (userNumber < myNumber) {
          alert("Слишком мало");
      } else if (userNumber == myNumber) {
          alert("Правильно! Вы угадали! Нажмите ОК для повторной игры или Отмена для выхода.");
          myNumber = getRandomInt(0, 100);
          break;
      }
    }
    else {
      alert("Введите число!")
    }
  } else {
    alert("Вы вышли из игры");
    break;
  }
}
