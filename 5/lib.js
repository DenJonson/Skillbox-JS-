var userNumber = 0,
    myNumber;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
  var flag = 0;
  myNumber = getRandomInt(0, 100);
  alert("Попробуйте угадать загаданное мной число от 1 до 100. Для выхода из игры нажмите Отмена");

  var attempt = 0;

  function attempts() { 
    attempt++;
    if (attempt > 10) {
      attempt = 0;
    }
    console.log(attempt);
  }

  while (true) {
    userNumber = (prompt("Введите число"));

    if (userNumber != null) {
      if (attempts() < 10) {
        userNumber = parseInt(userNumber);

        if (!isNaN(userNumber)) {
          if (userNumber > myNumber) {
            alert("Слишком много");
            attempts();
          } else if (userNumber < myNumber) {
              alert("Слишком мало");
              attempts();
          } else if (userNumber == myNumber) {
              alert("Правильно! Вы угадали! Нажмите ОК для повторной игры или Отмена для выхода.");
              myNumber = getRandomInt(0, 100);
              
              break;
          }
        } else {
          alert("Введите число!")
        }
      }  else {
        alert("Вы не справились");
        var result = confirm("Хотите повторить?");
        if (result == true) {
          start();
        } else { 
          flag = 1; 
          break; }
      }
    } else {
      alert("Вы вышли из игры");
      flag = 1;
      break;
    }
  }

  if (flag == true) { return }

}