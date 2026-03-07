const todoList = [{
    name:'make dinner', 
    dueDate:'2023-10-15'
      }, 
        {
            name:'wash dishes', 
            dueDate:'2023-10-16'
        }];

renderTodoList();

    function renderTodoList()
      {
            let todoListHTML = '';
        for (let i = 0; i < todoList.length; i++)
        {
            const todoObject = todoList[i];
            /*
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;

            */
            const {name, dueDate} = todoObject;//object destructuring. this is the same as the above 2-line commented code. it creates two variables name and dueDate and assigns them the values of the name and dueDate properties of the todoObject.

            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();"
             class="delete-todo-button"> Delete</button> 
            `;
            todoListHTML = todoListHTML + html;
        }

            document.querySelector('.js-todo-list').innerHTML = todoListHTML;

                }

function addTodo()
{
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

 todoList.push({
    name,
     dueDate
    /* or
    name:name,
    dueDate:dueDate*/
    });


 inputElement.value = '';

    renderTodoList();
}