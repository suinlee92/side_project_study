import { async } from 'q';
import React, { useReducer, createContext, useContext, useRef } from 'react';
import axios from 'axios';

// const initialTodos = [
//   {
//     id: 1,
//     text: '프로젝트 생성하기',
//     done: true
//   },
//   {
//     id: 2,
//     text: '컴포넌트 스타일링하기',
//     done: true
//   },
//   {
//     id: 3,
//     text: 'Context 만들기',
//     done: false
//   },
//   {
//     id: 4,
//     text: '기능 구현하기',
//     done: false
//   }
// ];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {

  const fetchTodolist = async()=> {
    const todolist = await axios.get('http://localhost:8080/todolist');
    // return todolist;
  }

  // async function initTodolist() {
  //   const todolist = await Promise.all(axios.get('http://localhost:8080/todolist'));
  //   return todolist;
  // }
  const [state, dispatch] = useReducer(todoReducer, fetchTodolist());
  const nextId = useRef(5);

console.log(state, 'state')

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}