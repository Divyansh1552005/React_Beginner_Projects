import { useState, useEffect} from 'react'
import './App.css'
import { TodoProvider } from './Context/Todocontext'
import Todoform from './Components/Todoform'
import Todoitem from './Components/Todoitem'



function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    // todo is an array and also ye prev ka access islie le rahe coz agar isrf setTodo(todo) toh pura array replace ho jayega.

    const deleteTodo = (id) => { 
        setTodos((prev) => prev.filter((todo) => todo.id !== id)) // we are making a new array without the todo that has the id we want to delete
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    // now to get all previous todo items added by user even after page reload we will use local storage and page relaod hote hi vo sab dikh jaaye uske liye we can use useEffect Hook

    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) ;
      // todos is an array of objects and we are getting it from local storage and parsing it to convert it back to an array of objects
      // localStorage se data lete waqt hamesha string mein hota hai islie
      // JSON.parse() se hum usko array mein convert karte hain

      if(savedTodos && savedTodos.length > 0){
        setTodos(savedTodos);
      }


    } , []);

    // setting item in local storage
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      // JSON.stringify() se hum array of objects ko string mein convert karte hain taki local storage mein store kar sake

    } , [todos]);




 
  return (
    <TodoProvider value={{todos,addTodo , deleteTodo, updateTodo, toggleComplete}}>
      <h1 className='text-white text-4xl text-center py-4 rounded-2xl font-bold bg-[#172842] shadow-md shadow-blue-500/20 border border-blue-400/10' style={{textShadow: '0 0 5px #3b82f6'}}>
        Task Management Application
      </h1>

      <div className="bg-[#172842] min-h-screen py-4 rounded-2xl">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Tasks Efficiently</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform />
                    </div>
                    
                    {/* Task Count Display */}
                    {todos.length > 0 && (
                        <div className="mb-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700/30">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-blue-200">
                                    Active: {todos.filter(todo => !todo.completed).length}
                                </span>
                                <span className="text-blue-200">
                                    Completed: {todos.filter(todo => todo.completed).length}
                                </span>
                                <span className="text-blue-200">
                                    Total: {todos.length}
                                </span>
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <Todoitem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-[#172842] border-t border-gray-700/30 py-8 mt-8">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center">
                        <p className="text-gray-300 text-lg mb-4">
                            Made with ❤️ by <span className="font-semibold text-white">Divyansh</span> using React
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mb-4">
                            <a 
                                href="https://github.com/Divyansh1552005" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                                </svg>
                                <span>GitHub</span>
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/divyansh-sharma-b05897286/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                            
                            <a 
                                href="https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/10TodoApp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                                </svg>
                                <span>Source Code</span>
                            </a>
                        </div>
                        
                        {/* Project Info */}
                        <p className="text-gray-500 text-sm">
                            Built using React and Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
    </TodoProvider>
  )
}

export default App
