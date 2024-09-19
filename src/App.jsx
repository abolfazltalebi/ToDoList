import { useState } from "react";
import ToDoItems from "./Components/ToDoItems";
import TodoForm from "./Components/TodoForm";
import TodoHeader from "./Components/TodoHeader";

export default function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  function updateTodos(todos) {
    setTodoItems(todos);
    localStorage.setItem("todoItems", JSON.stringify(todos));
  }

  function handleAddTodoItem(todo) {
    updateTodos([...todoItems, todo]);
  }

  function handleToggleIsDone(todo) {
    const updatedTodos = todoItems.map((todoItem) =>
      todoItem.id === todo.id
        ? { ...todoItem, isDone: !todoItem.isDone }
        : todoItem
    );
    updateTodos(updatedTodos);
  }

  function handleDeleteItem(todo) {
    const updatedTodos = todoItems.filter((item) => item.id !== todo.id);
    updateTodos(updatedTodos);
  }

  return (
    <main className="bg-white  container md:max-w-3xl mx-auto p-10 rounded-3xl">
      <TodoHeader />
      <TodoForm handleAddTodo={handleAddTodoItem} />
      <section className="todo-items mt-5 space-y-6">
        {todoItems.length ? (
          todoItems.map((item) => {
            return (
              <div key={item.id}>
                <ToDoItems
                  item={item}
                  handleToggleIsDone={handleToggleIsDone}
                  handleDeleteItem={handleDeleteItem}
                />
              </div>
            );
          })
        ) : (
          <h2 className="text-center text-xl text-purple-500">
            تودو جدید رو وارد کن؟
          </h2>
        )}
      </section>
    </main>
  );
}
