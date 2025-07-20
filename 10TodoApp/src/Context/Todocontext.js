import { createContext, use, useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "Todo 1",
            completed: false
        }
    ],
    addTodo : (todo) =>{},
    deleteTodo: (id) => {},
    updateTodo: (id, updatedTodo) => {},
    toggleComplete: (id) => {},
    

});

export const useTodo = () =>{
     return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

