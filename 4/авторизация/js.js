var user = [];
var k,
    userLogin,
    userName,
    userPassword,
    loginKey,
    passKey,
    flag = 0;

user[0] = {
  name: "Джон",
  login: "John",
  password: "qwerty",
}

user[1] = {
  name: "Питер",
  login: "Peter",
  password: "12345678"
}



function login() {
  userLogin = prompt("Введите логин");
  userPassword = prompt("Введите пароль");
  
  for (var i = 0; i < user.length; i++) {
    
    passKey = user[i].password;

    if (user[i].login == userLogin && passKey == userPassword) {
      flag = 1;
      userName = user[i].name;
      break;
    }
  }

  if (flag == 1) {
    alert("Добро пожаловать, " + userName + "!");
  } else {
    alert("Ошибка авторизации! Попробуйте еще раз.");
    login();
  }
}

login()