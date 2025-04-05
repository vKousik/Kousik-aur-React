import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    dispatch(addTodo(inputText));
    
    setInputText('');
  };

  return (
    <div className="max-w-2xl mx-auto mb-6">
      <form 
        onSubmit={handleSubmit} 
        className="p-4 rounded-lg shadow-sm border
                  bg-white border-gray-100
                  dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex items-center gap-3">
          {/* <div 
            className="flex-shrink-0 w-5 h-5 rounded-full border-2
                      border-gray-300
                      dark:border-gray-600"
            aria-hidden="true" 
          /> */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow bg-transparent focus:outline-none
                      text-gray-800 placeholder-gray-500
                      dark:text-gray-100 dark:placeholder-gray-400"
            autoFocus
          />
          <button
            type="submit"
            className={`px-3 py-1 text-sm rounded transition-colors
              ${inputText.trim() 
                ? 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
              }`}
            disabled={!inputText.trim()}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;