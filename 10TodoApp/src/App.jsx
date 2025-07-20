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
      <h1 className='bg-[#172870] text-white text-3xl text-center py-6 shadow-lg rounded-2xl '>
        Task Management Application with React
      </h1>

      <div className="bg-[#172842] min-h-screen py-8 rounded-2xl">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
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
                    
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <Todoitem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
