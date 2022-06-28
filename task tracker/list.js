let todoItems = [];

// This function will create a new todo object based on the
// text that was entered in the text input, and push it into
// the `todoItems` array
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.js-form');
// Add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
function renderTodo(todo) {
    const list = document.querySelector('.js-todo-list');
    const item = document.querySelector(`[data-key='${todo.id}']`);
  
    // add this if block
    if (todo.deleted) {
      // remove the item from the DOM
      item.remove();
      return
    }
  
    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
      <svg><use href="#delete-icon"></use></svg>
      </button>
    `;
  
    if (item) {
      list.replaceChild(node, item);
    } else {
      list.append(node);
    }
  }