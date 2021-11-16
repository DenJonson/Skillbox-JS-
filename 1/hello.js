var myName = prompt('Как вас зовут?');
var myLastName = prompt('И вашу фамилию назовите, пожалуйста')
var myBirthYear = prompt('Ваш год рождения:');

var currentYear = 2020;
var age = currentYear - myBirthYear

if (age < 20) {
    alert('Привет, ' + myName + ' ' + myLastName + '!');
}
else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + myName + '' + myLastName);
}
else {
    alert('Здравствуйте, ' + myName + ' ' + myLastName);
}