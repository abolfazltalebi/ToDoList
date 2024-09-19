import { IoMdCloseCircleOutline } from "react-icons/io";
export default function ToDoItems({
  item,
  handleToggleIsDone,
  handleDeleteItem,
}) {
  return (
    <div className="flex items-center gap-1 border-b-2 border-purple-500 py-3">
      <input
        type="checkbox"
        checked={item.isDone}
        className="accent-purple-500 w-4 h-4 "
        id={"todos" + item.id}
        onChange={() => handleToggleIsDone(item)}
      />
      <label
        htmlFor={"todos" + item.id}
        className={` font-semibold ${
          item.isDone ? "line-through" : "font-medium"
        }`}
      >
        {item.text}
      </label>
      <button
        className="bg-purple-500 text-white px-1 py-1 scale-125 rounded-xl mr-auto"
        onClick={() => handleDeleteItem(item)}
      >
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}
