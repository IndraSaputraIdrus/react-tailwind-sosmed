import clsx from "clsx";
import { IoMoon } from "react-icons/io5";

const Switch = ({ defaultChecked, onChecked }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-7",
        "pl-3 py-3 rounded-lg",
        "duration-300",
        "hover:bg-gray-100",
        "dark:hover:bg-slate-800"
      )}
    >
      <IoMoon />
      <div
        className="flex items-center relative"
        onClick={() => onChecked(!defaultChecked)}
      >
        <input
          className="hidden"
          defaultChecked={defaultChecked}
          type="checkbox"
        />
        <div
          className={clsx(
            "w-5 h-5",
            "rounded-full",
            "absolute",
            "transition-all duration-300",
            defaultChecked ? "translate-x-5 bg-blue-500" : "bg-white",
            "drop-shadow-md"
          )}
        />
        <div
          className={clsx(
            defaultChecked ? "bg-blue-200" : "bg-gray-300",
            "transition-all duration-300",
            "w-10 h-4",
            "rounded-full"
          )}
        />
      </div>
    </div>
  );
};

export default Switch;
