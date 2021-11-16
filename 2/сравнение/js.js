var firstNumber = parseInt(prompt('Введите первое число')),
  secondNumber = parseInt(prompt('Введите второе число'));

if (isNaN(firstNumber)) {
  while (isNaN(firstNumber)) {
    alert("Ошибка при вводе первого числа... Введите число снова");
    firstNumber = parseInt(prompt('Введите первое число'))
  }
}

if (isNaN(secondNumber)) {
  while (isNaN(secondNumber)) {
    alert("Ошибка при вводе второго числа... Введите число снова");
    secondNumber = parseInt(prompt('Введите второе число'))
  }
}

if (firstNumber < secondNumber) {
  alert('Второе число больше');
}
else if (firstNumber > secondNumber) {
  alert('Первое число больше');
}
else if (firstNumber = secondNumber) {
  alert('Числа равны')
}
