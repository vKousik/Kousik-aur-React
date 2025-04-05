import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/todoSlice';

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filters);

  return (
    <div className="flex justify-center mb-6 gap-2">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={`px-4 py-2 rounded transition-colors
          ${filter === 'all' 
            ? 'bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800' 
            : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600'
          }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        className={`px-4 py-2 rounded transition-colors
          ${filter === 'active'
            ? 'bg-yellow-500 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700'
            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600'
          }`}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        className={`px-4 py-2 rounded transition-colors
          ${filter === 'completed'
            ? 'bg-green-600 text-white dark:bg-green-700 dark:hover:bg-green-800'
            : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600'
          }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;