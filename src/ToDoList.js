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
            return [...oldTodos, {todo: task, id: globalID++, isComplete: false}]
        })
    }

    function deleteItem(ItemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== ItemID))
    }

    function taskCompleted(ItemID) {
        setTodos(oldTodos => oldTodos.map(item =>
            {
                if(item.id === ItemID) {
                    item.isComplete = true
                }
                return item
            }))
    }

    function taskUnCompleted(ItemID) {
        setTodos(oldTodos => oldTodos.map(item =>
            {
                if(item.id === ItemID) {
                    item.isComplete = false
                }
                return item
            }))
    }

  return (
      <>
        <form onSubmit = {createTodo} id = "input-area">
            <input type = "text" value = {task} onChange = {event => setTask(event.target.value)}>
            </input>
            <button type = "submit" id = "input-submit">
                Add Task
            </button>
        </form>
        <ul id = "task-area">
            {todos.map(item =>
                <div key = {item.id} id = "todo-component">
                    <li className = {item.isComplete ? "strikethrough" : ""}>{item.todo}</li>
                    <button onClick = {() => taskCompleted(item.id)}>Check Task</button>
                    <button onClick = {() => taskUnCompleted(item.id)}>Uncheck Task</button>
                    <button onClick = {() => deleteItem(item.id)}>Delete Task</button>
                </div>)}
        </ul>
      </>
  )
}

export default ToDoList;