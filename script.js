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
  }
}

createTaskItem()