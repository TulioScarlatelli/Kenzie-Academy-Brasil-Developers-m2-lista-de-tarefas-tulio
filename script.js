const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(array) {

  const referenceElement = document.querySelector(".tasks__list")
  referenceElement.innerHTML = '';

  for (let i = 0; i < array.length; i++) {

    const task = array[i]

    const createItem = createTaskItem(task);

    referenceElement.appendChild(createItem);
  }
}

renderElements(tasks)

function createTaskItem(element) {

  const taskItem = document.createElement("li");
  const taskInfo = document.createElement("div");
  const taskType = document.createElement("span");
  const taskTitle = document.createElement("p");
  const taskButton = document.createElement("button");
  const taskRemove = document.createElement("i");

  taskItem.classList.add("task__item");
  taskInfo.classList.add("task-info__container");
  taskType.classList.add("task-type");
  taskButton.classList.add("task__button--remove-task");
  taskRemove.classList.add("fa-solid", "fa-trash");

  if (element.type === "Urgente") {
    taskType.classList.add("span-urgent")
  } if (element.type === "Importante") {
    taskType.classList.add("span-important")
  } if (element.type === "Normal") {
    taskType.classList.add("span-normal")
  }

  taskTitle.innerText = element.title;

  taskItem.appendChild(taskInfo);
  taskItem.appendChild(taskButton);
  taskInfo.appendChild(taskType);
  taskInfo.appendChild(taskTitle);
  taskButton.appendChild(taskRemove);

  taskButton.addEventListener("click", function () {

    const removeTaskArray = tasks.indexOf(element)

    if (removeTaskArray !== -1) {
      tasks.splice(removeTaskArray, 1)
    }

    renderElements(tasks);
  })

  return taskItem
}

const newTask = document.querySelector(".form__button--add-task");

newTask.addEventListener('click', function (event) {
  event.preventDefault()

  const newTitle = document.getElementById("input_title").value;
  const newType = document.querySelector(".form__input--priority").value;

  if (newTitle && newType) {

    const newTaskItem = {
      title: newTitle,
      type: newType
    }

    tasks.push(newTaskItem);
    renderElements(tasks);

    document.getElementById("input_title").value = '';
    document.querySelector(".form__input--priority").value = ''; 
  }
})

function searchTask() {

  const searchInput = document.querySelector(".header__input--search").value.toLowerCase();
  const searchListTasks = document.querySelectorAll(".tasks__list .task__item");

  for (let i = 0; i < searchListTasks.length; i++) {

    const task = searchListTasks[i];
    const taskText = task.textContent.toLowerCase();

    if (taskText.indexOf(searchInput) !== -1) {

      task.style.display = "flex";
    } else {
      task.style.display = "none"
    }
  }
}

const searchInput = document.querySelector(".header__input--search");
searchInput.addEventListener("input", searchTask)