import React from 'react'
import AddTodo from '../Todos/AddTodo'
import TodoList from '../Todos/TodoList'

export default function Home() {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-6 px-4">
                    <AddTodo/>
                </div>
                <div className="col-6 px-4">
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}
