import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../features/todos/todoSlice';

const TodoItems = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filters);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim() === '') return;
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {filteredTodos.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400 dark:text-gray-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">No tasks yet</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">Add your first task to get started</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                todo.completed 
                  ? 'bg-green-50 dark:bg-green-900/30' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              } shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md`}
            >
              <div className="flex items-center space-x-3 flex-grow min-w-0">
                <button
                  onClick={() => dispatch(toggleTodo({ id: todo.id }))}
                  className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.completed
                      ? 'bg-green-500 border-green-500 dark:bg-green-600 dark:border-green-600'
                      : 'border-gray-300 dark:border-gray-500 hover:border-gray-400 dark:hover:border-gray-400'
                  }`}
                >
                  {todo.completed && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {editId === todo.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave(todo.id);
                      if (e.key === 'Escape') {
                        setEditId(null);
                        setEditText('');
                      }
                    }}
                    className="flex-grow border-b-2 border-blue-500 bg-transparent px-1 py-1 focus:outline-none dark:text-gray-100"
                    autoFocus
                  />
                ) : (
                  <p
                    className={`flex-grow truncate ${
                      todo.completed 
                        ? 'line-through text-gray-500 dark:text-gray-400' 
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {todo.text}
                  </p>
                )}
              </div>

              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {editId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="p-1.5 text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400 transition-colors"
                      title="Save"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditText('');
                      }}
                      className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      title="Cancel"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(todo)}
                      className="p-1.5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      className="p-1.5 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoItems;