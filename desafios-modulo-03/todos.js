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

    const position = todos.indexOf(todo);

    const linkElement = document.createElement('a');
    const linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);

    linkElement.href = '#';
    linkElement.setAttribute('onclick', `deleteTodo(${position})`)
    linkElement.style.marginLeft = '8px';

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  const todoText = inputElement.value;

  todos.push(todoText);

  inputElement.value = '';

  renderTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
}

buttonElement.onclick = addTodo;

renderTodos();
