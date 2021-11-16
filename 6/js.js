

// Создаю конструктор имени, фамилии и даты регистрации
function User(fullName) {
  var 
    // Задаю отдельно дату и время, чтобы записать их вместе в свойсвте объекта  
      time = new Date().toLocaleTimeString(),
      date = new Date().toLocaleDateString();
    
  // ввожу проверку на null в имени. Иначе при значении null выдает ошибку
    if (fullName != null) {
      var splitedName = fullName.split(" "); //режу введенные пользователем данные на удобные мне куски и записываю их в свойства объекта
      
      this.firstName = splitedName[0];
      this.lastName = splitedName[1];
      this.regDate = date + " " + time;
    } 
}

// var a = new User();

function UserList() {
  this.users = [];
  this.add = function(User) {
    this.users.push(User)
  }
}

// UserList();

