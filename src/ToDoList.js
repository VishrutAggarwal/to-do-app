import React from 'react'
import {useState} from 'react'

let globalID = 0

function ToDoList() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    

    function createTodo(event) {
        event.preventDefault()
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, {todo: task, id: globalID++, isComplete: false}]
        })
    }

    function deleteItem(ItemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== ItemID))
    }

    function taskClicked(ItemID) {
        setTodos(oldTodos => oldTodos.map(item =>
            {
                if(item.id === ItemID) {
                    item.isComplete = !item.isComplete
                }
                return item
            }))
    }

    function clearCompleted() {
        setTodos(oldTodos => oldTodos.filter(item => item.isComplete !== true))
    }

  return (
      <>
        <form onSubmit = {createTodo} id = "input-area">
            <input type = "text" value = {task} onChange = {event => setTask(event.target.value)}>
            </input>
            <button type = "submit" id = "input-button">Add Task</button>
        </form>
        <ul id = "task-area">
            {todos.map(item =>
                <div key = {item.id} id = "todo-component">
                    <button onClick = {() => taskClicked(item.id)} className = "checkbox">&#x2610;</button>
                    <li className = {item.isComplete ? "todo strikethrough" : "todo"}>{item.todo}{item.id}</li>
                    <button onClick = {() => deleteItem(item.id)} className = "delete-button">Delete Task</button>
                </div>)}
        </ul>
        <div id = "functions">
            <button onClick = {() => clearCompleted()}>Clear Completed</button>
        </div>
      </>
  )
}

export default ToDoList;