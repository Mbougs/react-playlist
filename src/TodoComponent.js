import { useState } from "react";
import TodoItem from './TodoItem';


const TodoComponent = () => {
  let todosList = ["wash up", "eat some pizza", "take a nap", "buy flowers"];
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

  const todosArr = todos.map((item, index) => (

    <TodoItem item={ item } key={ index } onDelete={ onDelete } />

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
