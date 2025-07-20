import React, { useState } from 'react'
import { useTodo } from '../Context';


function Todoform() {
    const [todo , setTodo] = useState(""); // this is for individual todo item
    const [description, setDescription] = useState(""); // this is for todo description

    const {addTodo} = useTodo(); // destructure the context to get the addTodo function

    const add = (e) =>{
        e.preventDefault();
        // if nothing in todo
        if(!todo){
            return;
        }

        addTodo({todo, description, completed: false}); // call the addTodo function from context with the todo object

        setTodo(""); // reset the input field after adding the todo
        setDescription(""); // reset the description field
    }

    return (
        <form onSubmit={add} className="space-y-6">
            {/* Task Title Input */}
            <div className="relative">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                    📝 Task Title
                </label>
                <input
                    type="text"
                    placeholder="Write your task title..."
                    className="w-full border border-gray-600/40 rounded-xl px-5 py-4 outline-none duration-300 bg-gray-800/40 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:border-gray-400/70 focus:bg-gray-700/50 focus:shadow-md focus:shadow-gray-500/10 transition-all"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </div>
            
            {/* Task Description Input */}
            <div className="relative">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                    📄 Task Description <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <textarea
                    placeholder="Add detailed description for your task..."
                    className="w-full border border-gray-600/40 rounded-xl px-5 py-4 outline-none duration-300 bg-gray-800/40 backdrop-blur-md text-gray-100 placeholder-gray-400 resize-none h-24 focus:border-gray-400/70 focus:bg-gray-700/50 focus:shadow-md focus:shadow-gray-500/10 transition-all"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            
            {/* Add Button */}
            <button type="submit" className="w-full rounded-xl py-4 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/20 transform hover:scale-[1.02] active:scale-[0.98]">
                ➕ Add Task
            </button>
        </form>
    );
}


export default Todoform