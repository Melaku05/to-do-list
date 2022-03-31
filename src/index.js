import './style.css';

const listContainer = document.querySelector('.nav--list');
const tasks = [
  { index: 0, description: 'learn more about webpack', completed: true },
  { index: 1, description: 'learn more about javascript', completed: false },
  { index: 2, description: 'use webpack in a project', completed: true },
  {
    index: 3,
    description: 'create to-do list for my learning objectives',
    completed: false,
  },
  { index: 4, description: 'lear react', completed: false },
];

const renderTasks = () => {
  let list = '';
  tasks.forEach((task) => {
    list += `<li>
                    <div class="list__item">
                        <input type="checkbox" value="${task.completed}">
                        <p>
                            ${task.description}
                        </p>
                        <button type="button"  class="btn" data-id="${task.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                                id="three-dots">
                                <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey"
                                    transform="translate(24) rotate(90)">
                                    <rect id="Rectangle" width="24" height="24" fill="none" />
                                    <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000"
                                        stroke-miterlimit="10" stroke-width="0.5" />
                                    <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1"
                                        transform="translate(11 11)" stroke="#000" stroke-miterlimit="10"
                                        stroke-width="0.5" />
                                    <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1"
                                        transform="translate(17 11)" stroke="#000" stroke-miterlimit="10"
                                        stroke-width="0.5" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </li>`;
  });

  listContainer.innerHTML = list;
  const checkBox = listContainer.querySelectorAll('input[type="checkbox"]');
  checkBox.forEach((item) => {
    if (item.value === 'true') {
      item.checked = true;
    }
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);
