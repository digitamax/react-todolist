import { createContext, useReducer, useEffect } from "react";
import todosReducer from "./todosReducer";
import axios from 'axios'
import { GET_TODOS, ADD_TODO, UPDATE_TODO } from "./types";
import uuid from 'uuid'
export const TodosContext  = createContext();

const TodosState = (props) => {
const initialState = {
    todos: [],
}

const  [state, dispatch] = useReducer(todosReducer,initialState)

useEffect(()=> {
    async function fetchTodos () {
        try {
            const res = await axios.get('http://localhost:5000/todos')
            dispatch({ type:GET_TODOS, payload: {todos:res.data} })
        } catch (error) {
            console.log(error)
        } 
    }
    fetchTodos()
}, [])

//Add todo
const addTodo = async (todo) => {
    todo.id= uuid.v4()
    todo.done = false
    try {
        const res = await axios.post("http://localhost:5000/todos", todo, {
            headers:{
                "content-type":"application/json"
            }
        })
        dispatch({ type: ADD_TODO, payload:{todo:res.data}})
        
    } catch (error) {
        console.log(error)
    }
}

//Update Todo
const updateTodo = async (todo) => {
    try {
        await axios.put("http://localhost:5000/todos/"+todo.id, todo)
        dispatch({ type: UPDATE_TODO, payload:{todo}})
    } catch (error) {
        console.log(error)
    }
}

return(
    <TodosContext.Provider value={{
        todos: state.todos,
        addTodo,
        updateTodo
    }}>
        {props.children}
    </TodosContext.Provider>
    )

}

export default TodosState