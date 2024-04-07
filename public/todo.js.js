
let TODO_LIST=[];
       
//  TODO_LIST=Array.from( JSON.parse(localStorage.getItem('todolist'))||{todo:'',todotime:''});
    
  
renderTodo();



function AddTodo()
  {
     const inputElement=document.querySelector('.todo-input');
     const inputTime=document.querySelector('.date-input');
     const todo=inputElement.value;
     const todo_time=inputTime.value;
    TODO_LIST.push(
        {
           todo:todo,
           dates:todo_time
        }
      );
      // localStorage.setItem('score',JSON.stringify(TODO_LIST));
      
      inputTime.value='';
      inputElement.value='';
      
     renderTodo();
     

  }

function renderTodo()
  { 

     if(TODO_LIST!==null)
    {
     let todoListHtml='';
    for (let i=0;i<TODO_LIST.length;i++)
    {
      const todoObject=TODO_LIST[i];
      const todos=todoObject.todo;
      const todotimes=todoObject.dates;
      const html=`<p class="output">  <span class="todo-outpu">🧭 ${todos} </span> <span class="date-outpu"> ${todotimes} </span> <button onclick="deleteTodo(${i})" class=" btn btn-danger delete_button "><span style="color :black">x</span><span style="color:transparent">__</span>DEL</button> </p> `;
        todoListHtml+=html;
    }
    document.querySelector('.todo-output').innerHTML=todoListHtml;
    }
  else if(TODO_LIST===null)
    {
      document.querySelector('.todo-output').innerHTML='<h1 class="no-plan"> 🤢 no plan added</h1>';

    }};


  function deleteTodo(i)
    {
       TODO_LIST.splice(i,1);
       renderTodo();
    }