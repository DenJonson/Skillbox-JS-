(() => {
  
  const api = 'https://swapi.dev/api/';
  const search = document.getElementById('person_search_input');
  const btn = document.getElementById('search_request_btn');
  let url = api + 'people/?search=';

  function GETRequest(e) {
    e.preventDefault();

    document.querySelector('ul').innerText = '';

    let promise = fetch (url + search.value)
      .then ((response) => {
        // Проверяем статус-код, который прислал сервер
        // 200 — это ОК, остальные — ошибка или не подходят
        if (response.status != 200) {
          alert(
            "Произошла ошибка при получении ответа от сервера:\n\n" +
              response.message
          );
          return;
        }
        return response.json();
      })
      .then((response) => {
        const results = response.results;
        const charUl = document.querySelector('.search_result');

        if (results.length == 0) {
          alert("К сожалению, данные не получены по запросу: " + url);
          return;
        }
        
        for (const item of results) {
          const charItem =  document.createElement('li');
          charUl.append(charItem);
          charItem.innerText = item.name;
        }

        charUl.addEventListener('click', (e) => {
          
          if (e.path[0] == e.currentTarget) {
            return;
          }

          const chosenCharacterName = e.path[0].innerText;
          const name = document.getElementById('name');
          const height = document.getElementById('height');
          const mass = document.getElementById('mass');
          const birthYear = document.getElementById('birth_year');
          const filmsCount = document.getElementById('films_count');
          let chosenCharacter = {};

          for (const item of results) {
            if (item.name == chosenCharacterName) {
              chosenCharacter = item;
            }
          }

          name.innerText = chosenCharacter.name;
          height.innerText = chosenCharacter.height;
          mass.innerText = chosenCharacter.mass;
          birthYear.innerText = chosenCharacter.birth_year;
          filmsCount.innerText = chosenCharacter.films.length;
          
        })
      })
  }

  btn.addEventListener('click', GETRequest);

})()