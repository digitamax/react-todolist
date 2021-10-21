import {ADD_TODO, UPDATE_TODO, GET_TODOS} from './types'

const todosReducer = (state, action) => {

    switch (action.type){

        case GET_TODOS: 
        return {
            ...state,
            todos: action.payload.todos
        }
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload.todo]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.todo.id)
                        todo.done=true
                    return todo
                })
            }
        default:
            return state
    }

}

export default todosReducer