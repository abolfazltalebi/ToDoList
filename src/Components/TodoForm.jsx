import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
export default function TodoForm({ handleAddTodo }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return alert("مقدار خالی مجاز نمی باشد.");
    handleAddTodo({ id: Math.random(), text: input.trim(), isDone: false });
    setInput("");
  }

  function handleChangeInput(e) {
    setInput(e.target.value);
  }

  return (
    <section className="mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid grid-cols-4 gap-4"
      >
        <input
          type="text"
          className="shadow-lg p-2 bg-gray-200 text-black rounded-xl col-span-3 text-xl"
          placeholder="write a todo...."
          value={input}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          className="bg-purple-700 flex gap-2 items-center justify-center py-2 rounded-xl text-white transition-all hover:bg-purple-400 text-md"
        >
          اضافه کردن
          <FaRegCheckCircle />
        </button>
      </form>
    </section>
  );
}
