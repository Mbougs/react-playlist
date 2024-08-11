import { useState } from "react";
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import AddItem from "./AddItem";

const TodoComponent = () => {
  let todosList = ["Wash up", "Eat some pizza", "Take a nap", "Buy flowers"];
  const [todos, setTodos] = useState(todosList);

  // function onDelete(item) {
  //   let updatedTodos = todos.filter(function (val, index) {
  //     return item !== val;
  //   });
  //   setTodos(updatedTodos);
  // }

  const onDelete = (item) => {
    let updatedTodos = todos.filter((val, index) => {
      return item !== val;
    });
    setTodos(updatedTodos)
  };

  const onAdd = (item) => {
    let updatedTodos = todos;
    updatedTodos.push(item);
    console.log(updatedTodos);
    
    return setTodos(updatedTodos);
  };

  const todosArr = todos.map((item, index) => (

    <TodoItem item={ item } key={ index } onDelete={ onDelete } />

   ));  

  return (
    <div id="todo-list">
      <Link to="/about">About</Link>
      <p>The busiest people have the most leisure...</p>
      <ul>
      {  todosArr   }
      <AddItem onAdd={ onAdd } />
      </ul>
    </div>      
  );
}

export default TodoComponent;