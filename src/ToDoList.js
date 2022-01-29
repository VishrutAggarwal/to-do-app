import React from 'react'
import {useState} from 'react'

let globalID = 0

function ToDoList() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    

    function createTodo(event) {
        event.preventDefault()
        globalID++
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, {todo: task, id: globalID++}]
        })
    }

    function deleteItem(ItemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== ItemID))
    }

  return (
      <>
        <form onSubmit = {createTodo}>
            <input type = "text" value = {task} onChange = {event => setTask(event.target.value)}>
            </input>
            <button type = "submit">
                Create Task
            </button>
        </form>
        <ul>
            {todos.map(item =>
                <div key = {item.id}>
                    <li>{item.todo}</li>
                    <button onClick = {() => deleteItem(item.id)}>Delete</button>
                </div>)}
        </ul>
      </>
  )
}

export default ToDoList;
