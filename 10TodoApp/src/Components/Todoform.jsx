import React, { useState } from 'react'
import { useTodo } from '../Context';


function Todoform() {
    const [todo , setTodo] = useState(""); // this is for individual todo item
    const [description, setDescription] = useState(""); // this is for todo description
    // New state for category selection
    const [category, setCategory] = useState("daily"); // Default to daily category

    const {addTodo, activeCategory} = useTodo(); // destructure the context to get the addTodo function and active category

    // Set the form category to match the active category when it changes
    React.useEffect(() => {
        setCategory(activeCategory);
    }, [activeCategory]);

    // Category options configuration
    const categoryOptions = [
        { id: 'important', label: 'Important', icon: '⭐', color: 'text-red-400' },
        { id: 'daily', label: 'Daily', icon: '📅', color: 'text-blue-400' },
        { id: 'future', label: 'Future', icon: '🎯', color: 'text-purple-400' }
    ];

    const add = (e) =>{
        e.preventDefault();
        // if nothing in todo
        if(!todo){
            return;
        }

        // Add todo with selected category
        addTodo({todo, description, category, completed: false}); // Include category in todo object

        setTodo(""); // reset the input field after adding the todo
        setDescription(""); // reset the description field
        // Keep the same category selected for next todo
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

            {/* Category Selection */}
            <div className="relative">
                <label className="block text-gray-300 text-sm font-medium mb-3">
                    🏷️ Task Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {categoryOptions.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            onClick={() => setCategory(option.id)}
                            className={`p-3 rounded-xl border transition-all duration-300 flex flex-row sm:flex-col items-center justify-center gap-2 ${
                                category === option.id
                                    ? `bg-gray-700/60 border-gray-500/60 ${option.color}`
                                    : 'bg-gray-800/30 border-gray-600/30 text-gray-400 hover:bg-gray-700/40 hover:border-gray-500/40'
                            }`}
                        >
                            <span className="text-xl sm:text-2xl">{option.icon}</span>
                            <span className="text-sm font-medium">{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Add Button */}
            <button type="submit" className="w-full rounded-xl py-4 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/20 transform hover:scale-[1.02] active:scale-[0.98]">
                ➕ Add to {categoryOptions.find(opt => opt.id === category)?.label} Tasks
            </button>
        </form>
    );
}


export default Todoform