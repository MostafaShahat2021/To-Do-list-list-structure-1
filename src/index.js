import './style.css';

const toDo = [
  {
    description: 'Read a book',
    completed: false,
    index: 0,
  },
  {
    description: 'Walk my dog',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch a movie',
    completed: true,
    index: 2,
  },
];

const taskList = document.querySelector('.task-list');
const toDoList = () => {
  for (let i = 0; i < toDo.length; i += 1) {
    const item = document.createElement('div');
    item.innerHTML = `
    <div class="container" id="${toDo[i].index}"><input type="checkbox" name=""check-box" id="check-box"><br>
    <p class="descripton">${toDo[i].description}</p>
    </div>
    `;
    taskList.appendChild(item);
  }
};
toDoList();