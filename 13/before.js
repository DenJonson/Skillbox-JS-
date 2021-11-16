(function() {
  function createAppTitle() {
    var appTitle = document.createElement('h2');
    appTitle.innerText = 'Список дел';
    return appTitle;
  }

  function createAppForm() {
    var form = document.createElement('form');
    var input = document.createElement('input');
    var button = document.createElement('button');

    form.classList.add('form');
    input.classList.add('input');
    button.classList.add('btn');

    input.placeholder = 'Запишите вашу задачу';
    button.innerText = 'Добавить задачу';

    form.append(input);
    form.append(button);

    return {
      form,
      input,
      button,
    };
  }

  function createTodoList() {
    var list = document.createElement('ul');
    return list; 
  }

  function createTodoItem(name) {
    var todoItem = document.createElement('li');
    
    todoItem.classList.add('todo-item');
    todoItem.textContent = name;

    return todoItem;
  }

  function createTodoApp() {
    var container = document.getElementById('todo-app');
    var appTitle = createAppTitle();
    var appForm = createAppForm();
    var todoList = createTodoList();

    container.append(appTitle);
    container.append(appForm.form);
    container.append(todoList);

    appForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!appForm.input.value) {
        alert('Введите задачу для добавления в список');
        return
      };

      var todoItem = createTodoItem(appForm.input.value);

      todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('complete');
      });

      todoList.append(todoItem);
      appForm.input.value = '';
    })
  }

  window.createTodoApp = createTodoApp;

})()