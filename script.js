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


const alterarElemento = document.querySelector(".tasks__list")

function createTaskItem(){
  for (let i = 0; i < tasks.length; i++){

    const taskItem = document.createElement("li")
    const taskInfo = document.createElement("div")
    const taskType = document.createElement("span")
    const taskTitle = document.createElement("p")
    const taskButton = document.createElement("button")
    const buttonIcon = document.createElement("i")

    taskItem.classList.add("task__item")
    taskInfo.classList.add("task-info__container")
    taskType.classList.add("task-type")

    if (tasks[i].type === "Urgente"){
      taskType.classList.add("span-urgent") 
    } else if (tasks[i].type === "Importante"){
      taskType.classList.add("span-important")
    } else if (tasks[i].type === "Normal"){
      taskType.classList.add("span-normal")
    }

    taskTitle.innerText = tasks[i].title

    taskButton.classList.add("task__button--remove-task")
    buttonIcon.classList.add("fa-solid", "fa-trash")


    alterarElemento.appendChild(taskItem)

    taskItem.appendChild(taskInfo)
    taskItem.appendChild(taskButton)

    taskInfo.appendChild(taskType)
    taskInfo.appendChild(taskTitle)

    taskButton.appendChild(buttonIcon)

    taskButton.addEventListener("click", function(){
      taskItem.remove()
    })
  }
}

createTaskItem()

const buttonNewTask = document.querySelector(".form__button--add-task")
const inputNewTaskTitle = document.querySelector("#input_title")
const inputNewTaskType = document.querySelector(".form__input--priority")

buttonNewTask.addEventListener("click", function(event){

  event.preventDefault()
  
  const newTaskItem = document.createElement("li")
  const newTaskInfo = document.createElement("div")
  const newTaskType = document.createElement("span")
  const newTaskTitle = document.createElement("p")
  const newTaskButton = document.createElement("button")
  const newButtonIcon = document.createElement("i")

  newTaskItem.classList.add("task__item")
  newTaskInfo.classList.add("task-info__container")
  newTaskType.classList.add("task-type")

  if (inputNewTaskType.value === "urgente"){
    newTaskType.classList.add("span-urgent") 
  } else if (inputNewTaskType.value === "importante"){
    newTaskType.classList.add("span-important")
  } else if (inputNewTaskType.value === "normal"){
    newTaskType.classList.add("span-normal")
  }

  newTaskButton.classList.add("task__button--remove-task")
  newButtonIcon.classList.add("fa-solid", "fa-trash")

  newTaskTitle.innerText = inputNewTaskTitle.value

  newTaskItem.appendChild(newTaskInfo)
  newTaskItem.appendChild(newTaskButton)

  newTaskInfo.appendChild(newTaskType)
  newTaskInfo.appendChild(newTaskTitle)

  newTaskButton.appendChild(newButtonIcon)

  const tasksList = document.querySelector(".tasks__list")
  tasksList.appendChild(newTaskItem)

  newTaskButton.addEventListener("click", function(){
    newTaskItem.remove();
  })

  inputNewTaskTitle.value = '';
  inputNewTaskType.value = '';
})


function deleteTask(){
  const deteleButton = document.querySelectorAll(".task__button--remove-task")
  deteleButton.forEach((button) => {
    button.addEventListener("click", function(event){
      const taskItem = event.target.closest(".task__item")
      taskItem.remove()
    })
  })
}

deleteTask()