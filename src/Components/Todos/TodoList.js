import React, {useContext} from 'react'
import { TodosContext } from '../../Context/todos/todosContext'
import Todo from './Todo'

export default function TodoList() {
    //const [alltodos, setTodos] = useState()
    const todosContext = useContext(TodosContext)
    const {todos} = todosContext
    return (
        <>
           <ul className="list-group list-group-flush">
            {
                todos.map(todo => (
                    <Todo key={todo.id} t={todo}/>
                ))
            }
        </ul> 
        </>
    )
}
