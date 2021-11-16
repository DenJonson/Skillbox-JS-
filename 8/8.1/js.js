(function() {
  function createTitle() {
    let title = document.createElement('h2');
    title.innerHTML = 'Введите ваш код в окно ниже';
    return title;
  };

  function createForm() {
    let form = document.createElement('textarea');
    form.style = 'width: 600px; height: 300px; display: block';
    form.placeholder = 'Введите js код';
    return form;
  };

  function performUserCode(code) {
    'use strict';

    try{
      eval(code)
    }
    catch (ex) {
      alert('При выполнении кода произошла ошибка: ' + ex);
    }
  };

  function createPage() {
    let container = document.getElementById('container');
    let title = createTitle();
    let codeArea = createForm();
    let completeButton = document.createElement('button');
    completeButton.innerHTML = 'Компилировать код';

    container.append(title);
    container.append(codeArea);
    container.append(completeButton);

    completeButton.addEventListener('click', function() {
      performUserCode(codeArea.value);
    })
  };

  window.createPage = createPage;

})();