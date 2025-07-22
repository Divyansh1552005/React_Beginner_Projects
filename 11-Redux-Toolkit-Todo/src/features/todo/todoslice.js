import { createSlice , nanoid} from "@reduxjs/toolkit";


const initialstate = [{
    id: nanoid(),
    title: "Learn Redux Toolkit",
}]

export const todoSlice = createSlice({
    name: "todo",
    initialstate,
    reducers: {
        addTodo : (state , action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
            }
            // updating the state
            state.push(todo);
        },

        removeTodo : (state , action)=>{
            state = state.filter((todo) => todo.id !== action.payload.id);
        },

        toggleTodo : (state , action)=>{
            const todo = state.find((todo) => todo.id === action.payload.id);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        
        updateTodo : (state ,action) =>{
            const todo = state.find( (todo) => todo.id === action.payload.id);
            if(todo){
                todo.title = action.payload.title;
                // If you want to update other properties, you can do so here
                // e.g., todo.completed = action.payload.completed;
            }
            // Note: In Redux Toolkit, you can directly mutate the state like this
            // because it uses Immer under the hood, which allows for mutable operations
            // while still keeping the state immutable in the Redux store.

            // This is a key feature of Redux Toolkit that simplifies state updates.
            

        }

    }
})

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
// Exporting the reducer to be used in the store
export default todoSlice.reducer;
// The reducer will be used in the store configuration 


// in reducers properties and functions are defined