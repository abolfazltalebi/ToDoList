import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
function Todo({ task, deleteTodo, editTodo }) {
  return (
    <div className="flex justify-between items-center bg-violet-800 text-white py-4 px-4 rounded-full mb-1 cursor-pointer">
      <p>{task.task}</p>
      <div className="flex items-center gap-x-4">
        <AiFillEdit
          className="text-xl transition-all hover:scale-125"
          onClick={() => {
            editTodo(task?.id);
          }}
        />
        <BsFillTrashFill
          className="text-xl transition-all hover:scale-125"
          onClick={() => {
            deleteTodo(task?.id);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
