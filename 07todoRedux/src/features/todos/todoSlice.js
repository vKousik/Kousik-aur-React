import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todoState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todoState', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  };
  

  const initialState = loadState() || {
    todos: [{ id: 1, text: "Focus on myself", completed: false }],
    filters: "all"
  };

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo);
            saveState(state);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveState(state);
        },
        editTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
            })
            saveState(state);
        },
        toggleTodo : (state , action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
            })
            saveState(state);
        },
        setFilter : (state , action ) => {
            state.filters = action.payload;
            saveState(state);
        }
    }
});

export const {addTodo , deleteTodo , editTodo , toggleTodo , setFilter } = todoSlice.actions;
export default todoSlice.reducer;