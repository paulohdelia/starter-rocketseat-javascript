const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

let todos = [
  'Fazer módulo de JavaScript', 'Fazer módulo de ES6',
  'Fazer módulo de Node', 'Fazer módulo de React',
  'Fazer módulo de React Native', 'Fazer GoStack',
  'Trabalhar na Google',
]

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    const todoElement = document.createElement('li');
    const todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  const todoText = inputElement.value;

  todos.push(todoText);

  inputElement.value = '';

  renderTodos();
}

buttonElement.onclick = addTodo;

renderTodos();
