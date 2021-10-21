import React, {useContext} from 'react'
import { TodosContext } from '../../Context/todos/todosContext'

export default function Todo({t}) {

    const {updateTodo} = useContext(TodosContext)

    const handleUpdateTodo = (e) => {
        t.done = true
        updateTodo(t)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {t.text} {!t.done && <span className="btn btn-danger" onClick={handleUpdateTodo}>
                <i className="fas fa-check"></i></span>}</li>
    )
}
