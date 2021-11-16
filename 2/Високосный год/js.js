var firstYear = parseInt(prompt("Первый год")),
    lastYear = parseInt(prompt("Последний год"));

if (isNaN(firstYear)) {
  while (isNaN(firstYear)) {
    alert('Неверно указан первый год');
    firstYear = parseInt(prompt('Повторите попытку'));
  }
}

if (isNaN(lastYear)) {
  while (isNaN(lastYear)) {
    alert('Неверно указан последний год');
    lastYear = parseInt(prompt('Повторите попытку'));
  }
}

currentYear = firstYear;

while (currentYear <= lastYear) {
  if (currentYear % 4 > 0) {
    currentYear++;
  }
  else {
    if (currentYear % 100 == 0) {
      if (currentYear % 400 == 0) {
        console.log(currentYear);
        currentYear++;
      }
      else {
        currentYear++;
      }
    }
    else {
      console.log(currentYear);
      currentYear++;
    }
  }
}
