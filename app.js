const tasks = [{
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: false,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: false,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

// (function (arrOfTasks) {
//   //// ПЕРШЕ ЗАВДАННЯ ////
//   //Переводимо масив tasks в обєкт обєктів - id(acc[task._id]) результат _id{completed: , body: , title: ,}, отримуємо -> task{title: , body: ,}
//   const objOfTasks = arrOfTasks.reduce((acc, task) => {
//     acc[task._id] = task;
//     return acc;
//   }, {});
//   //console.log(objOfTasks) - для провірки прочитанного

//   //// ДРУГЕ ЗАВДАННЯ ////
//   //Формування списку - liшка -> span -> button -> article -> appendChild(li)
//   //Додавання класів, які прописані через бутсрап
//   //Текс передаємо з переданого списку - tasks
//   //Запуск функції ВІДБУВАЄТЬСЯ НА 83 строчці кода, де повертає li;
//   function listItemTemplate({
//     _id,
//     title,
//     body
//   } = {}) {
//     const li = document.createElement("li");
//     li.classList.add(
//       "list-group-item",
//       "d-flex",
//       "align-items-center",
//       "flex-wrap", "mt-2", "del"
//     );
//     const span = document.createElement("span");
//     span.textContent = title;
//     span.style.fontWeight = 'bold';

//     const btn = document.createElement("button");
//     btn.textContent = "Delete task";
//     btn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
//     const article = document.createElement("p");
//     article.textContent = body;
//     article.classList.add("mt-2", "w-100");

//     li.appendChild(span);
//     li.appendChild(btn);
//     li.appendChild(article);
//     return li;
//   };
//   //console.log(listItemTemplate(objOfTasks)) //- для провірки прочитанного

//   //// ТРЕТЄ ЗАВДАННЯ ////
//   //функція приймає objOfTasks, провіряє на наявність обєкта
//   //Створюємо fragment, потім перебираємо ключі Object.values(objOfTasks).forEach, на кожному ключі передаємо результат функції listItemTemplate(task)->(сформовану liшку з span->button->article) і ДОДАЄМО її в fragment.appendChild(li).
//   //Після перебору ключів, fragment(з нашими liшками) додаємо в listContainer UI.
//   function renderAllTasks(taskLists) {
//     if (!taskLists) {
//       console.error("Please, enter a tasks!");
//       return;
//     }

//     const fragment = document.createDocumentFragment();
//     Object.values(taskLists).forEach(task => {
//       const li = listItemTemplate(task);
//       fragment.appendChild(li)
//       //console.log(li) //- для провірки прочитанного
//     });
//     listContainer.appendChild(fragment);

//   };

//   //// ЧЕТВЕРТЕ ЗАВДАННЯ ////
//   //Знаходимо з html, куда будемо вносити список->renderAllTasks - Elements UI
//   //від батька div -> ul знаходимо по класах
//   const listContainer = document.querySelector(".tasks-list-section .list-group");
//   renderAllTasks(objOfTasks);

//   //// ПЯТЕ ЗАВДАННЯ ////
//   //Знаходимо наші форми(інпути) з html
//   const form = document.forms['addTask'];
//   //З форм витягуєм інпути Title Body
//   const inputTitle = form.elements['title'];
//   const inputBody = form.elements['body'];

//   //// ШОСТЕ ЗАВДАННЯ ////
//   //Савимо подію на submit
//   form.addEventListener('submit', formHandler);

//   function formHandler(e) {
//     e.preventDefault(); // відключаємо по замовчуванню обнову сторінки
//     const titleValue = inputTitle.value;
//     const bodyValue = inputBody.value;

//     if (!titleValue || !bodyValue) {
//       alert("Please, enter your tasks"); //провірка на пусті інпути titleValue bodyValue
//       return;
//     }
//     const newTask = createNewTask(titleValue, bodyValue); //створюємо новий обєкт 125строка 
//     const addToList = listItemTemplate(newTask); //передаємо цей обєкт для переробки в liшку
//     listContainer.insertAdjacentElement("afterbegin", addToList); //додаємо цю liшку на початок нашого контейнера
//     const listContainer = document.querySelector(".tasks-list-section .list-group");
//     form.reset(); //Оновлюємо текст після події
//     // inputTitle.value = "Task title"; 
//     // inputBody.value = "Body task";             //циганський або індустський метод
//   };

//   function createNewTask(body, title) {
//     const createTask = {
//       title,
//       body, //функція створює обєкт з переданими значеннями
//       completed: false,
//       _id: Math.random() //Генерує ПОЧТИ індивідуальний id
//     }
//     objOfTasks[createTask._id] = createTask; //Добавляємо наш обєкт, обєктом в обєкт :D під idшку

//     return {
//       ...createTask
//     }; //Повертає з функції обєкт КОПІЮ(поверхневу)
//   }
//   //// СЬОМЕ ЗАВДАННЯ ////
//   //Знаходимо всі кнопки по класу
//   const delButton = document.querySelectorAll(".delete-btn");

//   delButton.forEach(buttons => {
//     buttons.addEventListener('click', deleteTask); //Ставимо на кожну кнопку подію
//   })

//   function deleteTask(e) {
//     e.target.closest('.list-group-item').remove(); //знаходмо БАТЬКА - liшку і видаляємо її
//   }
// })(tasks);
(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  function listOfTasks({
    _id,
    title,
    body,
    completed
  } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap", "mt-2", "del", completed
    );
    li.setAttribute('asd', 23);

    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    span.textContent = title;

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
    btn.textContent = 'Delete task';

    const article = document.createElement('p');
    article.classList.add("mt-2", "w-100");
    article.textContent = body;

    const completedBtn = document.createElement('button');
    completedBtn.classList.add('btn', 'ml-auto', 'complet');
    completedBtn.textContent = 'completed';

    li.setAttribute('id', `${completed}`)

    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(article);
    li.appendChild(completedBtn);


    return li;
  };



  function renderAllTasks(listTasks) {
    if (!listTasks) {
      alert("Please, enter a task");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(listTasks).forEach(task => {
      const li = listOfTasks(task);
      fragment.appendChild(li);
    });
    tasksContainer.appendChild(fragment);
  };

  const tasksContainer = document.querySelector('.tasks-list-section .list-group');

  renderAllTasks(objOfTasks);

  //

  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];

  form.addEventListener('submit', handler);

  function handler(e) {
    e.preventDefault();

    const titleText = inputTitle.value;
    const bodyText = inputBody.value;

    if (!titleText || !bodyText) {
      alert("Please, enter Title and Body tasks");
      return;
    }

    const formObj = {
      _id: Math.random,
      title: titleText,
      body: bodyText,
      completed: false
    };

    const finnaly = listOfTasks(formObj);
    tasksContainer.insertAdjacentElement('afterbegin', finnaly);

    form.reset();
  };

  tasksContainer.addEventListener('click', delHandler);

  function delHandler(e) {
    if (e.target.classList.contains('delete-btn')) {
      const isConfirmed = confirm(`Are you sure you want to delete?`);
      if (isConfirmed) {
        e.target.closest('.list-group-item').remove();
      };
    }
  }

  tasksContainer.addEventListener('click', isCompleted);


  function isCompleted(e) {
    if (e.target.classList.contains('complet')) {
      e.target.classList.toggle('bg-success');
      e.target.closest('.list-group-item').classList.toggle('false');
      e.target.closest('.list-group-item').classList.toggle('border-success');
    }
  }

  const showAllTasks = document.createElement('button');
  const showNotCompleted = document.createElement('button');

  showNotCompleted.addEventListener('click', showNotCompl);

  const notCompleted = document.createDocumentFragment();

  function showNotCompl(e) {
    const test = document.createDocumentFragment();
    for (let i = tasksContainer.children.length - 1; i > -1; i--) {
      if (tasksContainer.children[i].classList.contains('border-success')) {
        test.appendChild(tasksContainer.children[i]);
      }
    }
    notCompleted.appendChild(test);
  }

  showAllTasks.addEventListener('click', showAll);

  function showAll(e) {
    tasksContainer.appendChild(notCompleted);

  }

  function createButtons() {

    const ul = document.querySelector('.list-group');

    showAllTasks.textContent = 'Show all tasks';
    showNotCompleted.textContent = 'Show not completed tasks';

    showAllTasks.classList.add('btn', 'ml-5');
    showNotCompleted.classList.add('btn', 'ml-5');

    ul.insertAdjacentElement('beforebegin', showAllTasks);
    ul.insertAdjacentElement('beforebegin', showNotCompleted);
  }
  createButtons();

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };

  let lastSelectedTheme = localStorage.getItem('apply_theme') || 'default';

  setThemes(lastSelectedTheme);
  const theThemes = document.getElementById('themeSelect');

  theThemes.addEventListener('change', selectedTheme);

  function selectedTheme(e) {
    const choseTheTheme = theThemes.value;
    const isConfirm = confirm(`
    Are you sure you want to change the theme? ${choseTheTheme}`);

    if (!isConfirm) {
      theThemes.value = lastSelectedTheme;
      return;
    }
    setThemes(choseTheTheme);
    lastSelectedTheme = choseTheTheme;

    localStorage.setItem('apply_theme', choseTheTheme);
  }

  function setThemes(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    });
  }
})(tasks)