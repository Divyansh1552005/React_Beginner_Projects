import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context';

function Todoitem({ todo }) {
    const { deleteTodo, updateTodo, toggleComplete } = useTodo(); // destructure the context to get the functions

    const [isTodoEditable, setIsTodoEditable] = useState(false); // state to check if todo is editable so icon show hovega ya nahi
    const [todoMsg, setTodoMsg] = useState(todo.todo); // state to hold the todo message

    const editTodo = ()=>{
        updateTodo(todo.id , {...todo, todo: todoMsg}); // call the updateTodo function from context with the updated todo object
        setIsTodoEditable(false); // after editing the todo, set the isTodoEditable state

    }

    const toggleCompleted = () => {
        toggleComplete(todo.id); // call the toggleComplete function from context with the todo id
    } 
    // this function will be called when the user clicks on the checkbox to mark the todo as completed or not
    // it will toggle the completed state of the todo

    return (
        <div
            className={`group flex items-start backdrop-blur-sm border rounded-xl p-4 gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[80px] w-full ${
                todo.completed ? "bg-green-500/20 border-green-400/30" : "bg-white/10 border-white/20"
            }`}
        >
            {/* Custom Checkbox */}
            <div className="relative flex-shrink-0 mt-1">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <div
                    onClick={toggleCompleted}
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        todo.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-white bg-white/10"
                    }`}
                >
                    {todo.completed && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                    )}
                </div>
            </div>

            {/* Todo Content */}
            <div className="flex-1">
                <input
                    type="text"
                    className={`w-full bg-transparent text-white placeholder-gray-400 outline-none transition-all duration-300 font-semibold text-lg ${
                        isTodoEditable
                            ? "bg-white/10 px-3 py-2 rounded-lg border border-blue-400/50 focus:border-blue-400"
                            : "border-none"
                    } ${todo.completed ? "line-through text-gray-400" : "text-white"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                    placeholder="Enter your todo..."
                />
                {/* Description Display */}
                {todo.description && (
                    <p className={`text-sm mt-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-300"}`}>
                        {todo.description}
                    </p>
                )}
            </div>

            {/* Action Buttons Container */}
            <div className="flex items-center gap-2">
                {/* Edit/Save Button */}
                <button
                    className={`p-2 rounded-lg transition-all duration-300 border border-transparent ${
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    )}
                </button>

                {/* Delete Button */}
                <button
                    className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-400/30 hover:bg-red-500/30 transition-all duration-300"
                    onClick={() => deleteTodo(todo.id)}
                    title="Delete"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Todoitem;

