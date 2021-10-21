import React, {useContext, useState} from 'react'
import { TodosContext } from '../../Context/todos/todosContext'
 
export default function AddTodo() {
    const [text, setText] = useState("")
    const {addTodo}  = useContext(TodosContext)
    let todo = {}
    const add = (e) => {
        e.preventDefault()
        todo.text = text
        addTodo(todo)
        setText("")
    }

    const handleChangeText  =(e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className="input-group mx-3">
                <input type="text" className="form-control" placeholder="Add todo text" value={text} onChange = {handleChangeText} />
                <button className="btn btn-secondary" type="button" onClick={add}>ADD TODO</button>
            </div>
        </>
    )
}
