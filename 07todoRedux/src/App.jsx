import React from 'react';
import TodoItems from './components/TodoItems';
import TodoFilter from './components/TodoFilter';
import AddTodo from './components/AddTodo';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-200">
      <div className="max-w-2xl mx-auto text-center"> {/* Added text-center here */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Redux Todo App
          </h1>
          <div className="flex justify-center"> {/* Center the theme toggle */}
            <ThemeToggle />
          </div>
        </header>
        
        <div className="space-y-6">
          <TodoFilter />
          <AddTodo />
          <TodoItems />
        </div>
      </div>
    </div>
  );
}

export default App;