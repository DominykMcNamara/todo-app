import React, {useState, createContext} from "react";

export const TodoContext = createContext()

export const TodoContextProvider = props => {
    const [todos, setTodos] = useState([])
    const [numberOfIncompletedTodos, setNumberOfIncompletedTodos] = useState()
    const [filter, setFilter] = useState("all")

    return (
        <TodoContext.Provider value={{todos, setTodos, numberOfIncompletedTodos, setNumberOfIncompletedTodos}}>
            {props.children}
        </TodoContext.Provider>
    )
}