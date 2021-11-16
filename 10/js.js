(() => {
  
  function createTitle() {
    const title = document.createElement('h2');
    title.innerHTML = 'Текстовый редактор';
    title.classList.add('title');
    
    return title;
  };

  function createTextArea() {
    const textArea = document.createElement('div');

    textArea.classList.add('text-area');

    textArea.innerHTML = JSON.parse(localStorage.getItem('text'));

    return textArea;
  };

  function createButtons() {
    const editBtn = document.createElement('button');
    const saveBtn = document.createElement('button');
    const cancleBtn = document.createElement('button');

    editBtn.classList.add('edit-btn');
    saveBtn.classList.add('save-btn');
    cancleBtn.classList.add('cancle-btn');

    editBtn.innerText = 'Редактировать';
    saveBtn.innerText = 'Сохранить';
    cancleBtn.innerText = 'Отмена';

    saveBtn.disabled = 'disabled';
    cancleBtn.disabled = 'disabled';

    return {
      editBtn,
      saveBtn,
      cancleBtn,
    }
  }

  function createTextApp() {
    const container = document.createElement('div');
    const title = createTitle();
    const textArea = createTextArea();
    const btns = createButtons();
    const editBtn = btns.editBtn;
    const cancleBtn = btns.cancleBtn;
    const saveBtn = btns.saveBtn;

    container.classList.add('container');
    
    document.body.append(container);
    container.append(title);
    container.append(editBtn);
    container.append(textArea);
    container.append(cancleBtn);
    container.append(saveBtn);

    editBtn.addEventListener('click', () => {
      textArea.contentEditable = 'true';
      editBtn.disabled = 'disabled';
      cancleBtn.disabled = '';
      saveBtn.disabled = '';
    });

    cancleBtn.addEventListener('click', () => {
      textArea.innerHTML = JSON.parse(localStorage.getItem('text'));

      saveBtn.disabled = 'disabled';
      cancleBtn.disabled = 'disabled';
      editBtn.disabled = '';
      textArea.contentEditable = 'false';
    });

    saveBtn.addEventListener('click', () => {
      const storedText = JSON.stringify(textArea.innerHTML);

      localStorage.setItem('text', storedText);
      textArea.innerHTML = JSON.parse(localStorage.getItem('text'));

      saveBtn.disabled = 'disabled';
      cancleBtn.disabled = 'disabled';
      editBtn.disabled = '';
      textArea.contentEditable = 'false';
    });

  };

  window.createTextApp = createTextApp;

})()