import { useState } from "react"

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])
    const handleNewTodo = (e) => setNewTodo(e.target.value)
    const saveTodo = () => {
        newTodo.length && setTodos((t) => ([...t, newTodo]))
        setNewTodo("")
    }
    const handleDelete = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index)
        setTodos(updatedTodos)
    }
  return (
    <>
        <h2>TodoList App</h2>
        <p><input type="text" placeholder="Enter a Todo..." value={newTodo} onChange={handleNewTodo}/><button onClick={saveTodo}>Save</button></p>
        <hr />
        <h3>List of todos :</h3>
        <ul>
            {todos.length === 0 && <p>No Todos to show...</p>}
            {todos.map((todo, index) => <li key={index}>
                <div className="todo">{todo} <span><button onClick={() => handleDelete(index)}>delete</button><button>mark done</button><button>go up</button><button>go down</button></span></div>
            </li>)}
        </ul>
    </>
  )
}

export default TodoList