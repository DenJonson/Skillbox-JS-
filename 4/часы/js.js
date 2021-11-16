var day,
    month,
    dayOfWeek,
    year,
    hour,
    minute,
    second,
    fullDay,
    fullDayOfWeek,
    fullYear,
    fullMonth,
    fullHour,
    fullMinute,
    fullSecond;

function time() {
var d = new Date()
    day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    dayOfWeek = (d.getDay() < 10) ? '0' + d.getDay() : d.getDay();
    year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();
    month = (d.getMonth() < 10) ? '0' + d.getMonth() : d.getMonth();
    hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
    minute = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
    second = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();

switch (+dayOfWeek) {
  
  case 00:
    fullDayOfWeek = "Воскресенье";
    break;
  case 01:
    fullDayOfWeek = "Понедельник";
    break;
  case 02:
    fullDayOfWeek = "Вторник";
    break;
  case 03:
    fullDayOfWeek = "Среда";
    break;
  case 04:
    fullDayOfWeek = "Четверг";
    break;
  case 05:
    fullDayOfWeek = "Пятница";
    break;
  case 06:
    fullDayOfWeek = "Суббота";
    break;

  }

  switch (+month) {
    case 00:
      fullMonth = "Января";
      break;
    case 01:
      fullMonth = "Февраля";
      break;
    case 02:
      fullMonth = "Марта";
      break;
    case 03:
      fullMonth = "Апреля";
      break;
    case 04:
      fullMonth = "Мая";
      break;
    case 05:
      fullMonth = "Июня";
      break;
    case 06:
      fullMonth = "Июля";
      break;
    case 07:
      fullMonth = "Августа";
      break;
    case 08:
      fullMonth = "Сентября";
      break;
    case 09:
      fullMonth = "Октября";
      break;
    case 10:
      fullMonth = "Ноября";
      break;
    case 11:
      fullMonth = "Декабря";
      break;
  }

  switch (hour) {
    case 1:
    case 21:
      fullHour = +hour + " час";
      break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
      fullHour = +hour + " часа";
      break;
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      fullHour = +hour + " часов";
  }

  switch (+minute) {
    case 00:
    case 05:
    case 06:
    case 07:
    case 08:
    case 09:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
      fullMinute = +minute + " минут";
      break;
    case 01:
    case 21:
    case 31:
    case 41:
    case 51:
      fullMinute = +minute + " минута";
      break;
    case 02:
    case 03:
    case 04:
    case 22:
    case 23:
    case 24:
    case 32:
    case 33:
    case 34:
    case 42:
    case 43:
    case 44:
    case 52:
    case 53:
    case 54:
      fullMinute = +minute + " минуты";
      break;
  }

  switch (+second) {
    case 00:
    case 05:
    case 06:
    case 07:
    case 08:
    case 09:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
      fullSecond = +second + " секунд";
      break;
    case 01:
    case 21:
    case 31:
    case 41:
    case 51:
      fullSecond = +second + " секунда";
      break;
    case 02:
    case 03:
    case 04:
    case 22:
    case 23:
    case 24:
    case 32:
    case 33:
    case 34:
    case 42:
    case 43:
    case 44:
    case 52:
    case 53:
    case 54:
      fullSecond = +second + " секунды";
      break;
  }

  console.log("Сегодня " + +day + " " + fullMonth + " " + year + " года, " + fullDayOfWeek + ", " + fullHour + " " + fullMinute + " " + fullSecond);

}

setInterval(time, 1000);