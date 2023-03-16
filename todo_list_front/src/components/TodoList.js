import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
import axios from 'axios';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


function TodoList() {
  const todos = useTodoState();
  // const [todos, setTodos] = useState([]);
  // const count = todos.length;
  
  // useEffect(()=> {
  //   const fetchTodolist = async()=> {
  //     const todolist = await axios.get('http://localhost:8080/todolist');
  //     setTodos(todolist.data);
  //   }
  //   fetchTodolist();
  // }, []);

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.TODOLIST_MASTER_ID}
          id={todo.TODOLIST_MASTER_ID}
          text={todo.MASTER_CONTENTS}
          done={todo.TODOLIST_STATUS}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;