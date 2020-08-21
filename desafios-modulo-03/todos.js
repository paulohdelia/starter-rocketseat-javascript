const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

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
  saveToStorage();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

renderTodos();
