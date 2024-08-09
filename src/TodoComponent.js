import { useState } from "react";
import TodoItem from './TodoItem';


const TodoComponent = () => {
  let todosList = ["wash up", "eat some pizza", "take a nap", "buy flowers"];
  const [todos, setTodos] = useState(todosList);

  const onDelete = (item) => {
    let updatedTodos = todos.filter((val, index) => (
      item !== val
    ),
    setTodos(updatedTodos)
    );

  };

  const todosArr = todos.map((item, index) => (

    <TodoItem item={ item } key={ index } wipe={ onDelete } />

   ));

  
  return (
    <div id="todo-list">
      <p>The busiest people have the most leisure...</p>
      <ul>
      {  todosArr   }
      </ul>
    </div>
  );
}
export default TodoComponent;
