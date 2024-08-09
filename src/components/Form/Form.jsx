import { useState } from "react";

function Form({ createTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };
  return (
    <form
      className="w-full mb-4 flex items-baseline justify-center gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className=" bg-violet-500 focus:bg-violet-700 focus:outline-none shadow-lg p-3 w-1/2  text-white mb-8 rounded-full placeholder:text-white "
        placeholder="what task do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none p-3 w-[150px] text-white cursor-pointer rounded-full">
        Add New Task
      </button>
    </form>
  );
}

export default Form;
