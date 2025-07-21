import { createContext, use, useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "Todo 1",
            description: "Sample description for the todo",
            category: "daily", // Category field: "important", "daily", "future"
            completed: false
        }
    ],
    addTodo : (todo) =>{},
    deleteTodo: (id) => {},
    updateTodo: (id, updatedTodo) => {},
    toggleComplete: (id) => {},
    // New category-related functions
    activeCategory: "daily", // Currently selected category filter
    setActiveCategory: (category) => {}, // Function to change active category
    getFilteredTodos: () => {}, // Function to get todos filtered by active category
    

});export const useTodo = () =>{
     return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

