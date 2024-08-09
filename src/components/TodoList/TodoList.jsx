import { useState } from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";
function ToDoList() {
  const [todoValue, setTodoValue] = useState([]);
  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="container bg-white mx-auto md:w-1/2 relative  
    top-24 md:top-32 p-4 rounded-md">
      <div>
        <h2 className="text-4xl md:text-6xl text-center my-12 bg-gradient-to-r from-violet-900 to-purple-500 text-transparent bg-clip-text font-bold ">
          Welcome To ToDo List
        </h2>
      </div>
      <Form createTodo={createTodo} />
      <div>
        {todoValue.map((todo) => {
          return todo.isEditing ? (
            <Edit editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
