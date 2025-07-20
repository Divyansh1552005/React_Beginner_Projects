import React, { useState } from 'react'
import { useTodo } from '../Context';


function Todoform() {
    const [todo , setTodo] = useState(""); // this is for individual todo item

    const {addTodo} = useTodo(); // destructure the context to get the addTodo function

    const add = (e) =>{
        e.preventDefault();
        // if nothing in todo
        if(!todo){
            return;
        }

        addTodo({todo, completed: false}); // call the addTodo function from context with the todo object

        setTodo(""); // reset the input field after adding the todo
    }

    return (

<form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Your Tasks..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}


export default Todoform