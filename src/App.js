import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

var count = 0
const COMPLETED = "COMPLETED"
const INCOMPLETED = "INCOMPLETED"
const ALL = "ALL"
var countOfTodos = 0

function App() {
  const [editingFlag, setEditingFlag] = useState(-1)
  const [filter, setFilter] = useState(INCOMPLETED)
  const [todoList, setTodoList] = useState([
    {
      id: count++,
      todo: "Homework",
      completed: false  
    },
    {
      id: count++,
      todo: "Lunch",
      completed: true
    },
    {
      id: count++,
      todo: "Dinner",
      completed: false
    },
    {
      id: count++,
      todo: "Sleep",
      completed: true
    }
  ])

  const addTodo = () => {
    console.log("Add todo")
    console.log("Text readed:", document.getElementById("input").value)
    console.log("todoList:", todoList)

    const text = document.getElementById("input").value
    const todoObject = {
      id: count++,
      todo: text,
      completed: false
    }
    setTodoList([...todoList, todoObject])

  }

  const deleteTodo = (id) => {
    console.log("deleteTodo :", id)
    var tempTodoList = todoList.filter(iterator => {
      return id != iterator.id
      // if(id === iterator.id)
      // { return false}
      // else 
      // { return true }
    })
    setTodoList([...tempTodoList])
  }

  const completedTodo = (id) => {
    console.log("completeTodo", id)

    var tempTodoList = todoList.map(iterator => {
      if (id === iterator.id) {
        iterator.completed = !iterator.completed
        return iterator
      }
      else {
        return iterator
      }
    })
    setTodoList([...tempTodoList])
  }

  const editTodo = (id) => {
    console.log("editTodo: ", id)
    setEditingFlag(id)
  }

const  saveEditedTodo = () => {
  console.log("saveEditTodo:")
  const updatedTodoText = document.getElementById("editingTodo").value
  console.log("UpdatedTodoText:",updatedTodoText)
  var  tempTodoList = todoList.map(iterator =>
  {
    if(editingFlag == iterator.id)
    {
      iterator.todo = updatedTodoText
      return iterator
    }
    else{
      return iterator
    }
  })
  setTodoList(tempTodoList)
  setEditingFlag(-1)
}
const filterTodo = (action) =>
{
  console.log("filterTodo:", action);
  switch(action)
  {
    case INCOMPLETED:
      setFilter(INCOMPLETED)
      break;
    case COMPLETED:
      setFilter(COMPLETED)

      break;
    case ALL:
      setFilter(ALL)

      break;
     default:
      break;     
  }
}


  return (
    <div >
      <h1 class= "heading">Todo Application </h1>
      <h4 class= "subHeading">(by   Mayank)</h4>
      <div class="todosHeading">
        <label onClick={()=>filterTodo(INCOMPLETED)}>Incomplete</label>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(COMPLETED)}>Completed</label>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(ALL)}>All</label>

      </div>
      <input type="text" id="input" placeholder="Enter todo here" />
      <button onClick={addTodo}>Add Todo</button>

      <div>
        <ul class = "listStyle">
          {todoList.map(iterator => 
          {
            if(todoList[0].id === iterator.id)
              countOfTodos = 0
            switch(filter)
            {
              case INCOMPLETED:
                {
                  if(!iterator.completed)
                  {
                    countOfTodos += 1
                    return <li key={iterator.id} class = "listItem">
                            {
                                iterator.completed == true ?
                                <>
                                  <input type="checkbox" onChange={() => completedTodo(iterator.id)} checked />
                                  <s>{iterator.todo}</s>
                                </> :
                                <>
                                  {editingFlag === iterator.id ?
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      <input type="text" defaultValue={iterator.todo} id="editingTodo" />
                                      <button onClick={() => deleteTodo(iterator.id)}>button</button>
                                      <button onClick={saveEditedTodo}>Save</button>
                                    </> :
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      {iterator.todo}
                                      <button onClick={() => deleteTodo(iterator.id)}>Delete</button>
                                      <button onClick={() => editTodo(iterator.id)}>Edit</button>
                                    </>
                                  }
                                </>
                              }
                          </li>
                  }
                  break;
                }
              case COMPLETED:
               {
                if(iterator.completed)
                {
                  countOfTodos += 1

                  return <li key={iterator.id} class = "listItem">
                            {
                                iterator.completed == true ?
                                <>
                                  <input type="checkbox" onChange={() => completedTodo(iterator.id)} checked />
                                  <s>{iterator.todo}</s>
                                </> :
                                <>
                                  {editingFlag === iterator.id ?
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      <input type="text" defaultValue={iterator.todo} id="editingTodo" />
                                      <button onClick={() => deleteTodo(iterator.id)}>button</button>
                                      <button onClick={saveEditedTodo}>Save</button>
                                    </> :
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      {iterator.todo}
                                      <button onClick={() => deleteTodo(iterator.id)}>Delete</button>
                                      <button onClick={() => editTodo(iterator.id)}>Edit</button>
                                    </>
                                  }
                                </>
                              }
                          </li>
                }
                break;
               } 
              case ALL:
               {
                countOfTodos += 1

                return <li key={iterator.id} class = "listItem">
                            {
                                iterator.completed == true ?
                                <>
                                  <input type="checkbox" onChange={() => completedTodo(iterator.id)} checked />
                                  <s>{iterator.todo}</s>
                                </> :
                                <>
                                  {editingFlag === iterator.id ?
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      <input type="text" defaultValue={iterator.todo} id="editingTodo" />
                                      <button onClick={() => deleteTodo(iterator.id)}>button</button>
                                      <button onClick={saveEditedTodo}>Save</button>
                                    </> :
                                    <>
                                      <input type="checkbox" onChange={() => completedTodo(iterator.id)} />
                                      {iterator.todo}
                                      <button onClick={() => deleteTodo(iterator.id)}>Delete</button>
                                      <button onClick={() => editTodo(iterator.id)}>Edit</button>
                                    </>
                                  }
                                </>
                              }
                          </li>
                break;
               }   
              default:  
    
            }
            // console.log("iterator",iterator)
            
          })
          }
        </ul>
        <div>
          count: {countOfTodos}
        </div>
      </div>
    </div>

  );
}

export default App;