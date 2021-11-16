(() => {
  function createAppTitle(title = 'Список дел') {
    const appTitle = document.createElement('h2');
    appTitle.innerText = title;
    return appTitle;
  }

  function createAppForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const text = 'Запишите вашу ';

    form.classList.add('form');
    input.classList.add('input');
    button.classList.add('btn');

    input.placeholder = `${text} задачу`;
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
    const list = document.createElement('ul');
    return list; 
  }

  function createTodoItem(name) {
    const todoItem = document.createElement('li');
    
    todoItem.classList.add('todo-item');
    todoItem.textContent = name;

    return todoItem;
  }

  function createTodoApp() {
    const container = document.getElementById('todo-app');
    const appTitle = createAppTitle();
    const appForm = createAppForm();
    const todoList = createTodoList();

    container.append(appTitle);
    container.append(appForm.form);
    container.append(todoList);

    appForm.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!appForm.input.value) {
        alert('Введите задачу для добавления в список');
        return
      };

      let todoItem = createTodoItem(appForm.input.value);

      todoItem.addEventListener('click', () => {
        todoItem.classList.toggle('complete');
      });

      todoList.append(todoItem);
      appForm.input.value = '';
    })
  }

  window.createTodoApp = createTodoApp;

})()