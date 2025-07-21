import React from 'react'
import { useTodo } from '../Context'

function Sidebar() {
    // Get context functions and state
    const { todos, activeCategory, setActiveCategory, isSidebarOpen, toggleSidebar } = useTodo();

    // Define category configuration with icons, colors, and labels
    const categories = [
        {
            id: 'all',
            label: 'All Tasks',
            icon: '📋',
            color: 'text-gray-300',
            bgColor: 'bg-gray-500/20',
            borderColor: 'border-gray-400/30',
            hoverBg: 'hover:bg-gray-500/30'
        },
        {
            id: 'important',
            label: 'Important Tasks',
            icon: '⭐',
            color: 'text-red-400',
            bgColor: 'bg-red-500/20',
            borderColor: 'border-red-400/30',
            hoverBg: 'hover:bg-red-500/30'
        },
        {
            id: 'daily',
            label: 'Daily Tasks',
            icon: '📅',
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/20',
            borderColor: 'border-blue-400/30',
            hoverBg: 'hover:bg-blue-500/30'
        },
        {
            id: 'future',
            label: 'Future Tasks',
            icon: '🎯',
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/20',
            borderColor: 'border-purple-400/30',
            hoverBg: 'hover:bg-purple-500/30'
        }
    ];

    // Function to count tasks in each category
    const getTaskCount = (categoryId) => {
        if (categoryId === 'all') {
            return todos.length; // Return total count for "all" category
        }
        return todos.filter(todo => todo.category === categoryId).length;
    };

    // Function to count completed tasks in each category
    const getCompletedCount = (categoryId) => {
        if (categoryId === 'all') {
            return todos.filter(todo => todo.completed).length; // Return total completed count for "all" category
        }
        return todos.filter(todo => todo.category === categoryId && todo.completed).length;
    };

    return (
        <div className={`h-full transition-all duration-300 ${isSidebarOpen ? 'w-full lg:w-[28rem] p-4 md:p-6' : 'w-0 lg:w-16 p-0 lg:p-2'} overflow-hidden flex flex-col`}>
            {/* Sidebar Content - Only show when open */}
            {isSidebarOpen ? (
                <>
                    {/* Sidebar Header */}
                    <div className="mb-4 md:mb-6">
                        <div>
                            <h2 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">Categories</h2>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">Organize your tasks efficiently</p>
                            
                            {/* Close button for mobile - Hamburger icon - Below header text */}
                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                title="Close Sidebar"
                            >
                                <div className="w-5 h-5 flex flex-col justify-between">
                                    <div className="w-full h-0.5 bg-white rounded-sm"></div>
                                    <div className="w-full h-0.5 bg-white rounded-sm"></div>
                                    <div className="w-full h-0.5 bg-white rounded-sm"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Category List */}
                    <div className="space-y-3 md:space-y-4 flex-1">
                        {categories.map((category) => {
                            // Check if this category is currently active
                            const isActive = activeCategory === category.id;
                            const taskCount = getTaskCount(category.id);
                            const completedCount = getCompletedCount(category.id);

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`w-full max-w-xs p-2 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300 text-left group ${
                                        isActive 
                                            ? `${category.bgColor} ${category.borderColor} ${category.color}` 
                                            : `bg-white/5 border-white/10 text-gray-300 ${category.hoverBg} hover:border-white/20`
                                    }`}
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between mb-1 md:mb-2">
                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                            <span className="text-lg md:text-xl flex-shrink-0">{category.icon}</span>
                                            <span className="font-semibold text-xs md:text-base truncate">{category.label}</span>
                                        </div>
                                        {/* Task count badge */}
                                        <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                                            isActive 
                                                ? `${category.bgColor} ${category.color}` 
                                                : 'bg-gray-600/30 text-gray-400'
                                        }`}>
                                            {taskCount}
                                        </span>
                                    </div>

                                    {/* Progress information */}
                                    {taskCount > 0 && (
                                        <div className="text-xs text-gray-400">
                                            <span>{completedCount} of {taskCount} completed</span>
                                            {/* Progress bar */}
                                            <div className="w-full bg-gray-600/30 rounded-full h-1 md:h-1.5 mt-1 md:mt-2">
                                                <div 
                                                    className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                                                        isActive ? category.bgColor.replace('/20', '/60') : 'bg-gray-500/60'
                                                    }`}
                                                    style={{ 
                                                        width: `${taskCount > 0 ? (completedCount / taskCount) * 100 : 0}%` 
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sidebar Footer */}
                    <div className="mt-6 md:mt-10 pt-5 md:pt-8 border-t border-gray-700/30">
                        <div className="text-center text-gray-400 text-sm md:text-base">
                            <p className="font-medium">Total Tasks: {todos.length}</p>
                            <p className="mt-2">Completed: {todos.filter(todo => todo.completed).length}</p>
                        </div>
                    </div>
                </>
            ) : (
                /* Collapsed sidebar - Show only on desktop when collapsed */
                <div className="hidden lg:flex flex-col items-center py-4 space-y-4">
                    {categories.map((category) => {
                        const isActive = activeCategory === category.id;
                        const taskCount = getTaskCount(category.id);
                        
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`w-12 h-12 rounded-xl border transition-all duration-300 flex items-center justify-center relative group ${
                                    isActive 
                                        ? `${category.bgColor} ${category.borderColor} ${category.color}` 
                                        : `bg-white/5 border-white/10 text-gray-300 ${category.hoverBg} hover:border-white/20`
                                }`}
                                title={category.label}
                            >
                                <span className="text-xl">{category.icon}</span>
                                {taskCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                        {taskCount > 9 ? '9+' : taskCount}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Sidebar;
