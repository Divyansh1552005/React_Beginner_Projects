import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context';

function Todoitem({ todo }) {
    const { deleteTodo, updateTodo, toggleComplete } = useTodo(); // destructure the context to get the functions

    const [isTodoEditable, setIsTodoEditable] = useState(false); // state to check if todo is editable so icon show hovega ya nahi
    const [todoMsg, setTodoMsg] = useState(todo.todo); // state to hold the todo message
    const [todoDescription, setTodoDescription] = useState(todo.description || ''); // state to hold the todo description
    // New state for editing category
    const [todoCategory, setTodoCategory] = useState(todo.category || 'daily'); // state to hold the todo category

    // Category configuration for display and editing
    const categoryOptions = [
        { id: 'important', label: 'Important', icon: '⭐', color: 'text-red-400', bgColor: 'bg-red-500/20' },
        { id: 'daily', label: 'Daily', icon: '📅', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { id: 'future', label: 'Future', icon: '🎯', color: 'text-purple-400', bgColor: 'bg-purple-500/20' }
    ];

    // Get category display information
    const getCategoryInfo = (categoryId) => {
        return categoryOptions.find(cat => cat.id === categoryId) || categoryOptions[1]; // Default to daily
    };

    const editTodo = ()=>{
        // Update todo with all editable fields including category
        updateTodo(todo.id , {...todo, todo: todoMsg, description: todoDescription, category: todoCategory}); 
        setIsTodoEditable(false); // after editing the todo, set the isTodoEditable state

    }

    const toggleCompleted = () => {
        toggleComplete(todo.id); // call the toggleComplete function from context with the todo id
    } 
    // this function will be called when the user clicks on the checkbox to mark the todo as completed or not
    // it will toggle the completed state of the todo

    return (
        <div
            className={`group flex items-start backdrop-blur-sm border rounded-lg md:rounded-xl p-3 md:p-4 gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] min-h-[70px] md:min-h-[80px] w-full ${
                todo.completed ? "bg-green-500/20 border-green-400/30" : "bg-white/10 border-white/20"
            }`}
        >
            {/* Custom Checkbox */}
            <div className="relative flex-shrink-0 mt-0.5 md:mt-1">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <div
                    onClick={toggleCompleted}
                    className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        todo.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-white bg-white/10"
                    }`}
                >
                    {todo.completed && (
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                    )}
                </div>
            </div>

            {/* Todo Content */}
            <div className="flex-1">
                {/* Category Badge - Shows at top */}
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <span className={`inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-medium ${getCategoryInfo(todo.category).bgColor} ${getCategoryInfo(todo.category).color}`}>
                        <span className="text-xs md:text-sm">{getCategoryInfo(todo.category).icon}</span>
                        <span className="text-xs">{getCategoryInfo(todo.category).label}</span>
                    </span>
                </div>

                {/* Task Title Input */}
                <input
                    type="text"
                    className={`w-full bg-transparent text-white placeholder-gray-400 outline-none transition-all duration-300 font-semibold text-base md:text-lg ${
                        isTodoEditable
                            ? "bg-white/10 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-blue-400/50 focus:border-blue-400"
                            : "border-none"
                    } ${todo.completed ? "line-through text-gray-400" : "text-white"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                    placeholder="Enter your todo..."
                />
                
                {/* Description Input/Display */}
                {isTodoEditable ? (
                    <textarea
                        className="w-full bg-white/10 px-2 md:px-3 py-1.5 md:py-2 mt-1.5 md:mt-2 rounded-lg border border-blue-400/50 focus:border-blue-400 text-white placeholder-gray-400 outline-none transition-all duration-300 text-xs md:text-sm resize-none"
                        value={todoDescription}
                        onChange={(e) => setTodoDescription(e.target.value)}
                        placeholder="Add a description (optional)..."
                        rows="2"
                    />
                ) : (
                    todo.description && (
                        <p className={`text-xs md:text-sm mt-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-300"}`}>
                            {todo.description}
                        </p>
                    )
                )}

                {/* Category Selection - Only in edit mode */}
                {isTodoEditable && (
                    <div className="mt-2 md:mt-3">
                        <label className="block text-gray-400 text-xs font-medium mb-1.5 md:mb-2">
                            Change Category:
                        </label>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {categoryOptions.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => setTodoCategory(option.id)}
                                    className={`px-1.5 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg border transition-all duration-300 flex items-center gap-1 text-xs ${
                                        todoCategory === option.id
                                            ? `${option.bgColor} border-gray-500/60 ${option.color}`
                                            : 'bg-gray-800/30 border-gray-600/30 text-gray-400 hover:bg-gray-700/40'
                                    }`}
                                >
                                    <span className="text-xs">{option.icon}</span>
                                    <span className="hidden sm:inline text-xs">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Action Buttons Container */}
            <div className="flex items-center gap-1.5 md:gap-2">
                {/* Edit/Save Button */}
                <button
                    className={`p-1.5 md:p-2 rounded-md md:rounded-lg transition-all duration-300 border border-transparent ${
                        todo.completed
                            ? "text-gray-500 cursor-not-allowed opacity-50"
                            : isTodoEditable
                            ? "bg-green-500/20 text-green-400 border-green-400/30 hover:bg-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-400/30 hover:bg-blue-500/30"
                    } disabled:opacity-50`}
                    onClick={() => {
                        if (todo.completed) return;
                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                    title={isTodoEditable ? "Save" : "Edit"}
                >
                    {isTodoEditable ? (
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    )}
                </button>

                {/* Delete Button */}
                <button
                    className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-red-500/20 text-red-400 border border-red-400/30 hover:bg-red-500/30 transition-all duration-300"
                    onClick={() => deleteTodo(todo.id)}
                    title="Delete"
                >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Todoitem;

