var number,
    sum = 0;

do {
  number = prompt("Введите слагаемое");
  if (number != null) {
    if (!isNaN(parseInt(number))) {
      sum += +number;
    }
    else {
      alert("Вы ввели не число");
    }
  }
}  while (number || number != null)

alert("Сумма введенных чисел = " + sum)